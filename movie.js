const quizDB =[
   { question:"1. Who is the Director of the movie “Titanic”?",
    A: "Christopher Nolan",
    B: "James Cameron",
    C: "Quentin Tarantino",
    D: "Steven Spielberg",
    ans:"ans2"
},
{
    question:" 2. Who is the Director of the Bollywood Movie “3 Idiots”?",
     A: "Rohit Shetty",
     B: "Karan Johar",
     C: "Anurag Kashyap",
     D: "Rajkumar Hirani",
     ans: "ans4"

},
{
    question: "3.  Which was the first movie debut by Salman Khan?",
    A: " Baaghi",
    B: "Biwi Ho To Aisi",
    C: " Maine Pyar Kiya",
    D: " Suryavanshi",
    ans:"ans2"
},
{
   question: "4. Who is the Author of Harry Potter?",
   A: "James Patterson",
   B: "Leo Tolstoy",
   C: "Robert Frost",
   D: "J. K. Rowling",
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
