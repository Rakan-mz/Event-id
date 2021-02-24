// code by webdevtrick (https://webdevtrick.com)
// select all elements
const lan = document.getElementById("lan");
const end = document.getElementById("end");
const arabic = document.getElementById("btn6");
const english = document.getElementById("btn7");
const start = document.getElementById("btn4");
const again = document.getElementById("btn5");
const startDiv = document.getElementById("start");
const x = document.getElementById("quiz");
var pp = document.getElementsByClassName("prog");
const timeGauge = document.getElementById("timeGauge1");
const bar = document.getElementById("bar");
const footer = document.getElementById("footer");

var change = document.getElementById("change");


let weight = 0;
// let counter = 20;

const questionTime = 5; // 10s
const gaugeWidth = 500; // 150px
const gaugeUnit = gaugeWidth / questionTime;


var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
let score;
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.choices = questions.choices;
    this.choicesIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}
Quiz.prototype.getchoicesIndex = function () {
    return this.choices[this.choicesIndex];
}
Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    } else {
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, weights) {
    this.text = text;
    this.choices = choices;
    // this.answer = answer;
    this.weights = weights;
}
var currentQuestionNumber;
Question.prototype.isCorrectAnswer = function (choice) {

    // var currentQuestionNumber = quiz.questionIndex + 1;



    var sum = 0;
    var choices = quiz.getQuestionIndex().choices;
    document.getElementById(currentQuestionNumber).style.backgroundColor = "green";


    let w;

    for (let i = 0; i < 1; i++) {

        let c = choices.indexOf(choice);
        w = questions[i].weights[c];
        weight += w;
        // console.log(weight * 5);
        counter += 20;

    }
    // if (weight * 5 >= 151 && weight * 5 <= 200) {
    //     document.getElementById(currentQuestionNumber).style.backgroundColor = "red";
    //     timeGauge.style.width = weight * 5 + "px";
    //     timeGauge.style.backgroundColor = 'red';
    // } else if (weight * 5 >= 96 && weight * 5 <= 150) {
    //     document.getElementById(currentQuestionNumber).style.backgroundColor = "orange";
    //     timeGauge.style.width = weight * 5 + "px";
    //     timeGauge.style.backgroundColor = 'orange';
    // }
    // else if (weight * 5 >= 66 && weight * 5 <= 95) {
    //     document.getElementById(currentQuestionNumber).style.backgroundColor = "#ffed03";
    //     timeGauge.style.width = weight * 5 + "px";
    //     timeGauge.style.backgroundColor = '#ffed03';
    // } else if (weight * 5 >= 50 && weight * 5 <= 65) {
    //     document.getElementById(currentQuestionNumber).style.backgroundColor = "green";
    //     timeGauge.style.width = weight * 5 + "px";
    //     timeGauge.style.backgroundColor = 'green';
    // }
    // if (currentQuestionNumber <= questions.length) {
    //     timeGauge.style.width = weight * 5 + "%";
    // }

    // border-top-right-radius: 20px;
    // border-bottom-right-radius: 20px;

    /* loading bar {Resulte} and progress */

    if (weight * 5 == 200) {
        bar.style.borderTopRightRadius = '20px'
        bar.style.borderBottomRightRadius = '20px'
    }
    if (weight * 5 >= 151 && weight * 5 <= 200) {
        document.getElementById(currentQuestionNumber).style.backgroundColor = "red";
        bar.style.width = weight * 5 + "px";
        bar.style.backgroundColor = 'red';
        red();


    } else if (weight * 5 >= 96 && weight * 5 <= 150) {
        document.getElementById(currentQuestionNumber).style.backgroundColor = "orange";
        bar.style.width = weight * 5 + "px";
        bar.style.backgroundColor = 'orange';
        orange();

    }
    else if (weight * 5 >= 66 && weight * 5 <= 95) {
        document.getElementById(currentQuestionNumber).style.backgroundColor = "#ffed03";
        bar.style.width = weight * 5 + "px";
        bar.style.backgroundColor = '#ffed03';
        Yellow();

    } else if (weight * 5 >= 50 && weight * 5 <= 65) {
        document.getElementById(currentQuestionNumber).style.backgroundColor = "green";
        bar.style.width = weight * 5 + "px";
        bar.style.backgroundColor = 'green';
        green();
    }
    else if (weight * 5 <= 50) {
        document.getElementById(currentQuestionNumber).style.backgroundColor = "green";
        bar.style.width = weight * 5 + "px";
        bar.style.backgroundColor = 'green';
        green();
    }


    return this.answer === choice;

}

//to toggle colors
function green() {
    change.classList.add("green");
    change.classList.remove("Yellow");
    change.classList.remove("red");
    change.classList.remove("orange");
}
function red() {
    change.classList.add("red");
    change.classList.remove("Yellow");
    change.classList.remove("green");
    change.classList.remove("orange");
}
function orange() {
    change.classList.add("orange");
    change.classList.remove("Yellow");
    change.classList.remove("green");
    change.classList.remove("red");
}
function Yellow() {
    change.classList.add("Yellow");
    change.classList.remove("green");
    change.classList.remove("red");
    change.classList.remove("orange");
}

function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        // var element = document.getElementById("question");
        // element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        // var choices = quiz.getQuestionIndex().choices;
        // for (var i = 0; i < choices.length; i++) {
        // var element = document.getElementById("choice" + i);
        // element.innerHTML = choices[i];
        // guess("btn" + i, choices[i]);
        // }


    }

};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

// function renderProgress(){
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");

    for (let qIndex = 0; qIndex < quiz.questions.length; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + currentQuestionNumber++ + "></div>";


    }
    // element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var element = document.getElementById("Result");


    // var gameOverHTML = "<h1>Result</h1>";
    // var gameOverHTML = `<h2 id='score'> Your scores: ${(weight * 5)}% </h2>`;
    // element.innerHTML = gameOverHTML;

    if (weight * 5 >= 50 && weight * 5 <= 65) {
        var gameOverHTML = `<h2 id='score'> أمورك طيبه</h2>`;
        element.innerHTML = gameOverHTML;
    } else if (weight * 5 >= 66 && weight * 5 <= 95) {
        var gameOverHTML = `<h2 id='score'> حولك و حواليك </h2>`;
        element.innerHTML = gameOverHTML;
    }
    else if (weight * 5 >= 96 && weight * 5 <= 150) {
        var gameOverHTML = `<h2 id='score'> قريب منك مره </h2>`;
        element.innerHTML = gameOverHTML;
    } else if (weight * 5 >= 151 && weight * 5 <= 200) {
        var gameOverHTML = `<h2 id='score'> اتصل على ٩٣٧  </h2>`;
        element.innerHTML = gameOverHTML;
    }




    end.style.display = "flex";
    x.style.display = "none";
    footer.style.display = "none";

};

// creating an array and passing the number, questions, options, and answers
let questions = [{
    numb: 1,
    question: "What does Windows event ID 4720 indicate ?",
    answer: "A user account was created",
    options: [
        "A user account was changed",
        "A user account was enabled",
        "A user account was created",
        "A user account was disabled"
    ]
},
{
    numb: 2,
    question: "What does Windows event ID 4722 indicate ?",
    answer: "A user account was enabled",
    options: [
        "A user account was changed",
        "A user account was disabled",
        "A user account was enabled",
        "A user account was created"
    ]
},
{
    numb: 3,
    question: "What does Windows event ID 4723 indicate ?",
    answer: "Change an account's password by user",
    options: [
        "Change an account's password by user",
        "A user account was changed",
        "Change an account's password by Admin",
        "A user account was locked out"
    ]
},
{
    numb: 4,
    question: "What does Windows event ID 4724 indicate ?",
    answer: "Change an account's password by Admin",
    options: [
        "Change an account's password by user",
        "A user account was changed",
        "Change an account's password by Admin",
        "A user account was locked out",
    ]
},
{
    numb: 5,
    question: "What does Windows event ID 4725 indicate ?",
    answer: "A user account was disabled",
    options: [
        "A user account was changed",
        "A user account was deleted",
        "A user account was disabled",
        "A user account was changed"
    ]
},
{
    numb: 6,
    question: "What does Windows event ID 4726 indicate ?",
    answer: "A user account was deleted",
    options: [
        "A user account was disabled",
        "A user account was locked out",
        "A user account was changed",
        "A user account was deleted"
    ]
},
{
    numb: 7,
    question: "What does Windows event ID 4738 indicate ?",
    answer: "A user account was changed",
    options: [
        "A user account was changed",
        "A user account was deleted",
        "A user account was disabled",
        "A user account was enabled"
    ]
}
    ,
{
    numb: 8,
    question: "What does Windows event ID 4740 indicate ?",
    answer: "A user account was locked out",
    options: [
        "A user account was changed",
        "A user account was locked out",
        "A user account was disabled",
        "A user account was enabled"
    ]
}
    ,
{
    numb: 9,
    question: "What does Windows event ID 4781 indicate ?",
    answer: "The name of an account was changed",
    options: [
        "SID History was added to an account",
        "A user account was unlocked",
        "A user account was disabled",
        "The name of an account was changed"
    ]
}
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];
var questions2 = [
    /*1*/   new Question("متى تلبس الكمامة ؟", ["إذا كنت تعتني بشخص مريض", "إذا كنت تعاني من اعراض تنفسيه", "إذا كنت خارج من المنزل", "في كل وقت وحين"], [1, 2, 3, 4]),
];

// arabic.addEventListener("click", lang);
// english.addEventListener("click", lang);
start.addEventListener("click", startQuiz);
again.addEventListener("click", againQuiz);

// // create quiz
// // let quiz ;
function startQuiz() {
    start.style.display = "none";
    startDiv.style.display = "none";
    x.style.display = "block";
    showProgress();

}
function againQuiz() {
    location.reload();
}
function lang() {
    lan.style.display = "none";
    startDiv.style.display = "flex";
    // footer.style.display = "none";

}


//   if(location.pathname=="index.html") {
var quiz = new Quiz(questions);
// display quiz
populate();

//   }
//   if(location.pathname=="index2.html") {
//     var quiz = new Quiz(questions2);
//     // display quiz
//     populate();

//     }
// var visits = Number(localStorage.getItem('visitCount'));
// var current = Boolean(sessionStorage.getItem('session'));
// function visitCount() {


//     if (!current) {
//       visits++;
//     }

//     localStorage.setItem('visitCount', visits);
//     sessionStorage.setItem('session', true);

//     return visits;
//   }
//   console.log("num of visits " + visits);

//   localStorage.pagecount ? localStorage.pagecount = {} : '';





//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
// start_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo"); //show info box
// }

// // if exitQuiz button clicked
// exit_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
// }

// if continueQuiz button clicked
// continue_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     showQuetions(0); //calling showQestions function
//     queCounter(1); //passing 1 parameter to queCounter
//     // startTimer(15); //calling startTimer function
//     // startTimerLine(0); //calling startTimerLine function

// }

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
start.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    // startTimer(timeValue); //calling startTimer function
    // startTimerLine(widthValue); //calling startTimerLine function
    // timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button

}
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    // startTimer(timeValue); //calling startTimer function
    // startTimerLine(widthValue); //calling startTimerLine function
    // timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the n

    // remove prog color
    for (i = 0; i < questions.length; i++) {
        document.getElementById(que_numb + i).style.backgroundColor = "";
    }


}
// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.replace("index.html"); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        // startTimer(timeValue); //calling startTimer function
        // startTimerLine(widthValue); //calling startTimerLine function
        // timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// Shuffle an questions
// const ShuffleQ = () => {
//     questions.sort(() => Math.random() - 0.5);
//     return questions;
//   };
questions = questions
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
let op = [];

// Shuffle an options
const ShuffleO = () => {

    op.sort(() => Math.random() - 0.5);
    return op;
};

// getting questions and options from array
function showQuetions(index) {

    for (i = 0; i < 4; i++) {
        op.push(questions[index].options[i]);
        // console.log(questions.length)
    }


    const que_text = document.querySelector(".que_text");
    ShuffleO();
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div id="btn0" class="option"><span>' + op[0] + '</span></div>'
        + '<div id="btn1" class="option"><span>' + op[1] + '</span></div>'
        + '<div id="btn2" class="option"><span>' + op[2] + '</span></div>'
        + '<div id="btn3" class="option"><span>' + op[3] + '</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
    for (i = 0; i < 8; i++) {
        op.pop(questions[index].options[i]);
        // console.log("the num:"+i+" "+op[i])
    }
}


// creating the new div tags which for icons
let tickIconTag = '<i class="icon tick"><i class="fas fa-check"></i></i>';
let crossIconTag = '<i class="icon cross"><i class="fas fa-times"></i></i>';

//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        // console.log("Correct Answer");
        // console.log("Your correct answers = " + userScore);
        document.getElementById(que_numb).style.backgroundColor = "green";

    } else {
        answer.classList.add("select"); //adding red color to correct selected option
        // answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        // console.log("Wrong Answer");
        document.getElementById(que_numb).style.backgroundColor = "red";

        //adding red color to all incorrect options
        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent !== correcAns) { //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option incorrect"); //adding red color to incorrect option
                option_list.children[i].insertAdjacentHTML("beforeend", crossIconTag); //adding tick icon to matched option
                // console.log("Auto selected correct answer.");
                answer.classList.add("select"); //adding red color to incorrect selected option

            }
        }

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                // console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    result_box.classList.remove("disResult"); //hide result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 6) { // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if (userScore > 4) { // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span> <div><span style="justify-content: center;font-weight: 700;">So close 😍</span></div>';
        scoreText.innerHTML = scoreTag;
    }
    else { // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    // console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

