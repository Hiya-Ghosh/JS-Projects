//var a = {}; is an object-key-value pairs. 
//var a = []; is an array-values stored in sequential indexes
//You are not creating array when you are using {}, you are creating object

const quizData=[
    {
        question:"What does HTML stands for?",
        a: "Hypertext Machine language",
        b: "Hypertext and links markup language",
        c: "Hypertext Markup Language",
        d: "Hightext machine language",
        correct:"c",

    },
    {
        question:"How is document type initialized in HTML5.??",
        a:"</DOCTYPE HTML>",
        b:"</DOCTYPE>",
        c:"<!DOCTYPE HTML>",
        d:"</DOCTYPE html>",
        correct:"c",
    },
    {
        question:"Which of the following HTML Elements is used for making any text bold ?",
        a:"<p>",
        b:"<li>",
        c:"<l>",
        d:"<b>",
        correct:"d",
    },
    {
        question:"Which of the following HTML element is used for creating an unordered list??",
        a:"<ui>",
        b:"<i>",
        c:"<em>",
        d:"<ul>",
        correct:"d",
    },
    {
        question:"Which of the following characters indicate closing of a tag?",
        a:".",
        b:"/",
        c:"//",
        d:"!",
        correct:"b",

    },

];

const q=document.getElementById("ques");
const ans_a=document.getElementById("a_text");
const ans_b=document.getElementById("b_text");
const ans_c=document.getElementById("c_text");
const ans_d=document.getElementById("d_text");
const subbtn=document.getElementById("submit");

// returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
// basically creates a list of all the options in class ans (.ans)
const ansElement=document.querySelectorAll(".ans");
const quiz=document.getElementById("quiz"); //the quiz container div


//current question and score
let currentQuiz=0;
let score=0;







loadQuiz();

function loadQuiz(){

        //deselects all answers when you refresh 
        deselectAnswers();

        //currentQuizData = an object in the array quizData present at index currentQues
        const currentQuizData= quizData[currentQuiz];

        //q = const from getElementById
        //question = key in array
        q.innerText=currentQuizData.question;
        ans_a.innerText=currentQuizData.a;
        ans_b.innerText=currentQuizData.b;
        ans_c.innerText=currentQuizData.c;
        ans_d.innerText=currentQuizData.d;

}







function deselectAnswers() {
    //like a for loop
    //ansElement is a list that cotains all options, forEach loop checks if the radio button has been checked
    //if it has been checked, removes checked by : i.checked=false
    ansElement.forEach(
        (i) =>{
            i.checked= false;
        }
    );

}






function getSelected(){
    let answer= undefined;

    ansElement.forEach((i)=>{
        if(i.checked){
            //this gives the list item
            answer=i.id;
        }
    });

    return answer;
}






// when you click on submit button, subbtn is from submit(id)
subbtn.addEventListener('click', ()=>{

    //either gets the id of the selected item in list, else undefined
    const val= getSelected();

    //not undefined (some answer selected)
    if(val){

        if(val == quizData[currentQuiz].correct){
            score++;
        }
        //increments
        currentQuiz++;

        if(currentQuiz< quizData.length){
            //calls loadquiz() after incrementing currentQuiz
            loadQuiz();
        }
        else{
            // the button is styled like the button in submit as CSS is same for both 
            quiz.innerHTML=`
            <h2>Your Score is ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Reload</button>
            `;  
        }

    }
    
});