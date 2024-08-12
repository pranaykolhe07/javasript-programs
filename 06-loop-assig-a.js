console.log(`-----------1.Count Total number of vowels------------`);

var sentence = "I am very good IT Developer";
var vowels = "aeiou";
var vowelsCount = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    char = char.toLowerCase();
    if (vowels.includes(char)) {
        vowelsCount++;
    }
}
console.log(`Total number vowels is : ${vowelsCount}`);


console.log(`-------2.function to get sum of cube of numbers from 1 to 5------`);
var sumCube = 0;
for (let index = 0; index <=5; index++) {
     sumCube = sumCube + index * index * index;   
}
console.log(`Summation is ${sumCube}`);

console.log(`-----3.function to get odd position character without empty space------`);


var oddPositionChars = function(sentence) {
    for (let index = 0; index < sentence.length; index++) {
        var char = sentence.charAt(index); 
        if (index % 2 == 1 && char != " ") {  
            console.log(`Character at odd position: ${char}`);
        }
    }
}

oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be UI IT Champ");


