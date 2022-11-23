// Reference definitions to html DOM elements

const startButton = document.getElementById('start-btn')
const questContElement = document.getElementById('quest-cont')
const nextButton = document.getElementById('next-btn')
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
    clearQuizContent()
    displQuest(randQuestions[currQuestIndex])
    // need to remove this console
    console.log(currQuestIndex)
}

function displQuest(randQuestOfArray) {
    questElement.innerText = randQuestOfArray.question
    randQuestOfArray.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn-quiz')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answButtonsElement.appendChild(button)
    });
}

function clearQuizContent() {
    nextButton.classList.add('hide')
    while (answButtonsElement.firstChild) {
        answButtonsElement.removeChild(answButtonsElement.firstChild)
    }
}

function chooseAnswer(klickEvent) {
    const klickedButton = klickEvent.target
    const correct = klickedButton.dataset.correct
    Array.from(answButtonsElement.children).forEach(button => {
        setState(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setState(element, correct) {
    clearState(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearState(clearElement) {
    clearElement.classList.remove('correct')
    clearElement.classList.remove('wrong')
}