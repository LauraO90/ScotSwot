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

const medQuestions = [
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
const currentQuestionNumber = document.getElementById('current-question-number');
const totalQuestions = document.getElementById('total-questions');
const currenScore = document.getElementById('score');
const quizQuestion = document.getElementById('question');
const optionOne = document.getElementById('option-1');
const optionOneLabel = document.querySelector('label[for="option-1"]');
const optionTwo = document.getElementById('option-2');
const optionTwoLabel = document.querySelector('label[for="option-2"]');
const optionThree = document.getElementById('option-3');
const optionThreeLabel = document.querySelector('label[for="option-3"]');


function startQuiz() {
    quizContainer.className = 'quiz active select-level';
}

function showQuestions() {
    quizContainer.className = 'quiz active play';
}

function beginEasyQuiz() {
    // Set up easy quiz 
    showQuestions();

}

function beginMediumQuiz() {
    // Set up medium quiz 
    showQuestions();

}
function beginHardQuiz() {
    // Set up hard quiz 
    showQuestions();

}


