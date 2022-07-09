const questions = [
    {
        number:1, 
        question:'What dest HTML Srtand for?',
        answer:'Hyper Text Markup Language',
        options:[
            'Home Tool Markup Language',
            'Hyper Text Markup Language',
            'Hyperlinks and Text Markup Language',
            'Hyper Tool Markup Language'
        ]
    },
    {
        number:2,
        question:'What does CSS stand for?',
        answer: 'Cascading Style Sheets',
        options: [
            'Computer Style Sheets',
            'Creative Style Sheets',
            'Colorful Style Sheets',
            'Cascading Style Sheets',
        ]
    },
    {
        number:3,
        question:'What does PHP stand for?',
        answer: 'Hypertext Processor',
        options:[
            'Processed Hypertext Page',
            'Hypertext Processor',
            'Processor Hypertext Processor',
            'None of the above'
        ]
    },
    {
        number:4,
        question:'Which of the below CSS class is used to change the text color of CSS?',
        answer: 'color',
        options:[
            'background-color',
            'color-background',
            'color',
            'None of the above',
        ]
    },
    {
        number:5,
        question:'Which of the below is correct syntax to put a line over text in CSS?',
        answer: 'text-decoration: overline',
        options:[
            'text-decoration: line',
            'text-decoration: none',
            'text-decoration: overline',
            'text-decoration: underline',
        ]
    }
    // You can add more this type of question
]

let startQuizbtn = document.querySelector('.start-quiz-btn');
let container = document.querySelector('.container');
let question = document.querySelector('.ques-text');
let option_list = document.querySelector('.option-div');
let time_line = document.querySelector(".time-line");
let TimeCount = document.querySelector('.time-left');
let next_ques_btn = document.querySelector('.next-ques-btn');
let topQuestionCounting = document.querySelector('question-counter');
const result = document.querySelector('.result-div');
let play_again_btn = document.querySelector('.replay-quiz-btn');

let correction = ' <div class="icon correct-icon"><i class="fa-solid fa-check"></i></div>';
let incorrection = ' <div class="icon wrong-icon"><i class="fa-solid fa-xmark"></i></div>';

// Question Count
let question_count = 0;
// Top Bar Quesion Count
let ques_number = 1;
let timeValue = 15;
let widthValue = 0;
score = 0;
Count;
countLine;

// If Start Quiz Btn
next_ques_btn.onclick = ()=>{
    if(question_count < questions.length - 1){
        question_count ++;
        ques_number++;
        showQuestions(question_count);
        QuestionCounter(ques_number);
        clearInterval(count);
        timeStart(timeValue);
        clearInterval(countLine);
        timerLine(widthValue);
        next_ques_btn.classList.add('click-disable');
        }else{
            console.log('Quiz Complete')
            showResult();
        }
};