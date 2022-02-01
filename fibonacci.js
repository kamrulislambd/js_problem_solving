function fibonacciSeries(num){
    const fibo = [0, 1];

    if(typeof num != 'number'){
        return 'Please give a number';
    }
    if(num < 2){
        return 'Please give a positive number and greater than 1';
    }
    
        for(let i = 2; i <= num; i++){
                fibo[i] = fibo[i -1 ] + fibo[i - 2];
            }

    return fibo;

}

const fiboSeries = fibonacciSeries(5);
console.log(fiboSeries);
