function randomGame() {
    let counter = 0;
    let num;
    const interval = setInterval(function() {
        counter++;
        num = Math.random();
        console.log(num);
    if (num > .75){
        console.log (counter);
        clearInterval(interval);
    }
        

    }, 1000);
}

randomGame()