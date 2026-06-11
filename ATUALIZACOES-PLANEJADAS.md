# 📋 Plano de Atualizações - Bolão Copa 2026

## 🎯 3 Atualizações Solicitadas

---

## 1️⃣ VALIDAÇÃO E CORREÇÃO DE JOGADORES

### Problema Identificado
Lista de jogadores em `jogadores.js` pode ter erros (nomes duplicados, atletas ausentes, etc).

### Fontes Confiáveis para Validação

#### 🏆 **Recomendado - FIFA Official**
- **URL**: https://www.fifa.com/pt/tournaments/mens/worldcup/canadamexicousa2026/teams
- **Vantagem**: Dados oficiais direto da FIFA
- **Última atualização**: 2 de junho de 2026
- **Formato**: Web (precisa scrapping) ou aguardar API oficial

#### 📊 **Goal.com Brasil**
- **URL**: https://www.goal.com/br/listas/lista-completa-convocados-todas-selecoes-copa-mundo-2026/bltff8de6ee6ca1e9e6
- **Vantagem**: Atualizado e completo
- **Última atualização**: Contínuo

#### 🏅 **Trivela (Confiável)**
- **URL**: https://trivela.com.br/copa-do-mundo/lista-completa-todos-jogadores-convocados-mundial/
- **Vantagem**: Especializada em futebol
- **Última atualização**: Contínuo

#### 🥇 **Olympics.com**
- **URL**: https://www.olympics.com/pt/noticias/copa-do-mundo-2026-convocados-elencos-selecao
- **Vantagem**: Oficial e atualizado
- **Última atualização**: 2 de junho de 2026

### Plano de Ação
```
1. Baixar lista completa de cada fonte (comparar 3-4)
2. Identificar erros/duplicatas/ausências
3. Corrigir jogadores.js com dados validados
4. Versionar como jogadores_v2.js
5. Deploy no Netlify
6. Teste com a app ativa
```

### Estimativa de Tempo
⏱️ **2-3 horas** (validação manual de 1000+ nomes)

---

## 2️⃣ SISTEMA DE EXPORTAÇÃO DE PALPITES EM CSV

### Funcionalidade
Admin (você) exporta os palpites de TODOS os participantes em CSV para auditoria/verificação futura.

### Arquivo CSV Gerado
```csv
data_export,participante,jogo_id,placar_palpite,resultado_real,score_obtido,fase,data_palpite
2026-06-15 14:30:00,Maria,a1,2-0,2-0,10,grupos,2026-06-13
2026-06-15 14:30:00,Maria,a2,1-1,0-2,0,grupos,2026-06-13
2026-06-15 14:30:00,Carlos,a1,1-1,2-0,4,grupos,2026-06-13
```

### Implementação
**Adicionar ao app.js:**
```javascript
// Função para exportar palpites em CSV
function exportarPalpitesCSV() {
    let csv = "data_export,participante,jogo_id,placar_palpite,resultado_real,score_obtido,fase,data_palpite\n";
    
    state.participants.forEach(participant => {
        Object.entries(state.gamesPredictions[participant.id] || {}).forEach(([gameId, pred]) => {
            const result = state.gameResults[gameId];
            const score = calculateScoreGame(participant.id, gameId);
            const fase = getFaseByGameId(gameId);
            
            csv += `"${new Date().toISOString()}","${participant.name}","${gameId}","${pred.winner}","${result ? result.homeGoals + '-' + result.awayGoals : 'N/A'}","${score}","${fase}","${participant.joinedDate}"\n`;
        });
    });
    
    // Download arquivo
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `palpites_bolao_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
}

// Adicionar botão em Admin Panel
// <button onclick="exportarPalpitesCSV()">📥 Exportar CSV</button>
```

### Resultado
- ✅ Download automático: `palpites_bolao_2026-06-15.csv`
- ✅ Incluí: Todos os palpites + resultados + scores
- ✅ Formato: Compatível com Excel/Google Sheets
- ✅ Auditável: Histórico completo

### Estimativa de Tempo
⏱️ **30-45 minutos**

---

## 3️⃣ SISTEMA AUTOMÁTICO DE ATUALIZAÇÃO (6H DIARIAMENTE)

### Arquitetura da Solução

```
┌─────────────────┐
│  GitHub Actions │
│   (Cron Job)    │ ← Roda todo dia às 6h da manhã
└────────┬────────┘
         │
         v
┌─────────────────────────────────┐
│  Netlify Function               │
│  (Serverless - API Futebol)    │ ← Busca resultados
└────────┬────────────────────────┘
         │
         v
┌──────────────────────────────────┐
│  Atualiza resultados_2026.json   │
│  (Repo GitHub)                   │ ← Armazena dados
└────────┬───────────────────────────┘
         │
         v
┌──────────────────────────────────┐
│  App recarrega dados             │
│  Scores recalculam              │ ← Participantes veem atualização
└──────────────────────────────────┘
```

### Opção 1: GitHub Actions + API Futebol (RECOMENDADO)

#### Setup:

**1. Gerar Token API Futebol**
- Site: https://www.api-futebol.com.br/
- Registrar conta gratuita
- Gerar API Key
- Salvar como secret no GitHub

**2. Criar arquivo `.github/workflows/atualizar-resultados.yml`:**

```yaml
name: Atualizar Resultados Copa 2026

on:
  schedule:
    - cron: '0 6 * * *'  # Todos os dias às 6h UTC (3h BRT)
  workflow_dispatch:     # Permitir rodar manualmente

jobs:
  atualizar:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Buscar resultados da API Futebol
        run: |
          curl -X GET "https://api.api-futebol.com.br/v1/copa-2026/partidas" \
            -H "Authorization: Bearer ${{ secrets.API_FUTEBOL_TOKEN }}" \
            -o resultados.json
      
      - name: Processar resultados
        run: node scripts/processar-resultados.js
      
      - name: Commit mudanças
        run: |
          git config user.email "bot@bolao.com"
          git config user.name "Bolao Bot"
          git add resultados_2026.json
          git commit -m "Atualizar resultados Copa 2026 - $(date)" || true
          git push
      
      - name: Notificar Netlify
        run: |
          curl -X POST ${{ secrets.NETLIFY_HOOK }} \
            -H "Content-Type: application/json" \
            -d '{"clear_cache":true}'
```

**3. Criar `scripts/processar-resultados.js`:**

```javascript
const fs = require('fs');

// Ler resultados brutos
const resultados = JSON.parse(fs.readFileSync('resultados.json', 'utf8'));

// Processar e mapear para formato do app
const processados = resultados.map(jogo => ({
    gameId: jogo.id,
    homeGoals: jogo.home_score,
    awayGoals: jogo.away_score,
    advancedTeam: jogo.winner,
    redCards: {
        home: jogo.red_cards_home || [],
        away: jogo.red_cards_away || []
    },
    timestamp: new Date().toISOString()
}));

// Salvar em JSON estruturado
fs.writeFileSync('resultados_2026.json', 
    JSON.stringify(processados, null, 2)
);

console.log(`✅ ${processados.length} resultados processados`);
```

**4. Configurar Secrets no GitHub:**
- Vá em: Settings → Secrets → New repository secret
- Nome: `API_FUTEBOL_TOKEN`
- Valor: Seu token da API Futebol

- Nome: `NETLIFY_HOOK`
- Valor: Build hook do seu site Netlify

#### Resultado:
- ✅ Roda todo dia às 6h da manhã
- ✅ Busca resultados automaticamente
- ✅ Atualiza repositório
- ✅ Dispara rebuild no Netlify
- ✅ App carrega novos dados
- ✅ Scores recalculam

---

### Opção 2: World Cup API (ALTERNATIVA)

```
API Endpoint: https://worldcupapi.com/matches
Retorna: Scores ao vivo, eventos, cartões
Plano Gratuito: ✅ Disponível
Atualização: Em tempo real
```

Setup seria similar ao Opção 1.

---

### O Que Será Atualizado Automaticamente

```javascript
{
    gameId: "a1",
    homeGoals: 2,
    awayGoals: 0,
    advancedTeam: "Argentina",
    redCards: {
        home: ["Messi 45min", "Otamendi 78min"],
        away: ["Davies 23min"]
    },
    timestamp: "2026-06-13T14:30:00Z"
}
```

---

## 📊 Cronograma de Implementação

```
Semana 1:
├─ [ ] Dia 1-2: Validar lista de jogadores (3h)
├─ [ ] Dia 3-4: Exportação CSV (1h)
└─ [ ] Dia 5-7: GitHub Actions + API (3h)

Total: ~7 horas
Resultado: Sistema 100% automático
```

---

## 💾 Arquivos a Modificar/Criar

```
Nova estrutura:
├── jogadores_v2.js              (Corrigido)
├── app.js                        (+ exportarCSV())
├── resultados_2026.json          (Novo)
├── scripts/
│   └── processar-resultados.js  (Novo)
├── .github/workflows/
│   └── atualizar-resultados.yml (Novo)
└── admin-panel.html              (Novo - opcional)
```

---

## 🔐 Segurança

### API Token
- ✅ Salvo como GitHub Secret (não exposto no código)
- ✅ Acesso restrito ao repositório
- ✅ Renovável a qualquer momento

### Dados
- ✅ Histórico mantido no GitHub
- ✅ Backup automático
- ✅ Auditável (commits)

---

## 📈 Benefícios

✅ **Automático**: Sem intervenção manual diária  
✅ **Confiável**: Dados de fonte oficial  
✅ **Auditável**: CSV de todos os palpites  
✅ **Escalável**: Suporta qualquer número de participantes  
✅ **Gratuito**: Sem custos adicionais  
✅ **Rastreável**: Histórico completo no Git  

---

## 🚀 Próximas Fases (Opcional)

1. **Admin Panel UI**
   - Interface visual para:
     - Validar resultados antes de confirmar
     - Ver histórico de atualizações
     - Exportar relatórios
   
2. **Notificações**
   - Email quando resultados saem
   - Push notification para mobile
   
3. **Cartões Vermelhos**
   - Tracking de quem leva cartão vermelho
   - Novo prêmio: "Maior infrator"

---

## 📞 Dúvidas?

- **API Futebol não funciona?** → Testar com World Cup API
- **GitHub Actions não roda?** → Verificar secrets e sintaxe YAML
- **Netlify não atualiza?** → Verificar build hook
- **CSV vazio?** → Verificar se há palpites salvos

---

**Status**: 📋 Planejado  
**Prioridade**: Alta  
**Impacto**: Sistema completo e automático  

Quer que eu comece qual parte primeiro?
