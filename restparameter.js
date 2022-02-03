function calcMulti(...args){
    let Multiply = 1;
    for(const arg of args){
        Multiply *= arg;
    }
    return Multiply;
}

console.log(calcMulti(2, 5));