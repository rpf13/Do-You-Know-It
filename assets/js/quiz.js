// Reference definitions to html DOM elements

const startButton = document.getElementById('start-btn')
const questContElement = document.getElementById('quest-cont')
const questElement = document.getElementById('quiz-question')
const answButtonsElement = document.getElementById('quiz-answers')

// define Variables, which are going to be changed in the function

let randQuestions, currQuestIndex

// Event listeners section

startButton.addEventListener('click', startGame)


// Functions section

function startGame() {
    startButton.classList.add('hide')
    randQuestions = questions.sort(() => Math.random() - .5)
    currQuestIndex = 0
    questContElement.classList.remove('hide')
    getNextQuestion()

}

function getNextQuestion() {
    displQuest(randQuestions[currQuestIndex])
    // need to remove this console
    console.log(currQuestIndex)
}

function displQuest(randQuestOfArray) {
    questElement.innerText = randQuestOfArray.question
}

function chooseAnswer() {

}