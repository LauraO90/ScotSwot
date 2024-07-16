const easyQuestions = [
    {
        question: 'What does "wee" mean?',
        options: ['Funny', 'Small', 'Tall'],
        answer: 'Small',
    },
    {
        question: 'What does "aye" mean?',
        options: ['Yes', 'Sorry', 'Hello'],
        answer: 'Yes',
    },
    {
        question: 'What does "naw" mean?',
        options: ['Please', 'No', 'Bite'],
        answer: 'No',
    },
    {
        question: 'What does "bonnie" mean?',
        options: ['Beautiful', 'Water', 'Sweet'],
        answer: 'Beautiful',
    },
    {
        question: 'What does "braw" mean?',
        options: ['Cold', 'Handsome', 'Hungry'],
        answer: 'Handsome',
    },
    {
        question: 'What does "lassie" mean?',
        options: ['Dog', 'Drink', 'Girl'],
        answer: 'Girl',
    },
    {
        question: 'What does "bairn" mean?',
        options: ['Child', 'Pet', 'Home'],
        answer: 'Child',
    },
]

const mediumQuestions = [
    {
        question: 'What does "wheesht" mean?',
        options: ['Be Quiet', 'Go Away', 'Stop It'],
        answer: 'Be Quiet',
    },
    {
        question: 'What does "coorie" mean?',
        options: ['Cuddle', 'Mountain', 'Sneeze'],
        answer: 'Cuddle',
    },
    {
        question: 'What does "gallus" mean?',
        options: ['Expensive', 'Bold', 'Tired'],
        answer: 'Bold',
    },
    {
        question: 'What does "crabbit" mean?',
        options: ['Grumpy', 'Wet', 'Tasty'],
        answer: 'Grumpy',
    },
    {
        question: 'What does "numpty" mean?',
        options: ['Young', 'Fool', 'Odd'],
        answer: 'Fool',
    },
    {
        question: 'What does "boggin" mean?',
        options: ['Dirty', 'Pleasant', 'Garden'],
        answer: 'Dirty',
    },
    {
        question: 'What does "hoachin" mean?',
        options: ['Busy', 'Hot', 'Shopping'],
        answer: 'Busy',
    },

]

const hardQuestions = [
    {
        question: 'What does "hee-haw" mean?',
        options: ['Angry', 'Party', 'Nothing'],
        answer: 'Nothing',
    },
    {
        question: 'What does "sleekit" mean?',
        options: ['Sly', 'Scary', 'Bug'],
        answer: 'Sly',
    },
    {
        question: 'What does "dreich" mean?',
        options: ['Silly', 'Dreary', 'Happy'],
        answer: 'Dreary',
    },
    {
        question: 'What does "patch" mean?',
        options: ['Abandon', 'Repair', 'Friend'],
        answer: 'Abandon',
    },
    {
        question: 'What does "scunnered" mean?',
        options: ['Sporty', 'Disappointed', 'Excited'],
        answer: 'Disappointed',
    },
    {
        question: 'What does "winch" mean?',
        options: ['Flinch', 'Kiss', 'Ignore'],
        answer: 'Kiss',
    },
    {
        question: 'What does "lugs" mean?',
        options: ['Legs', 'Ears', 'Arms'],
        answer: 'Ears',
    },
]


const quizContainer = document.getElementById('quiz');
const currentQuestionNumberElement = document.getElementById('current-question-number');
const totalQuestionsElement = document.getElementById('total-questions');
const currentScoreElement = document.getElementById('score');
const quizQuestionElement = document.getElementById('question');
const optionOneElement = document.getElementById('option-1');
const optionOneLabelElement = document.querySelector('label[for="option-1"]');
const optionTwoElement = document.getElementById('option-2');
const optionTwoLabelElement = document.querySelector('label[for="option-2"]');
const optionThreeElement = document.getElementById('option-3');
const optionThreeLabelElement = document.querySelector('label[for="option-3"]');
const answerFeedbackElement = document.getElementById('answer-feedback');
const nextQuestionButton = document.getElementById('next-question');
const quizSummaryElement = document.getElementById('quiz-summary');

// Global variables
let currentQuestions;
let currentQuestion;
let currentQuestionIndex;
let totalCorrectAnswers;

function startQuiz() {
    quizContainer.className = 'quiz active select-level';
}

function showQuestions() {
    quizContainer.className = 'quiz active play';
}

function showQuizSummaryContainer() {
    quizContainer.className = 'quiz active summary';
}

function showNextQuestionButton() {
    nextQuestionButton.className = 'next-question show';
}

function hideNextQuestionButton() {
    nextQuestionButton.className = 'next-question';
}
function showQuizSummary() {
    let quizSummaryText; 

    if (totalCorrectAnswers === currentQuestions.length) {
        quizSummaryText = totalCorrectAnswers + '/' + currentQuestions.length + ' - Yaldi (woohoo)!';
    }
    else {
        quizSummaryText = totalCorrectAnswers + '/' + currentQuestions.length + ' - Nae Luck (better luck next time)!' 
    }

    quizSummaryElement.innerHTML = quizSummaryText;


    showQuizSummaryContainer();
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('[name="options"]:checked').value;

    if (currentQuestion.answer === selectedAnswer) {
        answerFeedbackElement.innerHTML = 'Correct';
        totalCorrectAnswers++;
    } else {
        answerFeedbackElement.innerHTML = 'Incorrect';
    }

    if (currentQuestionIndex === (currentQuestions.length - 1)) {
        showQuizSummary();
    } else {
        showNextQuestionButton();
    }
}

function goToNextQuestion() {
    currentQuestionIndex++;
    currentQuestion = currentQuestions[currentQuestionIndex];

    showCurrentQuestion();
    hideNextQuestionButton();
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

function beginQuiz(quizQuestions) {
    currentQuestionIndex = 0;
    currentQuestions = quizQuestions;
    currentQuestion = quizQuestions[currentQuestionIndex];

    showCurrentQuestion();

    totalQuestionsElement.innerHTML = currentQuestions.length;

    totalCorrectAnswers = 0;

    showQuestions();
}

function beginEasyQuiz() {
    beginQuiz(easyQuestions)
}

function beginMediumQuiz() {
    beginQuiz(mediumQuestions)

}
function beginHardQuiz() {
    beginQuiz(hardQuestions)

}


