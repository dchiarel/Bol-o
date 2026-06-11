# ⚽ BOLÃO COPA 2026

Um aplicativo web interativo para um bolão de apostas sobre a Copa do Mundo 2026 com amigos.

## 🚀 Status: PRONTO PARA USAR!

### Teste Realizado ✅
Validação completa do sistema de pontuação:
- **Maria** conquistou **233 pontos** com:
  - 10 pts em Grupos (placar exato)
  - 38 pts em Knockouts (com multipliers)
  - 125 pts em Previsões Gerais (artilheiro + finalistas + campeão)
  - 60 pts em Golden Tipp (placar perfeito × 3)

## 📱 Acessar a App

### Online (Próximo Passo)
1. Fazer upload dos arquivos para hospedagem (Vercel, Netlify, GitHub Pages)
2. Compartilhar URL com amigos
3. Cada amigo usa seu próprio navegador (dados salvos localmente)

### Localmente (Desenvolvimento)
```bash
# Na pasta C:\Users\Dj\Desktop\Bolão\
python -m http.server 8000
# Acessar: http://localhost:8000
```

## 📋 Como Jogar

### 1. Criar Participantes (Aba Home)
- Digite o nome do amigo
- Clique "+ Adicionar"
- Repita para todos

### 2. Fazer Palpites

#### Previsões Gerais (Aba Previsões) - 100 pontos possíveis
- **Artilheiro** (50 pts) - escolha entre 1000+ jogadores
- **Finalista 1** (25 pts) - escolha um país
- **Finalista 2** (25 pts) - escolha outro país
- **Campeão** (25 pts) - escolha o vencedor

#### Jogos de Grupo (Aba Grupos) - até 720 pontos (72 jogos × 10 pts)
- Digite o placar no formato "X-Y" (ex: "2-1")
- 10 pts = Placar exato
- 6 pts = Vencedor + diferença de gols certos
- 4 pts = Apenas vencedor certo

#### Knockouts (Abas 16avos, Oitavas, Quartas, Final)
Com multipliers progressivos:

| Fase | Pontos | Multiplier | Total |
|------|--------|-----------|-------|
| 16avos | 4/6/10 | 1.5x | 6/9/15 |
| Oitavas | 4/6/10 | 2x | 8/12/20 |
| Quartas | 4/6/10 | 3x | 12/18/30 |
| Semis | 4/6/10 | 3x | 12/18/30 |
| Final | 4/6/10 | 5x | 20/30/50 |

**Extra**: Selecione qual time avança (+2 pts × multiplier)

### 3. Ver Ranking (Aba Ranking)
- Visualize o score total e breakdown por categoria
- Atualiza automaticamente conforme resultados saem

## 🎯 Exemplo de Pontuação

### Maria - Total: 233 pts

```
Grupos (72 jogos possíveis):
  - Argentina 2-0 Canadá → 10 pts ✓

Knockouts (28 jogos possíveis, com multipliers):
  - Round of 16: Brasil 2-1 México (avanço correto) → 15 + 3 = 18 pts
  - Oitavas: Brasil 2-0 França → 20 pts

Previsões Gerais:
  - Artilheiro: Neymar ✓ → 50 pts
  - Finalistas: Brasil ✓ e Argentina ✓ → 50 pts
  - Campeão: Brasil ✓ → 25 pts
  Total → 125 pts

Golden Tipps (3 bets especiais em knockouts):
  - Oitavas: Brasil 2-0 França (perfeito) → 20 × 3 = 60 pts

TOTAL: 10 + 38 + 125 + 60 = 233 pts 🏆
```

## 📊 Estrutura de Dados

Todos os dados são salvos automaticamente no navegador (`localStorage v5`):
- ✅ Participantes
- ✅ Palpites por jogo
- ✅ Previsões gerais
- ✅ Resultados de jogos
- ✅ Golden Tipps

**Nota**: Dados são locais por navegador. Para compartilhar entre usuários, seria necessário servidor backend.

## 🎮 Funcionalidades

### Implementadas ✅
- [x] Gerenciamento de participantes
- [x] Palpites de jogos (72 jogos de grupo)
- [x] Palpites de knockouts (28 jogos)
- [x] Seleção de avanço em knockouts
- [x] Previsões gerais (4 categorias)
- [x] Sistema de multipliers (1x a 5x)
- [x] Golden Tipps (3 jogos especiais × 3)
- [x] Cálculo automático de scores
- [x] Ranking com breakdown
- [x] Persistência de dados
- [x] UI responsiva

### Futuro (Nice to Have)
- [ ] Admin panel para inserir resultados reais
- [ ] Histórico de atualizações
- [ ] Exportar em PDF/CSV
- [ ] Dark mode
- [ ] Backend com banco de dados (para multi-usuário)

## 📁 Arquivos

```
Bolão/
├── index.html         (Interface principal)
├── app.js             (Lógica e scoring)
├── data.js            (Grupos e knockouts)
├── jogadores.js       (Elencos de todos os 48 países)
├── README.md          (Este arquivo)
└── IMPLEMENTACAO.md   (Documentação técnica)
```

## 🔧 Requisitos Técnicos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Suporte a localStorage
- JavaScript habilitado
- ~500 KB de espaço em localStorage por usuário

## ❓ FAQ

**P: Dados são salvos?**
R: Sim! localStorage salva automaticamente no navegador de cada usuário.

**P: Posso acessar de outro computador?**
R: Não, os dados ficam no navegador local. Precisa fazer upload para servidor.

**P: Como inserir resultados reais?**
R: Atualmente via console (developer tools). Admin panel virá em breve.

**P: Quantos participantes posso adicionar?**
R: Ilimitado (limitado apenas pelo espaço do localStorage).

**P: Posso editar palpites após entrar?**
R: Sim! Volte na aba e mude o valor. Salva automaticamente.

## 📞 Contato / Suporte

Para dúvidas ou sugestões, verifique a documentação em `IMPLEMENTACAO.md`.

---

**Versão**: 1.0 MVP  
**Data**: 2 de Junho de 2026  
**Status**: 🟢 Produção
