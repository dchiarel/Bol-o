# 🔧 Configurar Automação no GitHub (10 minutos)

## Fontes de resultados — 100% GRATUITAS, sem cadastro

| Fonte | Custo | API Key? |
|-------|-------|----------|
| OpenFootball (GitHub) | Grátis | ❌ Não precisa |
| worldcup26.ir | Grátis | ❌ Não precisa |
| TheSportsDB | Grátis | ❌ Não precisa |

O script tenta as 3 em sequência automaticamente.

---

## PASSO 1 — Subir arquivos para o GitHub

### Sem Git instalado (mais fácil):
1. Crie o repositório no GitHub (já fez ✅)
2. Clique em **"uploading an existing file"**
3. Abra `C:\Users\Dj\Desktop\Bolão` no Explorer
4. Ative "Itens ocultos" (Ver → Itens ocultos) para ver a pasta `.github`
5. Selecione **todos os arquivos e pastas** → arraste para o GitHub
6. Escreva uma mensagem: `Bolão Copa 2026` → **Commit changes**

### Com Git instalado:
```bash
cd C:\Users\Dj\Desktop\Bolão
git init
git add .
git commit -m "Bolão Copa 2026 - versão inicial"
git branch -M main
git remote add origin https://github.com/dchiarel/Bol-o.git
git push -u origin main
```

---

## PASSO 2 — Ativar GitHub Pages (para hospedar o site)

1. No repositório → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / pasta: **/ (root)**
4. Clique **Save**
5. Aguarde ~2 min
6. Site disponível em: `https://dchiarel.github.io/Bol-o`

---

## PASSO 3 — Adicionar Netlify Build Hook (opcional)

Só necessário se o site estiver no Netlify (bolaodosguri.netlify.app).

1. Painel Netlify → seu site → **Site configuration → Build hooks**
2. **Add build hook** → Nome: `github-daily` → **Save**
3. Copie a URL gerada

4. No GitHub → **Settings → Secrets and variables → Actions**
5. **New repository secret**:
   - Nome: `NETLIFY_BUILD_HOOK`
   - Valor: URL copiada

---

## PASSO 4 — Testar a automação

1. GitHub → **Actions** → **"⚽ Atualizar Resultados Copa 2026"**
2. **Run workflow** → **Run workflow**
3. Aguarde ~1 minuto
4. Verifique ✅ no log
5. Veja `resultados_2026.json` atualizado no repositório

---

## Como funciona no dia a dia

```
Todo dia às 6h BRT:
  GitHub Actions acorda (grátis)
       ↓
  Tenta OpenFootball → worldcup26.ir → TheSportsDB
       ↓
  Atualiza resultados_2026.json
       ↓
  Commit automático no GitHub
       ↓
  Netlify rebuild (se configurado)
       ↓
  Participantes veem scores atualizados!
```

---

## Entrada manual de resultados (fallback)

Se as APIs falharem ou antes de começar a Copa,
edite `resultados_2026.json` diretamente no GitHub:

```json
{
  "gameResults": {
    "c1": {
      "homeGoals": 2,
      "awayGoals": 0,
      "advancedTeam": "",
      "redCards": { "home": [], "away": [] }
    }
  }
}
```

IDs dos jogos do Brasil (Grupo C):
- `c1` = Brasil x Escócia — 12/06
- `c3` = Brasil x Haiti — 16/06
- `c6` = Marrocos x Brasil — 20/06

---

## Custo total

| Serviço | Custo |
|---------|-------|
| GitHub (repo + Actions) | R$ 0 |
| OpenFootball | R$ 0 |
| Netlify | R$ 0 |
| **TOTAL** | **R$ 0** |
