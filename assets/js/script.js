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
// if continue Quiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");   //hide the info box
    quiz_box.classList.add("activeQuiz");   //show the quiz box
    showQuestions(0);   //calling showQuestions function
    queCounter(1);   //passing 1 parameter to queCounter
}
let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

//If Next Que Button Clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);  
    }else{
        console.log("Questions completed");
    }
}

// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + "." + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] +'</span></div>'
                      + '<div class="option"><span>' + questions[index].options[1] +'</span></div>'
                      + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                      + '<div class="option"><span>' + questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';
// if user clicked on option
function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Correct Answer");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("Wrong Answer");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answer is incorrect then automatically selected the correct answer
        for(let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }

    // once user selected disabled all options
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    
}

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index + '</p> of <p>' + questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}
// if restartQuiz button clicked
// if quitQuiz button clicked
// if Next Que button clicked
//if user clicked on option   