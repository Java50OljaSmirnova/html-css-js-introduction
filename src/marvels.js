//referebce to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letter-remainder");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
const guessButton = document.getElementById("guess-button");
const givenAnswer = document.getElementById("answer");
let wordLettersElement;
let answer;
//global variables
const questionWord = [["Which country's symbol is Big Ben?", "England"], ["Which country is the birthplace of pasta?", "Italy"]];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
let finishMessage ;
//functions
function startGame(){
   
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionWord[currentIndex][0];
    playAgain.style.display = 'none';
    resultMessage.innerHTML ='';
    wordElement.innerHTML = getWordDivs();
    remainedLettersElement.innerHTML = `Number of letters that you may enter ${initialLettersNumber}`;
    guessButton.style.display = 'block';
   
    
}
function getWordDivs(){
   const array = Array.from(questionWord[currentIndex][1]);
   const res = array.reduce(function(res, cur){
        return res + `<div class="letter">${cur}</div>`;
   }, "" );
   initialLettersNumber = Math.round(questionWord[currentIndex][1].length * 0.3);
   return res;
}


function checkWord(){
    const answerOfQuestion = questionWord[currentIndex][1].toUpperCase();
    const answerOfGamer = wordInputElement.value.toUpperCase();

  if(answerOfGamer=== answerOfQuestion){
        finishMessage = "You are Winner!!!";
    }else{
        finishMessage = "Opps.... try again";
    }
    finishGame();
    
}
function processLetter(){
   //TODO
}
function takeChance(){
    wordInputElement.readOnly = false;
    letterInputElement.disabled = true;
    playAgain.style.display = 'none';
    

}
function finishGame(){
    resultMessage.innerHTML = finishMessage;
    playAgain.style.display = 'block';
    guessButton.style.display = 'none';
}
//action
startGame();