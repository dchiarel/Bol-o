# ⚡ Comece em 5 Minutos

## 1️⃣ Rodar Localmente (Teste)

```bash
# Abrir PowerShell na pasta C:\Users\Dj\Desktop\Bolão\
python -m http.server 8000

# Abrir navegador:
http://localhost:8000
```

## 2️⃣ Colocar Online (Produção)

### GitHub Pages (Recomendado)
```bash
# Instalar Git (se não tiver)
# Download: https://git-scm.com

# Abrir Git Bash nesta pasta
cd C:\Users\Dj\Desktop\Bolão

# Inicializar repo
git init
git add .
git commit -m "Bolão Copa 2026"

# Criar repo em https://github.com (nome: bolao-copa-2026)
git remote add origin https://github.com/seuusername/bolao-copa-2026.git
git branch -M main
git push -u origin main

# Ativar Pages em Settings → Pages → main branch
# Pronto! Acesse: https://seuusername.github.io/bolao-copa-2026
```

## 3️⃣ Usar o App

**Aba "Home"**: Adicione os participantes
```
Seu Nome → + Adicionar
Amigo 1 → + Adicionar
Amigo 2 → + Adicionar
```

**Aba "Previsões"**: Escolha artilheiro, finalistas e campeão
```
Artilheiro: Neymar, Mbappe, etc (50 pts)
Finalista 1: Brasil, França, etc (25 pts)
Finalista 2: Argentina, Holanda, etc (25 pts)
Campeão: Brasil, Espanha, etc (25 pts)
```

**Aba "Grupos"**: Digite placares
```
Formato: "2-1"
Placar Exato = 10 pts
Vencedor + GD = 6 pts
Apenas Vencedor = 4 pts
```

**Abas "16avos" → "Final"**: Placares + Avanço
```
Placar: "2-1"
Avanço: Selecione qual time avança (+2 pts)

16avos: 1.5x multiplier
Oitavas: 2x multiplier
Quartas: 3x multiplier
Final: 5x multiplier
```

**Aba "Ranking"**: Veja quem está ganhando
```
Total | Grupos | Knockouts | Gerais | Golden
```

## 4️⃣ Compartilhar com Amigos

```
Copie a URL: https://seuusername.github.io/bolao-copa-2026
Envie por WhatsApp/Email/etc

Cada amigo abre em seu navegador:
- Seus dados ficam salvos automaticamente
- Todos veem o ranking em tempo real
```

---

## ✅ Estrutura de Pontos

| Tipo | Pontos | Nota |
|------|--------|------|
| Grupo - Exato | 10 | Sem multiplier |
| Grupo - GD | 6 | Sem multiplier |
| Grupo - Vencedor | 4 | Sem multiplier |
| 16avos - Exato | 15 | 10 × 1.5x |
| Oitavas - Exato | 20 | 10 × 2x |
| Quartas - Exato | 30 | 10 × 3x |
| Final - Exato | 50 | 10 × 5x |
| Avanço | +2/3/4/5/10 | Multiplicado também |
| Artilheiro | 50 | Fixo |
| Finalista | 25 | Fixo (cada um) |
| Campeão | 25 | Fixo |
| Golden Tipp | ×3 | Score × 3 (perfeito) |

---

## 🎓 Exemplo

**Maria ganha**:
- Jogo Grupo: 2-1 exato = 10 pts
- Jogo 16avos: 2-1 exato + avanço = 15 + 3 = 18 pts
- Jogo Oitavas: 2-0 exato (Golden Tipp) = 20 × 3 = 60 pts
- Artilheiro: Neymar = 50 pts
- Finalistas: Brasil + Argentina = 50 pts
- Campeão: Brasil = 25 pts
**TOTAL = 213 pts** 🏆

---

## 🆘 Problemas?

**Dados não salvam?**
- Abrir DevTools (F12) → Application → localStorage
- Verificar se está salvo `bolao_state_v5`

**Ranking não atualiza?**
- Clicar em outra aba e voltar
- Ou recarregar página (F5)

**Não consegue ver dropdowns?**
- Testes em Chrome/Firefox/Safari funcionam
- Edge também funciona

---

## 📞 Mais Info

- **README.md** - Guia completo
- **DEPLOY.md** - Todas as opções de deploy
- **SUMARIO.md** - Documentação técnica

---

## 🚀 Pronto?

1. ✅ Rodar em `http://localhost:8000`
2. ✅ Testar com 2-3 amigos
3. ✅ Fazer upload no GitHub
4. ✅ Compartilhar URL
5. ✅ Aproveitar o bolão!

Boa sorte! ⚽🏆
