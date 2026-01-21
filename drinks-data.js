// Banco de dados de drinks baseado nas receitas do manual
const drinksDatabase = [
    {
        name: "Acerola Martini",
        emoji: "🍹",
        correctIngredients: ["Vodka Ketel One", "Polpa de acerola", "Suco de maracujá", "Licor Chambord", "Limão siciliano", "Xarope de açúcar"],
        wrongIngredients: ["Rum", "Gin", "Tequila", "Suco de laranja", "Hortelã"]
    },
    {
        name: "Caipirinha",
        emoji: "🍋",
        correctIngredients: ["Cachaça", "Limão", "Açúcar", "Gelo"],
        wrongIngredients: ["Vodka", "Rum", "Hortelã", "Água tônica", "Refrigerante"]
    },
    {
        name: "Mojito",
        emoji: "🌿",
        correctIngredients: ["Rum Bacardi Carta Branca", "Hortelã", "Açúcar", "Limão-taiti", "Soda limonada", "Gelo"],
        wrongIngredients: ["Vodka", "Gin", "Cachaça", "Suco de laranja", "Refrigerante"]
    },
    {
        name: "Cosmopolitan",
        emoji: "🍸",
        correctIngredients: ["Vodka nacional", "Licor Stock curaçau fino incolor", "Suco de limão-taiti", "Xarope Monin Cranberry"],
        wrongIngredients: ["Gin", "Rum", "Tequila", "Suco de laranja", "Refrigerante"]
    },
    {
        name: "Margarita",
        emoji: "🍹",
        correctIngredients: ["Tequila José Cuervo", "Suco de limão-taiti", "Gelo", "Licor Stock curaçau fino incolor", "Sal"],
        wrongIngredients: ["Vodka", "Rum", "Açúcar", "Hortelã", "Suco de laranja"]
    },
    {
        name: "Caipiroska",
        emoji: "🍋",
        correctIngredients: ["Vodka", "Limão", "Açúcar", "Gelo"],
        wrongIngredients: ["Cachaça", "Rum", "Gin", "Hortelã", "Água tônica"]
    },
    {
        name: "Aperol Spritz",
        emoji: "🥂",
        correctIngredients: ["Espumante homologado", "Aperol", "Soda limonada", "Gelo"],
        wrongIngredients: ["Vodka", "Gin", "Rum", "Suco de laranja", "Limão"]
    },
    {
        name: "Gin Tônica",
        emoji: "🍸",
        correctIngredients: ["Gin Tanqueray", "Água tônica", "Limão siciliano", "Zimbro", "Gelo"],
        wrongIngredients: ["Vodka", "Rum", "Refrigerante", "Hortelã", "Açúcar"]
    },
    {
        name: "Bloody Mary",
        emoji: "🍅",
        correctIngredients: ["Vodka nacional", "Suco de tomate", "Suco de limão-taiti", "Molho inglês", "Pimenta Tabasco", "Sal", "Gelo"],
        wrongIngredients: ["Gin", "Rum", "Suco de laranja", "Refrigerante", "Açúcar"]
    },
    {
        name: "Piña Colada",
        emoji: "🥥",
        correctIngredients: ["Rum Bacardi Carta Branca", "Suco de abacaxi concentrado", "Leite de coco", "Leite condensado", "Xarope de groselha", "Gelo"],
        wrongIngredients: ["Vodka", "Gin", "Suco de laranja", "Hortelã", "Açúcar"]
    },
    {
        name: "Manhattan",
        emoji: "🥃",
        correctIngredients: ["Whiskey Jack Daniels", "Vermute homologado", "Angostura"],
        wrongIngredients: ["Vodka", "Gin", "Rum", "Refrigerante", "Suco de laranja"]
    },
    {
        name: "Negroni",
        emoji: "🍷",
        correctIngredients: ["Gin Tanqueray", "Campari", "Vermute Punt e Mes", "Gelo"],
        wrongIngredients: ["Vodka", "Rum", "Tequila", "Refrigerante", "Suco de laranja"]
    },
    {
        name: "Caipirinha de Morango",
        emoji: "🍓",
        correctIngredients: ["Cachaça", "Morangos", "Açúcar", "Gelo"],
        wrongIngredients: ["Vodka", "Rum", "Limão", "Hortelã", "Refrigerante"]
    },
    {
        name: "Sex on the Beach",
        emoji: "🍑",
        correctIngredients: ["Vodka nacional", "Licor Stock de pêssego", "Suco de laranja natural", "Xarope Monin Grenadine", "Gelo"],
        wrongIngredients: ["Gin", "Rum", "Suco de limão", "Refrigerante", "Hortelã"]
    },
    {
        name: "Caipirinha de Frutas Vermelhas",
        emoji: "🫐",
        correctIngredients: ["Vodka nacional", "Morangos", "Cranberry congelado", "Blueberry congelado", "Açúcar", "Gelo"],
        wrongIngredients: ["Cachaça", "Rum", "Limão", "Hortelã", "Refrigerante"]
    }
];

// Embaralhar array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Selecionar drinks aleatórios para o jogo
function getRandomDrinks(count = 10) {
    const shuffled = shuffleArray(drinksDatabase);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Criar lista completa de ingredientes (corretos + incorretos embaralhados)
function createIngredientsList(drink) {
    const allIngredients = [...drink.correctIngredients, ...drink.wrongIngredients];
    return shuffleArray(allIngredients);
}
