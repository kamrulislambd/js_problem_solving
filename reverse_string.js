function reverseString(text){
    let reverseLetter = "";

    for(const letter of text){
        reverseLetter = letter + reverseLetter;
    }
    return reverseLetter;
}

let mytext = 'Welcome to my website';

const reversedString = reverseString(mytext);

console.log(reversedString);