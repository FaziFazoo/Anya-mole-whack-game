const score = document.querySelector('#scores');
const timer = document.querySelector('#timeleft');
const mole = document.querySelector('.mole');
const squares = document.querySelectorAll('.square');
const button = document.querySelector('#btn');


let result = 0;
let time = 60;
let hitPostion;
let timerId = null;
let audio = new Audio('image/Chi Chi - Anya ! Notification.mp3');
let condition


function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
        
    });
    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');

    hitPostion = randomSquare.id

    squares.forEach(square =>{
        square.addEventListener('click',() =>{
            if (square.id == hitPostion ){
            audio.play();
            result++;
            score.textContent = result;
            hitPostion = null;
            }
        })
    })
   
}

function moveMole(){
    
    timerId = setInterval(randomSquare,1000)
}



function mainS(){
button.addEventListener('mousedown',()=>{
    condition = true;
    button.remove()
    if(condition==true){
        moveMole();
        function timedec(){
        timer.textContent = time;
        time--;
        if(time==-1){
            clearInterval(countDownTimerId);
            alert("GAME OVER ! Your Final Score is "+ result);
            location.reload();
        }
    
    }
        let countDownTimerId = setInterval(timedec, 1000)
       
    
}
})
}
mainS()