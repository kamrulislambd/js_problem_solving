/*
let num1 = 236;
let num2 = 432;

let result = Math.max(num1, num2);
console.log(result);

*/

//Write a function to find which one is maximum between 3 numbers

function isMaximum(x, y, z){
    if(x > y && x > z){
        return x;
    }
    else if(y > x && y > z){
        return y;
    }
    else{
        return z;
    }
}

let Result = isMaximum(25, 34, 85);
console.log('Maximum Value is :',Result);