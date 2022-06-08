'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let sec_num = Math.trunc(Math.random() * 20) + 1 ;
let score = 20
let highscore = 0


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)
    if(!guess){
        document.querySelector('.message').textContent='⛔ No Number!';

    }else if(guess === sec_num){
        document.querySelector('.message').textContent='🎉🎊 correct number!';
        document.querySelector('.number').textContent = sec_num;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }else if(guess>20){
        if(score>1){
        document.querySelector('.message').textContent='😒😒 out of range';
        score--
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent='😧😬❤️';
            document.querySelector('.score').textContent = 0;

        }

    }
    else if(guess>sec_num){
        if(score>1){
        document.querySelector('.message').textContent='☝️ Too High';
        score--
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent='😧😬 You Lose The Game';
            document.querySelector('.score').textContent = 0;
        }
    

    }else if(guess<sec_num){
        if(score>1){
        document.querySelector('.message').textContent='👇 Too low';
        score--
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent='😧😬 You Lose The Game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    sec_num = Math.trunc(Math.random() * 20) + 1 ;

    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';

})
