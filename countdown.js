let timer = 10 // we let bc it will change 
const countdownTimer = setInterval (function(){
    console.log(timer); //timer starts at 10 here bc its bfore the timer --
    timer--;
    console.log(timer); // if timer starts here it will start at 9 bc timmer -- subtracts 1
    if (timer === 0 ) { // this line is the counter so it stops
        clearInterval(countdownTimer);
        console.log('HAPPY NEW YEAR!!')
    }
}, 1000);

