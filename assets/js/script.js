/* jshint esversion: 11 */

const quizContainer = document.getElementById('quiz');
const instructionsDialogElement = document.getElementById('quiz-instructions');
const currentQuestionNumberElement = document.getElementById('current-question-number');
const totalQuestionsElement = document.getElementById('total-questions');
const quizQuestionElement = document.getElementById('question');
const optionOneElement = document.getElementById('option-1');
const optionOneLabelElement = document.querySelector('label[for="option-1"]');
const optionTwoElement = document.getElementById('option-2');
const optionTwoLabelElement = document.querySelector('label[for="option-2"]');
const optionThreeElement = document.getElementById('option-3');
const optionThreeLabelElement = document.querySelector('label[for="option-3"]');
const answerFeedbackElement = document.getElementById('answer-feedback');
const answerFeedbackTextElement = document.getElementById('answer-feedback-text');
const nextQuestionButton = document.getElementById('next-question');
const quizSummaryElement = document.getElementById('quiz-summary');
const dialogOverlayElement = document.getElementById('dialog-overlay');

// Global variables
let currentQuestions;
let currentQuestion;
let currentQuestionIndex;
let totalCorrectAnswers;

function openInstructions() {
    instructionsDialogElement.showModal();
    dialogOverlayElement.className = 'dialog-overlay show';
}

function closeInstructions() {
    instructionsDialogElement.close();
    dialogOverlayElement.className = 'dialog-overlay';
}

function chooseQuizLevel() {
    quizContainer.className = 'page-section quiz active select-level';
}

function beginQuiz(quizQuestions) {
    currentQuestionIndex = 0;
    currentQuestions = quizQuestions;
    currentQuestion = quizQuestions[currentQuestionIndex];

    showCurrentQuestion();

    totalQuestionsElement.innerHTML = currentQuestions.length;

    totalCorrectAnswers = 0;

    hideAnswerFeedbackElement();
    showQuestions();
}

function showQuestions() {
    quizContainer.className = 'page-section quiz active play';
}

function showQuizSummaryContainer() {
    quizContainer.className = 'page-section quiz active summary';
}

function showNextQuestionButton() {
    nextQuestionButton.className = 'next-question show secondary';
}

function showAnswerFeedbackElement() {
    answerFeedbackElement.className = 'show answer-feedback';
}

function hideNextQuestionButton() {
    nextQuestionButton.className = 'next-question secondary';
}

function hideAnswerFeedbackElement() {
    answerFeedbackElement.className = 'answer-feedback';
}

function showQuizSummary() {
    let quizSummaryText;

    if (totalCorrectAnswers === currentQuestions.length) {
        quizSummaryText = totalCorrectAnswers + '/' + currentQuestions.length + ' - Yaldi (woohoo)!';
    }
    else {
        quizSummaryText = totalCorrectAnswers + '/' + currentQuestions.length + ' - Nae Luck (better luck next time)!';
    }

    quizSummaryElement.innerHTML = quizSummaryText;

    showQuizSummaryContainer();
}

function submitAnswer() {
    const selectedAnswerElement = document.querySelector('[name="options"]:checked');

    if (!selectedAnswerElement) {
        answerFeedbackTextElement.innerHTML = 'Please select an answer';
        answerFeedbackTextElement.className = 'answer-feedback-text incorrect';

        showAnswerFeedbackElement();

        return;
    }

    const selectedAnswer = selectedAnswerElement.value;

    if (currentQuestion.answer === selectedAnswer) {
        answerFeedbackTextElement.innerHTML = 'Correct';
        answerFeedbackTextElement.className = 'answer-feedback-text correct';
        totalCorrectAnswers++;
    } else {
        answerFeedbackTextElement.innerHTML = 'Incorrect - try again!';
        answerFeedbackTextElement.className = 'answer-feedback-text incorrect';
    }

    showAnswerFeedbackElement();

    if (currentQuestionIndex === (currentQuestions.length - 1)) {
        showQuizSummary();
    } else {
        showNextQuestionButton();
    }
}

function goToNextQuestion() {
    currentQuestionIndex++;
    currentQuestion = currentQuestions[currentQuestionIndex];
    optionOneElement.checked = false;
    optionTwoElement.checked = false;
    optionThreeElement.checked = false;

    showCurrentQuestion();
    hideNextQuestionButton();
    hideAnswerFeedbackElement();
}

function showCurrentQuestion() {
    quizQuestionElement.innerHTML = currentQuestion.question;

    optionOneElement.value = currentQuestion.options[0];
    optionOneLabelElement.innerHTML = currentQuestion.options[0];
    optionTwoElement.value = currentQuestion.options[1];
    optionTwoLabelElement.innerHTML = currentQuestion.options[1];
    optionThreeElement.value = currentQuestion.options[2];
    optionThreeLabelElement.innerHTML = currentQuestion.options[2];

    currentQuestionNumberElement.innerHTML = currentQuestionIndex + 1;
}