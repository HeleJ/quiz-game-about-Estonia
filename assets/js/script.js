//getting all required elements
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

//If Start Quiz Button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");  //show the info box
}
// if Exit Quiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");   //hide the info box
}
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");   //hide the info box
    quiz_box.classList.add("activequiz");   //show the quiz box
    showQuestions(4);
}
let que_count = 0;

const next_btn = quiz_box.querySelector(".next_btn");

//If Next Button Clicked
next_btn.onclick = ()=>{
    if(que_count > questions.length - 1){
        que_count++;
    showQuestions(que_count);  
    }
}

// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_list = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}
// if restartQuiz button clicked
// if quitQuiz button clicked
// if Next Que button clicked
//if user clicked on option   