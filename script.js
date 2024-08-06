let randomValue = Math.floor(Math.random()*100+1);
console.log(randomValue);

const inputField = document.querySelector(".input");
const submit = document.querySelector(".submit-btn");
const previousField = document.querySelector(".previous");
const remainingField = document.querySelector(".remaining");
remainingField.innerHTML = 10;
const resultField = document.querySelector(".result");
const resultBox = document.querySelector(".result-box");
const startBtn = document.querySelector(".start");
const resultH3 = document.querySelector(".result-h3");

let guesses = [];
let count = 1;




submit.addEventListener("click",()=>{
    let guess = (inputField.value)  ;
    validation(guess)
    inputField.value = '';
})


function validation(guess){
    if(isNaN(guess)){
        alert("Enter a valid number");
    }
    else if(guess<1 || guess>100){
        alert("Number should be in range (1-100)");
    }
    else{
        guesses.push(guess)
        setPrevious(guess)
        result(guess)
        count++;
    }
}

function setPrevious (guess){
    previousField.innerHTML +=`${guess}, `;
    remainingField.innerHTML = `${10-count}`
}

function result(guess){
    if(guess == randomValue){
        resultField.innerHTML = `Correct.`;
        console.log(count);
        resultH3.classList.add('bg-green')
        submit.setAttribute("disabled","");
        startBtn.removeAttribute('disabled')
        newGame();
        
    }else if(guess > randomValue){
        resultField.innerHTML = `too large`;
        resultH3.classList.add('bg-red')
        console.log(count);
        endGame();
    }
    else if(guess < randomValue){
        resultH3.classList.add('bg-red')
        resultField.innerHTML = `too small`;
        console.log(count);
        endGame();
    }
}

function endGame(){
    if(count == 10){
        submit.setAttribute("disabled","");
        startBtn.removeAttribute('disabled');
        newGame();
    }
}

function newGame(){
    startBtn.addEventListener("click",()=>{
        randomValue = Math.floor(Math.random()*100+1);
        count = 1;
        guesses=[];
        previousField.innerHTML = '';
        remainingField.innerHTML = '';
        resultField.innerHTML = '';
        startBtn.setAttribute("disabled","");
        submit.removeAttribute('disabled');
        

        console.log(startBtn.hasAttribute("disabled"));

     resultH3.classList.remove("bg-green","bg-red");
 })
 
}







