// Reference definitions to html DOM elements

const startButton = document.getElementById('start-btn')
const questContElement = document.getElementById('quest-cont')


// Event listeners section

startButton.addEventListener('click', startGame)


// Functions section

function startGame() {
    startButton.classList.add('hide')
    questContElement.classList.remove('hide')
    getNextQuestion()

}

function getNextQuestion() {

}

function chooseAnswer() {

}