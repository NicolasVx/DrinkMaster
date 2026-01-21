// Estado do jogo
let gameState = {
    currentDrinkIndex: 0,
    drinks: [],
    selectedIngredients: [],
    score: 0,
    totalCorrect: parseInt(localStorage.getItem('totalCorrect')) || 0,
    totalPlayed: parseInt(localStorage.getItem('totalPlayed')) || 0
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
});

// Atualizar estatísticas
function updateStats() {
    document.getElementById('totalCorrect').textContent = gameState.totalCorrect;
    document.getElementById('totalPlayed').textContent = gameState.totalPlayed;
}

// Iniciar jogo
function startGame() {
    gameState.drinks = getRandomDrinks(10);
    gameState.currentDrinkIndex = 0;
    gameState.score = 0;
    gameState.selectedIngredients = [];
    
    showScreen('gameScreen');
    loadDrink();
}

// Carregar drink atual
function loadDrink() {
    if (gameState.currentDrinkIndex >= gameState.drinks.length) {
        showFinalScreen();
        return;
    }

    const drink = gameState.drinks[gameState.currentDrinkIndex];
    const allIngredients = createIngredientsList(drink);
    
    // Atualizar informações
    document.getElementById('drinkName').textContent = drink.name;
    document.querySelector('.drink-image').textContent = drink.emoji;
    document.getElementById('currentQuestion').textContent = gameState.currentDrinkIndex + 1;
    document.getElementById('totalQuestions').textContent = gameState.drinks.length;
    
    // Atualizar barra de progresso
    const progress = ((gameState.currentDrinkIndex) / gameState.drinks.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Limpar seleção anterior
    gameState.selectedIngredients = [];
    
    // Criar lista de ingredientes
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = '';
    
    allIngredients.forEach((ingredient, index) => {
        const item = document.createElement('div');
        item.className = 'ingredient-item';
        item.dataset.ingredient = ingredient;
        item.innerHTML = `
            <div class="ingredient-checkbox"></div>
            <div class="ingredient-text">${ingredient}</div>
        `;
        
        item.addEventListener('click', () => toggleIngredient(item, ingredient));
        ingredientsList.appendChild(item);
    });
}

// Toggle seleção de ingrediente
function toggleIngredient(element, ingredient) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        gameState.selectedIngredients = gameState.selectedIngredients.filter(i => i !== ingredient);
    } else {
        element.classList.add('selected');
        gameState.selectedIngredients.push(ingredient);
    }
}

// Verificar resposta
function checkAnswer() {
    const drink = gameState.drinks[gameState.currentDrinkIndex];
    const selected = gameState.selectedIngredients;
    const correct = drink.correctIngredients;
    
    // Se não marcou nada
    if (selected.length === 0) {
        showResultScreen(false, 'empty', correct);
        return;
    }
    
    // Verificar se acertou todos
    const allCorrect = correct.every(ing => selected.includes(ing)) && 
                      selected.every(ing => correct.includes(ing)) &&
                      selected.length === correct.length;
    
    // Identificar ingredientes faltando
    const missing = correct.filter(ing => !selected.includes(ing));
    
    if (allCorrect) {
        gameState.score++;
        showResultScreen(true, 'perfect', correct);
    } else if (missing.length > 0) {
        showResultScreen(false, 'incomplete', correct, missing);
    } else {
        showResultScreen(false, 'wrong', correct);
    }
    
    // Atualizar estatísticas globais
    gameState.totalPlayed++;
    if (allCorrect) {
        gameState.totalCorrect++;
    }
    localStorage.setItem('totalCorrect', gameState.totalCorrect);
    localStorage.setItem('totalPlayed', gameState.totalPlayed);
    updateStats();
}

// Mostrar tela de resultado
function showResultScreen(isCorrect, type, correctIngredients, missingIngredients = []) {
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const correctIngredientsDiv = document.getElementById('correctIngredients');
    
    // Configurar ícone e título
    if (type === 'perfect') {
        resultIcon.textContent = '✓';
        resultIcon.style.color = '#28a745';
        resultTitle.textContent = 'Parabéns! 🎉';
        resultMessage.textContent = 'Você acertou todos os ingredientes!';
    } else if (type === 'incomplete') {
        resultIcon.textContent = '⚠️';
        resultIcon.style.color = '#ffc107';
        resultTitle.textContent = 'Quase lá!';
        resultMessage.innerHTML = `Você esqueceu alguns ingredientes:<br><strong>${missingIngredients.join(', ')}</strong>`;
    } else if (type === 'empty') {
        resultIcon.textContent = '✗';
        resultIcon.style.color = '#dc3545';
        resultTitle.textContent = 'Ops!';
        resultMessage.textContent = 'Você não selecionou nenhum ingrediente!';
    } else {
        resultIcon.textContent = '✗';
        resultIcon.style.color = '#dc3545';
        resultTitle.textContent = 'Não foi dessa vez!';
        resultMessage.textContent = 'Alguns ingredientes estão incorretos.';
    }
    
    // Mostrar ingredientes corretos
    correctIngredientsDiv.innerHTML = `
        <h3>Ingredientes Corretos:</h3>
        <ul>
            ${correctIngredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
    `;
    
    showScreen('resultScreen');
}

// Pular drink
function skipDrink() {
    const drink = gameState.drinks[gameState.currentDrinkIndex];
    showResultScreen(false, 'skip', drink.correctIngredients);
    
    gameState.totalPlayed++;
    localStorage.setItem('totalPlayed', gameState.totalPlayed);
    updateStats();
}

// Próximo drink
function nextDrink() {
    gameState.currentDrinkIndex++;
    showScreen('gameScreen');
    loadDrink();
}

// Mostrar tela final
function showFinalScreen() {
    const finalScore = document.getElementById('finalScore');
    const finalTotal = document.getElementById('finalTotal');
    const scorePercentage = document.getElementById('scorePercentage');
    
    finalScore.textContent = gameState.score;
    finalTotal.textContent = gameState.drinks.length;
    
    const percentage = Math.round((gameState.score / gameState.drinks.length) * 100);
    scorePercentage.textContent = percentage + '% de acerto';
    
    showScreen('finalScreen');
}

// Reiniciar jogo
function restartGame() {
    startGame();
}

// Voltar ao menu
function goHome() {
    showScreen('homeScreen');
}

// Mostrar tela
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
