/* jshint esversion: 11 */

// This const questions definition will take all questions out of the questions.js
// file and randomize the order. It will then take the first 10 questions out
// of the array. Since the array gets randomized before, the 10 questions will be random.
// The questions array will then be the base data to work with in this file.

const questions = rawQuestions.sort(() => Math.random() - 0.5).slice(0,20);

// Reference definitions to html DOM elements

const startButton = document.getElementById('start-btn');
const questContElement = document.getElementById('quest-cont');
const nextButton = document.getElementById('next-btn');
const questElement = document.getElementById('quiz-question');
const answButtonsElement = document.getElementById('quiz-answers');
const gameCard = document.getElementById('game');
const quizCard = document.getElementById('quiz');
const restartButton = document.getElementById('restart-btn');
const endButton = document.getElementById('end-btn');
const howToPlayBtn = document.getElementById('howToPlayBtn');
const howToModal = document.getElementById('howToModal');
const closeBtn = document.getElementsByClassName('modal-close-btn')[0];
const feedbackBtn = document.getElementById('feedbackBtn');

// define Variables, which are going to be changed in the functions

let randQuestions, currQuestIndex;
// let correctAnswers = 0;
// let incorrectAnswers = 0;
let counter = document.getElementById("counter");
let quizTimer = document.getElementById('quizTimer');
let time = 45;
let remainTime;

// Event listeners section

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currQuestIndex++;
    // update here also the question count
    getNextQuestion();
});
endButton.addEventListener('click', goHome);
howToPlayBtn.addEventListener('click', displayModal);
closeBtn.addEventListener('click', hideModal);
feedbackBtn.addEventListener('click', goToForm);


// Functions section

/**
 * This function will add the countdown timer to the quiz. It will countdown from
 * start time as set, and if time is 0, it will call the stopCountdown function
 * to disable the JS interval. It will set countdown timer text accordingly, add
 * a Game Over text and disable the answer buttons. It will show the buttons
 * to restart or cancel the game. The additional specification of the time intervall
 * inside this function is necessary, since everytime the function gets called, it needs
 * to be resetted. It is not enough to only define it globally.
 */

function countDown() {
    time = 45;
    quizTimer.innerHTML = `${time} seconds`;
   remainTime = setInterval(()=>{
     time--;
     if (time >= 0) {
       quizTimer.innerHTML = `${time} seconds`;
     } 
     if (time === 0) {
       stopCountdown();
       document.getElementById("quizHeading").innerText = 'Game Over - you are too slow!';
       answButtonsElement.classList.add('disable-buttons');
       restartButton.classList.remove('hide');
       endButton.classList.remove('hide');
     }
   }, 1000);
}

/**
 * This function will stop the countdown timer by clearing the js interval as set
 * by the setInterval method (remainTime)
 */

function stopCountdown() {
  clearInterval(remainTime);
}

/**
 * This function will start the game (display card), once the Start Game button
 * is clicked. It will change the quizHeadin inner text, since this might have
 * been altered via the countDown function. It will hide the Start Game & Restart
 * button as well as the whole gameCard and immediately display the first, randomly
 * selected question.
 * We use negative or positive numbers as the sort algorithm (positive one way,
 * negative the other way). To get this neg or pos number, we use Math.rand,
 * which gives a rand number betw. 1 and 0. To become negative, we subtract 0.5.
 * The clearCounterState function is called to reset related counters. 
 */

function startGame() {
    // start button moved to game card, no need to hide sicne game card gets hidden
    // startButton.classList.add('hide');
    document.getElementById("quizHeading").innerText = "Let's play...";
    gameCard.classList.add('hide');
    restartButton.classList.add('hide');
    endButton.classList.add('hide');
    quizCard.classList.remove('hide');
    clearCounterState();
    quizTimer.innerHTML = `${time} seconds`;
    randQuestions = questions.sort(() => Math.random() - 0.5);
    currQuestIndex = 0;
    questContElement.classList.remove('hide');
    getNextQuestion();
}

/**
 * This function will clearQuizContent function, to clear the quiz
 * section. The countDown function will be called again and therefore time will be set
 * to the specified time. It will also call the displQuestion function and handover the
 * randQuestion w. the current Question Index, as argument.
 * It will set the question counter and it will enable the click option
 * again on the answer buttons.
 */

function getNextQuestion() {
    // stopCountdown() not needed since countdown is set again a few lines below
    clearQuizContent();
    countDown();
    answButtonsElement.classList.remove('disable-buttons');
    displQuest(randQuestions[currQuestIndex]);
    // remove console statement
    console.log(currQuestIndex);
    counter.innerText = `${currQuestIndex + 1} / ${questions.length}`;
}

/**
 * This function will display the question - access the DOM element.
 * It will take randQuestOfArray as input parameter and out of that,
 * display k,v question.
 * It will first randomize the answers order (to prevent the same answer always
 * on the same position), loop over the answer k, v pair and create a button element
 * for each of them and set the text. If the value of the answer is correct,
 * the dataset of that button will be set to correct. An event listener
 * will call the chooseAnswer function and handover the event of "clicking" the button.
 * The answerButtonElement will receive the answers as child and show them.
 * 
 * @param {*} randQuestOfArray result of randQuestions definition
 */

function displQuest(randQuestOfArray) {
    questElement.innerText = randQuestOfArray.question;
    // randQuestOfArray.answers.forEach(answer => {
    randQuestOfArray.answers.sort(() => Math.random() - 0.5)
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
 * with the new answers will be appended in the DisplQuest function, they are 2nd child element.
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
 * and increases it by 1. The answer button click functionality will be removed as soon as one
 * answer got picked.
 * @param {*} klickEvent which is defined w. event listener in displQuest function
 */

function chooseAnswer(klickEvent) {
    const klickedButton = klickEvent.target;
    const correct = klickedButton.dataset.correct;
    stopCountdown();
    answButtonsElement.classList.add('disable-buttons');
    Array.from(answButtonsElement.children).forEach(button => {
        setState(button, button.dataset.correct);
    });
    if (randQuestions.length > currQuestIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        restartButton.classList.remove('hide');
        endButton.classList.remove('hide');
        document.getElementById("quizHeading").innerText = 'Congratulations - You have mastered all questions! Can you achieve a better result?';
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

/**
* This function will end the game and bring the player back to index.html.
*/

function goHome() {
   location.href = "index.html";
 }

/**
* This function will hide the modal once any area outside the modal is clicked
*/

window.onclick = function(event) {
    if (event.target == howToModal) {
    howToModal.style.display = "none";
    }
};

/**
* This function will diplay the modal window once the How to Play button is clicked
*/

function displayModal() {  
   howToModal.style.display = "block";
}

/**
 * This function will hide the modal once the close button inside modal is clicked
 */

function hideModal() {
   howToModal.style.display = "none";
}

/**
 * This function will hide the game card and display the contact form card
 */

function goToForm() {
    gameCard.classList.add('hide');
    // const contactForm = document.getElementById('form');
    // contactForm.classList.remove('hide');
    document.getElementById('form').classList.remove('hide');
}

