const quizDB =[
    {
        question: "1. When was the internet created? ",
        A: "1968",
        B: "1972",
        C: "1982",
        D: "1995",
        ans:"ans1"
    },
    {
        question:"2. The World Wide Web was created in … ",
        A: "1968",
        B: "1972",
        C: "1989",
        D: "1992",
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
