console.log("=============== Assignment:1 ===============");
console.log(".1.");

function squareOfWordLength(sentence){
    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of world length is: ${result}`);

console.log(".2.");
function givenString (){
    var string = "I am Angular Developer";
    var value = string.split(" ")

    var divide = string.length / value.length;

    var multi = string.length * value.length;

    console.log(`_2.1_`);
    console.log(`The length of the sentence "${string}" is: ${string.length}`);
    console.log(`The result after divide is: ${divide}`);

    console.log(`_2.2_`);
    console.log(`The result after multiplying is: ${multi}`);
    
}
givenString();