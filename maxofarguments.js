

//Maxvalue from maxarguments

function maxArgu(...args){
    let maxValue = args[0];
    for(let i = 0; i < args.length; i++){
        if(maxValue < args[i]){
            maxValue = args[i];
        }
    }
    return maxValue;
}

const arguments = (12, 43, 22, 54, 27, 100);

console.log(maxArgu(arguments));