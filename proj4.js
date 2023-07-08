const quizDB=[
    {
    question:"q1:what is my actutal name?",
    a:"yashaswi Shahi",
    b:"ssv",
    c:"yashi",
    d:"gurju",
    ans:"ans1",
},

{
    question:"q2:what is my age?",
    a:"20",
    b:"19",
    c:"21",
    d:"22",
    ans:"ans3",
},

{
    question:"q3:what is my branch?",
    a:"EE",
    b:"ECE",
    c:"IT",
    d:"CS",
    ans:"ans4",
},

{
    question:"q4:Where do i belong to?",
    a:"Gorakhpur",
    b:"Lucknow",
    c:"Prayagraj",
    d:"Kanpur",
    ans:"ans1",
},]

const question =document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion = () =>{
    const questionList=quizDB[questionCount];
    question.innerText =questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;


    //console.log(quizDB[0]);
}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
       if(curAnsElem.checked){
        answer=curAnsElem.id;
       }
      
    }); return answer;

};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    };
     questionCount++;

     deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
       showScore.innerHTML=`
       <h3>You scored ${score}/${quizDB.length}</h3>
       <button class="btn" onclick="location.reload()">PLAY AGAIN</button>`;
        showScore.classList.remove('showArea');
    }
});