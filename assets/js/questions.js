/* jshint esversion: 11 */

// Actual questions unsed for the quiz. Data structure is an array,
// with k,v pair for the queston and a k,v pair for the answers. The
// answers itself are another array, which contain for each answer two
// k,v pairs - one containing the answer and the other correct/wrong definition

const questions = [
    {
      question: "What is 2 + 2?",
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: "Who is the artist of the recent new album the Uncanny Valley?",
      answers: [
        { text: "Perturbator", correct: true },
        { text: "Carpenter Brut", correct: false },
        { text: "GOST", correct: false },
        { text: "Dan Terminus ", correct: false }
      ]
    },
    {
      question: "Which of these bands are NOT from Australia?",
      answers: [
        { text: "Cut Copy", correct: false },
        { text: "Empire of the Sun", correct: false },
        { text: "Tame Impala", correct: false },
        { text: "The Naked and Famous", correct: true }
      ]
    },
    {
      question: "Liam Howlett founded which electronic music group in 1990?",
      answers: [
        { text: "The Chemical Brothers", correct: false },
        { text: "The Prodigy", correct: true },
        { text: "The Crystal Method", correct: false },
        { text: "Infected Mushroom", correct: false }
      ]
    }
  ]