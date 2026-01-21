# 🍹 Drink Master Quiz

## 📱 Aplicativo de Quiz para Aprender Receitas de Drinks

Um jogo educativo mobile para treinar e memorizar ingredientes de drinks clássicos!

## ✨ Funcionalidades

### 🎮 Gameplay
- **10 drinks aleatórios** por partida
- **Sistema de seleção** múltipla de ingredientes
- **Feedback colorido** de acordo com o desempenho:
  - ✅ **Verde**: Acertou todos os ingredientes
  - ⚠️ **Amarelo**: Faltam ingredientes (mostra quais faltam)
  - ❌ **Vermelho**: Não marcou nada ou marcou errado
- **Opção de pular** o drink atual
- **Estatísticas** de acertos e partidas jogadas
- **Banco de 15 drinks** clássicos

### 📊 Sistema de Pontuação
- Contador de acertos em tempo real
- Histórico salvo localmente (localStorage)
- Percentual de acerto ao final da partida

### 🎨 Design
- Interface mobile-first responsiva
- Animações suaves
- Gradientes modernos
- Emojis temáticos para cada drink

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador
1. Baixe todos os arquivos para uma pasta
2. Abra o arquivo `index.html` em qualquer navegador
3. Funciona em desktop, tablet e smartphone

### Opção 2: Hospedagem Online
1. Faça upload dos arquivos para um servidor web
2. Acesse pelo URL do servidor
3. Adicione à tela inicial do celular para experiência de app nativo

### Opção 3: Converter para App Nativo
Use ferramentas como:
- **Apache Cordova**
- **Ionic Capacitor**
- **React Native WebView**
- **PWA** (Progressive Web App)

## 📁 Estrutura de Arquivos

```
drink-quiz/
├── index.html          # Estrutura HTML
├── style.css           # Estilos e design
├── drinks-data.js      # Banco de dados dos drinks
├── app.js              # Lógica do jogo
└── README.md           # Documentação
```

## 🍸 Drinks Incluídos

1. Acerola Martini
2. Caipirinha
3. Mojito
4. Cosmopolitan
5. Margarita
6. Caipiroska
7. Aperol Spritz
8. Gin Tônica
9. Bloody Mary
10. Piña Colada
11. Manhattan
12. Negroni
13. Caipirinha de Morango
14. Sex on the Beach
15. Caipirinha de Frutas Vermelhas

## 🎯 Como Jogar

1. **Início**: Clique em "Começar Jogo"
2. **Seleção**: Toque nos ingredientes que você acha que fazem parte do drink
3. **Verificação**: Clique em "Verificar" para ver o resultado
4. **Feedback**: 
   - Verde ✅ = Parabéns! Você acertou tudo
   - Amarelo ⚠️ = Faltam ingredientes (veja quais)
   - Vermelho ❌ = Revise sua resposta
5. **Pular**: Use o botão "Pular" se não souber
6. **Continuar**: Clique em "Próximo Drink" para avançar

## 🔧 Personalização

### Adicionar Novos Drinks

Edite o arquivo `drinks-data.js` e adicione novos objetos no array `drinksDatabase`:

```javascript
{
    name: "Nome do Drink",
    emoji: "🍹",
    correctIngredients: ["Ingrediente 1", "Ingrediente 2"],
    wrongIngredients: ["Ingrediente Falso 1", "Ingrediente Falso 2"]
}
```

### Alterar Número de Perguntas

No arquivo `app.js`, linha da função `startGame()`:
```javascript
gameState.drinks = getRandomDrinks(10); // Altere o número 10
```

### Personalizar Cores

Edite as cores no arquivo `style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📱 Recursos Mobile

- ✅ Design responsivo
- ✅ Touch-friendly (botões grandes)
- ✅ Funciona offline (após primeiro carregamento)
- ✅ Salva progresso localmente
- ✅ Sem necessidade de instalação
- ✅ Pode ser adicionado à tela inicial

## 🌐 Compatibilidade

- ✅ Chrome/Safari (iOS e Android)
- ✅ Firefox
- ✅ Edge
- ✅ Opera
- ✅ Todos os navegadores modernos

## 💡 Dicas para Melhor Experiência

1. **No Smartphone**: Adicione à tela inicial para experiência de app
2. **Modo Paisagem**: Funciona também em modo horizontal
3. **Offline**: Após carregar uma vez, funciona sem internet
4. **Estatísticas**: Seus acertos são salvos automaticamente

## 🎓 Objetivo Educacional

Este quiz foi desenvolvido para ajudar:
- 🍹 Bartenders em treinamento
- 📚 Estudantes de gastronomia
- 🏆 Entusiastas de coquetelaria
- 🎯 Qualquer pessoa que queira aprender sobre drinks

## 🔄 Atualizações Futuras

Ideias para expansão:
- [ ] Modo de dificuldade (fácil, médio, difícil)
- [ ] Timer para respostas
- [ ] Modo multiplayer
- [ ] Ranking global
- [ ] Categorias de drinks (clássicos, tropicais, etc.)
- [ ] Fotos reais dos drinks
- [ ] Modo de receita completa (com medidas)
- [ ] Sistema de conquistas

## 📞 Suporte

Para dúvidas ou sugestões:
- Adicione mais drinks no banco de dados
- Personalize as cores e design
- Compartilhe com amigos!

---

**Desenvolvido com 💜 para apaixonados por drinks!**

Divirta-se aprendendo! 🍹🎉
