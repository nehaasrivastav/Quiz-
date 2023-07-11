const quizDB =[
   { 
    question:"1. Jimmy's father has three sons- Paul I and Paul II. Can you guess the name of the third son? ",
    A: "Jerin",
    B: "Paul III",
    C: "Jimmy",
    D: "None",
    ans:"ans3"
},
{
    question: "2. The answer is really big.", 
A: "THE ANSWER" ,
B: "Really big" ,
C: "An elephant ",
D: "The data given is insufficient",
ans:"ans2"
},
{
    question:"3. You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
    A: "1st",
    B: "2nd",
    C: "3rd",
    D: "None of the above",
    ans:"ans3" 
},
{
 question:"4. How many months have 28 days?",
A: "2",
B: "1",
C: "All of them",
D: "Depends if there's a leap year or not",
ans:"ans3"
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
