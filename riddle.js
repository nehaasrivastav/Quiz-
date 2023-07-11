const quizDB =[
   {
    question:"1.What can you catch but cannot throw?",
    A: "A tennis ball",
    B: "A cold",
    C: "Your toys",
    D: "A boomerang",
    ans:"ans2"

   },
   {
    question:"If you have it, you want to share it. If you share it, you don’t have it anymore. What is it?",
    A: "Love",
    B: "Talent",
    C: "A Secret",
    D: "None of the above",
    ans: "ans3"
   }
   
];
const question = document.querySelector('.question');
const question1 = document.querySelector('#option1');
const question2 = document.querySelector('#option2');
const question3 = document.querySelector('#option3');
const question4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.option');

const scorebox = document.querySelector('#scorebox');
let questionCount = 0;
let score = 0;

 const loadQuestion = () => {
   
 
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.A;
    option2.innerText = questionList.B;
    option3.innerText = questionList.C;
    option4.innerText = questionList.D;
 }
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
             
    });
    return answer;

};
 
  const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
  }
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer); 

    if (checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();

    }else{

        scorebox.innerHTML = `
           <h3> You scored ${score}/${quizDB.length}</h3>
           <button class="btn" onclick="location.reload()">Play again</button></> 

           `;

           scorebox.classList.remove('score');

    }
});
