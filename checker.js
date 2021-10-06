
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

/*const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");*/

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    /*startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function*/
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;

/*start scoring for each courses*/
let BSES = 0; 
let BSG = 0;
let BSMB = 0; 
let BSAP = 0; 
let BSC = 0;
let BSFT = 0; 
let BSND = 0; 
let BSMT = 0; 
let BSM = 0;
let BSN = 0;
let BSOT = 0; 
let BSP = 0;
let BSRT = 0; 
let BStherapy = 0; 
let SLP = 0;
let BSCS = 0; 
let BSIS = 0; 
let BSA = 0;
let BSBE = 0; 
let BSIE = 0; 
let BSCHE = 0; 
let BSCE = 0; 
let BSCPE = 0; 
let BSEE = 0; 
let BSECE = 0; 
let BSGEOE = 0; 
let BSSE = 0; 
let BSCERE = 0; 
let BSMARE = 0; 
let BSMATE = 0; 
let BSME = 0; 
let BSMETE = 0; 
let BSPETE = 0; 
let BSMTrans = 0; 
let BSMath = 0; 
let BSS = 0;
/*let BSMEE = 0;*/


let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
/*restart scoring*/
    BSES = 0; 
    BSG = 0;
    BSMB = 0; 
    BSAP = 0; 
    BSC = 0;
    BSFT = 0; 
    BSND = 0; 
    BSMT = 0; 
    BSM = 0;
    BSN = 0;
    BSOT = 0; 
    BSP = 0;
    BSRT = 0; 
    BStherapy = 0; 
    SLP = 0;
    BSCS = 0; 
    BSIS = 0; 
    BSA = 0;
    BSBE = 0; 
    BSIE = 0; 
    BSCHE = 0; 
    BSCE = 0; 
    BSCPE = 0; 
    BSEE = 0; 
    BSECE = 0; 
    BSSE = 0; 
    BSGEOE = 0; 
    BSCERE = 0; 
    BSMARE = 0; 
    BSMATE = 0; 
    BSME = 0; 
    BSMETE = 0; 
    BSPETE = 0; 
    BSMTrans = 0; 
    BSMath = 0; 
    BSS = 0;

    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
/*quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}*/

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        
        next_btn.classList.remove("show"); //hide the next button
        
    }else{
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb +'.'+ questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="container option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="container option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="container option"><span>'+ questions[index].options[3] +'</span></div>'
    + '<div class="container option"><span>'+ questions[index].options[4] +'</span></div>';

    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    
    /*create the top3 button*/
    const scoreText = result_box.querySelector(".score_text");
    const scoreText2 = result_box.querySelector(".score_text2");
    const scoreText3 = result_box.querySelector(".score_text3");

    if (BSES > 0){ 
        /*calculate percenage of each course*/
        BSES = BSES / 30 * 100
        BSG = BSG / 30 * 100
        BSMB = BSMB / 30 * 100
        BSAP = BSAP / 30 * 100
        BSC = BSC / 30 * 100

        BSFT = BSFT / 30 * 100
        BSND = BSND / 30 * 100
        BSMT = BSMT / 30 * 100
        BSM = BSM / 30 * 100
        BSN = BSN / 30 * 100

        BSOT = BSOT / 30 * 100
        BSP = BSP / 30 * 100
        BSRT = BSRT / 30 * 100
        BStherapy = BStherapy / 30 * 100
        SLP = SLP / 30 * 100

        BSCS = BSCS / 30 * 100
        BSIS = BSIS / 30 * 100
        BSA = BSA / 30 * 100
        BSBE = BSBE / 30 * 100
        BSIE = BSIE / 30 * 100

        BSCHE = BSCHE / 30 * 100
        BSCE = BSCE / 30 * 100
        BSCPE = BSCPE / 30 * 100
        BSEE = BSEE / 30 * 100
        BSECE = BSECE / 30 * 100

        BSSE = BSSE / 30 * 100
        BSGEOE = BSGEOE / 30 * 100
        BSCERE = BSCERE / 30 * 100
        BSMARE = BSMARE / 30 * 100
        BSMATE = BSMATE / 30 * 100

        BSME = BSME / 30 * 100
        BSMETE = BSMETE / 30 * 100
        BSPETE = BSPETE / 30 * 100
        BSMTrans = BSMTrans / 30 * 100
        BSMath = BSMath / 30 * 100

        BSS = BSS / 30 * 100

        var course = [
           ['Environmental Science (BSES)',BSES],
            ['Geology (BS Geology)',BSG],
            ['Molecular Biology (BS Molecular Biology)',BSMB],
            ['Physics (BS Physics) and Applied Physics (BS Applied Physics)',BSAP],
            ['Chemistry (BS Chemistry)',BSC],

            ['Food Technology (BS Food Technology)',BSFT],
            ['Nutrition and Dietetics (BS Nutrition and Dietetics)',BSND],
            ['Medical Technology (BS Med Tech)',BSMT],
            ['Midwifery (BS Midwifery)',BSM],
            ['Nursing (BSN)',BSN],

            ['Occupational Therapy (BSOT)',BSOT],
            ['Pharmacy (BS Pharmacy)',BSP],
            ['Radiologic Technology (BS Rad Tech)',BSRT],
            ['Respiratory Therapy (BSRT)',BStherapy],
            ['Speech-Language Pathology',SLP],

            ['Computer Science (BSCS)',BSCS],
            ['Information Technology (BSIT) and Information Systems (BSIS)',BSIS],
            ['Aeronautical Engineering (BS AeroE)',BSA],
            ['Biological Engineering (BSBE)',BSBE],
            ['Industrial Engineering (BSIE)',BSIE],

            ['Chemical Engineering (BSChE)',BSCHE],
            ['Civil engineering (BSCE)',BSCE],
            ['Computer Engineering (BSCpE)',BSCPE],
            ['Electrical Engineering (BSEE)',BSEE],
            ['Electronics and Communications Engineering (BSECE)',BSECE],

            ['Sanitary Engineering (BSSE)',BSSE],
            ['Geodetic Engineering (BSGE) AND Geological Engineering (BSGeoE) AND Mining Engineering (BSME)',BSGEOE],
            ['Ceramic Engineering (BSCerE)',BSCERE],
            ['Marine Engineering (BSMarE)',BSMARE],
            ['Materials Engineering (BSMatE)',BSMATE],

            ['Mechanical Engineering (BSME)',BSME],
            ['Metallurgical Engineering (BSMetE)',BSMETE],
            ['Petroleum Engineering (BSPetE)',BSPETE],
            ['Marine Transportation (BSMT)',BSMTrans],
            ['Mathematics (BS Mathematics) and Applied Mathematics (BS Applied Mathematics)',BSMath],

            ['Statistics (BS Stat)',BSS],
        
        ];
        //sort
        var topValues = course.sort((function(index){
            return function(a, b){
                return (a[index] === b[index] ? 0 : (a[index] > b[index] ? -1 : 1));
            };
        })(1));

        //get the top 10
        /*var topValues = topValues.slice(0, 10);*/
        console.log(topValues);


        /*TOP 1*/
        let scoreTag = '<b>Top 1: </b>'+ topValues[0][0]  + ' - ' +'<b>' + topValues[0][1].toFixed(2) +'%</b>';
       // scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
        /*TOP 2*/
        let scoreTag2 = '<b>Top 2: </b>'+ topValues[1][0]  + ' - ' +'<b>' + topValues[1][1].toFixed(2) +'%</b>';
        //scoreText2.innerHTML = scoreTag2;  //adding new span tag inside score_Text
        /*TOP 3*/
        let scoreTag3 = '<b>Top 3: </b>'+ topValues[2][0]  + ' - ' +'<b>' + topValues[2][1].toFixed(2) +'%</b>';
       //scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text

        let scoreTag4 = '<b>Top 4: </b>'+ topValues[3][0]  + ' - ' +'<b>' + topValues[3][1].toFixed(2) +'%</b>';
       // scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text

        let scoreTag5 = '<b>Top 5: </b>'+ topValues[4][0]  + ' - ' +'<b>' + topValues[4][1].toFixed(2) +'%</b>';
       //scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text

        let scoreTag6 = '<b>Top 6: </b>'+ topValues[5][0]  + ' - ' +'<b>' + topValues[5][1].toFixed(2) +'%</b>';
        //scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text

        let scoreTag7 = '<b>Top 7: </b>'+ topValues[6][0]  + ' - ' +'<b>' + topValues[6][1].toFixed(2) +'%</b>';
       // scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text

        let scoreTag8 = '<b>Top 8: </b>'+ topValues[7][0]  + ' - ' +'<b>' + topValues[7][1].toFixed(2) +'%</b>';
       // scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text

        let scoreTag9 = '<b>Top 9: </b>'+ topValues[8][0]  + ' - ' +'<b>' + topValues[8][1].toFixed(2) +'%</b>';
        //scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text

        let scoreTag10 = '<b>Top 10: </b>'+ topValues[9][0]  + ' - ' +'<b>' + topValues[9][1].toFixed(2) +'%</b>';
        //scoreText3.innerHTML = scoreTag3;  //adding new span tag inside score_Text

        localStorage.setItem("top1",scoreTag)
        localStorage.setItem("top2",scoreTag2)
        localStorage.setItem("top3",scoreTag3)

        localStorage.setItem("top4",scoreTag4)
        localStorage.setItem("top5",scoreTag5)
        localStorage.setItem("top6",scoreTag6)
        localStorage.setItem("top7",scoreTag7)
        localStorage.setItem("top8",scoreTag8)
        localStorage.setItem("top9",scoreTag9)
        localStorage.setItem("top10",scoreTag10)


        var top1 = topValues[0][0];
        var top2 = topValues[1][0];
        var top3 = topValues[2][0];

        
        Findcontent1(top1);
        Findcontent2(top2);
        Findcontent3(top3);

        $.ajax({
            type: "POST",
            url: 'insertSubmitted.php',
            data: {top_result: top1},
            success: function(data){
                alert(data);
            }
        });
        
    }

}


function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
