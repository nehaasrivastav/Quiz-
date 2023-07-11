//  console.log(5);
const quizDB = [
    {
question:"1. What's the real name of the creepy robot doll in Squid Game?",

A: " Younghee",
B: "Kang Sae-byeok",
C: "Ji-yeong",
D: "None of the above",
ans:"ans1"
},
{
question:"2.  In The Vampire DIaries, out of the three best friends Elena, Caroline, and Bonnie, which one is a witch?",
A: "Elena",
B: "Caroline",
C: "Bonnie",
D: "don't know",
ans:"ans3"
},

{
question:    "3.  In FRIENDS S4, Rachel gets a pet cat. What's the name of the cat?",
A: "Smelly Cat",
B: "Mrs. Whiskerson",
C: "Marcel",
D: "",
ans:"ans2"

},{
question: "4. The answer is really big.", 
A: "THE ANSWER" ,

B: "Really big" ,

C: "An elephant ",

D: "The data given is insufficient",
ans:"ans3"
},{
 question:"5. Divide 30 by half and add ten", 
A: "40.5",

B: "50",

C: "70",

D: "I know this is a trick question, so NONE. Ha!",
ans:"ans2"

},
{
question: "6.If an operation is defined by a* b = a² + b², then (1 * 2) * 6 ",
A: "12",
B: "28",
C: "61",
D: "None of these",
ans:"ans4" 
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
 function myfunc(event){
    event.preventDefault();

    
 }
 