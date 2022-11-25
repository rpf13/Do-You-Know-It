// Reference definitions to html DOM elements

const startButton = document.getElementById('start-btn');
const questContElement = document.getElementById('quest-cont');
const nextButton = document.getElementById('next-btn');
const questElement = document.getElementById('quiz-question');
const answButtonsElement = document.getElementById('quiz-answers');

// define Variables, which are going to be changed in the function

let randQuestions, currQuestIndex;
let correctAnswers = 0;
let incorrectAnswers = 0;
let counter = document.getElementById("counter");


// Event listeners section

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currQuestIndex++;
    // update here also the question count
    getNextQuestion();
});


// Functions section

/**
 * This function will start the game, once the Start Game button is clicked.
 * It will hide the Start Game button and immediately display the first,
 * randomly selected question. We use negative or positive numbers as the sort
 * algorithm (positive one way, negative the other way). To get this neg or pos
 * number, we use Math.rand which gives a rand number betw. 1 and 0. To become
 * negative, we subtract 0.5. The clearCounterState function is called to reset
 * related counters. 
 */

function startGame() {
    startButton.classList.add('hide');
    clearCounterState();
    randQuestions = questions.sort(() => Math.random() - .5);
    currQuestIndex = 0;
    questContElement.classList.remove('hide');
    getNextQuestion();
}

/**
 * This function will call the clearQuizContent function, to clear the quiz
 * section. It will also call the displQuestion function and handover the
 * randQuestion w. the current Question Index, as argument.
 * It will set the question counter
 */

function getNextQuestion() {
    clearQuizContent();
    displQuest(randQuestions[currQuestIndex]);
    // remove consol statement
    console.log(currQuestIndex);
    counter.innerText = `${currQuestIndex + 1} / ${questions.length}`;
}

/**
 * This function will display the question - access the DOM element.
 * It will take randQuestOfArray as input parameter and out of that,
 * display k,v question.
 * It will loop over the anser k, v pair and create a button element
 * for each of them and set the text. If the value of the answer is correct,
 * the dataset of that button will be set to correct. An event listener
 * will call the chooseAnswer function and handover the event of "clicking" the button.
 * The answerButtonElement will receive the answers as child and show them.
 * 
 * @param {*} randQuestOfArray result of randQuestions definition
 */

function displQuest(randQuestOfArray) {
    questElement.innerText = randQuestOfArray.question;
    randQuestOfArray.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn-quiz');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', chooseAnswer);
        answButtonsElement.appendChild(button);
    });
}

/**
 * This function will clear the whole quiz content (question, answers), once a new question
 * gets displayed.
 * The while loop makes sure, the buttons with the old answer are deleted. Since the new buttons
 * with the new answers will appended in the DisplQuest function, they are 2nd child element.
 * Therefore we have to make sure, we delete the first child element, with the old answers.
 */

function clearQuizContent() {
    nextButton.classList.add('hide');
    while (answButtonsElement.firstChild) {
        answButtonsElement.removeChild(answButtonsElement.firstChild);
    }
}

/**
 * This function will identify which button is clicked and evaluate the dataset
 * whether it is correct or not in order to set the correct color to it. The input parameter
 * is the click event, which is handovered from displQuest function.
 * If the dataset of the button has the correct value, the const correct will be filled.
 * A loop over the other, non clicked elements, which we got via answButtonElement, evaluates
 * their dataset if correct or wrong and sets the status.
 * The correct / wrong counter will be set accordingly. The DOM gets parsed for the old value
 * and increases it by 1.
 * @param {*} klickEvent which is defined w. event listener in displQuest function
 */

function chooseAnswer(klickEvent) {
    const klickedButton = klickEvent.target;
    const correct = klickedButton.dataset.correct;
    Array.from(answButtonsElement.children).forEach(button => {
        setState(button, button.dataset.correct);
    });
    if (randQuestions.length > currQuestIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        // remove or update this function to if we are at the end of q's we end game and message
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    if (correct) {
        let oldCorrect = parseInt(document.getElementById("correct").innerText);
        document.getElementById("correct").innerText = ++oldCorrect;
    } else {
        let oldIncorrect = parseInt(document.getElementById("incorrect").innerText);
        document.getElementById("incorrect").innerText = ++oldIncorrect;
    }
}

/**
 * This function will take the actual button element and the status of the dataset, whether it
 * is correct or not.
 * The status of the element will be cleared to make sure, we can set the proper state. The
 * clearState function is called for this and the element is handovered.
 * If the state of the button dataset element is correct, we set the class correct, if it is
 * incorrect, we set the class wrong.
 * @param {*} element the actual button element
 * @param {*} correct status of the dataset whether correct or wrong
 */

function setState(element, correct) {
    clearState(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * This function will take the button class element (correct or wrong) we got from setState function
 * @param {*} clearElement The button class element altered from setState function
 */

function clearState(clearElement) {
    clearElement.classList.remove('correct');
    clearElement.classList.remove('wrong');
}

/**
 * This function will clear the state of correct / incorrect question counter
 * and therefore set the value of the text displayed back to 0.
 */

function clearCounterState() {
    document.getElementById("correct").innerText = 0;
    document.getElementById("incorrect").innerText = 0;
}