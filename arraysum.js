/*

function arraySum(numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const arraySumResult = arraySum([21, 18, 32, 58]);
console.log(arraySumResult);

*/

function largestArray(numbers){
    let largest = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

let listArray = [12, 24, 54, 22];

const myLargest = largestArray(listArray);

console.log(myLargest);