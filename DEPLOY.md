# 🚀 Como Colocar o Bolão Online

## Opção 1: GitHub Pages (RECOMENDADO - Grátis)

### Passo 1: Criar um repositório no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome: `bolao-copa-2026`
4. Descrição: "Bolão Copa 2026"
5. Deixe público
6. Clique "Create repository"

### Passo 2: Fazer upload dos arquivos
1. Clique em "Add file" → "Upload files"
2. Arraste e solte os 4 arquivos:
   - `index.html`
   - `app.js`
   - `data.js`
   - `jogadores.js`
3. Clique "Commit changes"

### Passo 3: Ativar GitHub Pages
1. Vá em "Settings"
2. Role até "Pages"
3. Em "Source", selecione "main branch"
4. Clique "Save"

### Passo 4: Compartilhar
- A URL será: `https://seuusername.github.io/bolao-copa-2026`
- Compartilhe com amigos!

---

## Opção 2: Vercel (ALTERNATIVA - Grátis, Mais Rápido)

### Passo 1: Criar conta
1. Acesse [vercel.com](https://vercel.com)
2. Clique "Sign Up"
3. Faça login com GitHub

### Passo 2: Fazer Deploy
1. Clique "New Project"
2. Selecione seu repositório `bolao-copa-2026`
3. Clique "Import"
4. Deixe as configurações padrão
5. Clique "Deploy"

### Passo 3: Compartilhar
- A URL será algo como: `https://bolao-copa-2026.vercel.app`
- Compartilhe com amigos!

---

## Opção 3: Netlify (ALTERNATIVA - Grátis)

### Passo 1: Fazer upload via Drag & Drop
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta com os 4 arquivos
3. Pronto! Deploy automático

### Passo 2: Compartilhar
- A URL será um random hash: `https://xyz123.netlify.app`
- Você pode renomear em "Site settings"

---

## Opção 4: Servidor Local (Para Testes)

Se quiser testar antes de colocar online:

```bash
# Windows - Abrir PowerShell na pasta do projeto
python -m http.server 8000

# Mac/Linux
python3 -m http.server 8000

# Acessar no navegador:
http://localhost:8000
```

---

## ✅ Checklist Antes de Compartilhar

- [ ] Todos os 4 arquivos foram feitos upload
- [ ] Testou no navegador (mobile também)
- [ ] localStorage está salvando dados
- [ ] Ranking está funcionando
- [ ] Compartilhou URL com amigos

---

## 🔒 Notas de Segurança

⚠️ **IMPORTANTE**: 
- Dados ficam apenas no navegador local (localStorage)
- Cada pessoa terá sua própria cópia dos dados
- Não há autenticação (qualquer um pode editar)

Se precisar de segurança real (usuários diferentes, dados compartilhados), seria necessário:
- Backend em Node.js/Python
- Banco de dados (PostgreSQL/MongoDB)
- Sistema de autenticação

---

## 📊 Resultado Final

Após seguir um dos passos acima, você terá:
- ✅ App online e acessível
- ✅ URL para compartilhar
- ✅ Participantes podem fazer palpites
- ✅ Ranking atualiza automaticamente
- ✅ Dados salvos no navegador de cada um

Aproveite o bolão! ⚽🏆

---

**Dúvidas?** Veja `README.md` e `IMPLEMENTACAO.md`
