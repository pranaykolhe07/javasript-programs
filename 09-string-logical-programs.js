console.log(`------01.WAP to find the length or total number of characters of the strings------`);
const string1 = "Hello, World!";
const length1 = string1.length;
console.log(`The length of string "${string1}" is: ${length1}`);

const string2 = "JavaScript is the language of Internet";
const length2 = string2.length;
console.log(`The length of string "${string2}" is: ${length2}`);

console.log(` `);


console.log(`------02.WAP to print or log the last character of the given strings------`);
function getLastChar(str){
    let strChar = str.charAt(str.length-1);
    console.log(`The last character of the string "${str}" is: "${strChar}"`);
    
}
getLastChar("Hey, my friend, Programming Language");
getLastChar("I am learning logical programs");
getLastChar("Angular");

console.log(` `);

console.log(`------03.WAP to print or the first character of the given strings------`);
function getFirstChar(str){
    let strChar = str.charAt(0);
    console.log(`The First character of the string "${str}" is: "${strChar}"`);
    
}
getFirstChar("React");
getFirstChar("Elon Musk");
getFirstChar("Apple founder is Steve Jobs");

console.log(` `);

console.log(`------04.WAP to check whether given strings contains word "UI" or not------`);
function containsUI(str){
    let contains = str.includes("UI");
    console.log(`Does the string "${str}" contains "UI" = ${contains}  `);

}
containsUI("React-UI Developer");
containsUI("UI Developer");
containsUI("Front end and back end technologies");

console.log(` `);

console.log(`------05.WAP how do you split a string into an array of substrings------`);
function subString(str){
    let result = str.split(",");
    console.log(`The array substring of "${str}" is: `,result);
    
}
subString("apple,orange,banana");
subString("Stew,Bill,Jenny,Elon");

console.log(` `);

console.log(`------06.Reverse String------`);

console.log(`------Step 1: Using Predefined methods------`);
function reverseStringUsingMethods(str) {
    let reversedStr = str.split("").reverse().join("");
    console.log(`Reversed string of "${str}" is: ${reversedStr}`);
}
reverseStringUsingMethods("Software");
reverseStringUsingMethods("UI Developer");

console.log(` `);

console.log(`------Step 2: Without using Predefined methods------`);
function reverseStringManually(str){
    let reverseStr = "";
    for (let i = str.length-1; i >= 0; i--) {
        reverseStr += str[i];
        
    }
    return reverseStr
       
}
let str1 = "Web Developer";
let str2 = "Billion Dollar";
let str3 = "Java";

console.log(`Reverse string of "${str1}" is: ${reverseStringManually(str1)}`);
console.log(`Reverse string of "${str2}" is: ${reverseStringManually(str2)}`);
console.log(`Reverse string of "${str3}" is: ${reverseStringManually(str3)}`);

console.log(" ");


console.log(`------07.Program to count character "a"------`);
function charCount(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a") {
            count++
        }
    
    }
    return count;
}

str1 = "JavaScript";
console.log(`Total count of character "a" in string "${str1}" is: ${charCount(str1)}`);

str2 = "Do or Die";
console.log(`Total count of character "a" in string "${str2}" is: ${charCount(str2)}`);

str3 = "Learn with us, Job with us";
console.log(`Total count of character "a" in string "${str3}" is: ${charCount(str3)}`);

str4 = "Empowering Dreams, Guaranteeing Futures";
console.log(`Total count of character "a" in string "${str4}" is: ${charCount(str4)}`);

str5 = "Anny, My favorite fruit is Apple";
console.log(`Total count of character "a" in string "${str5}" is: ${charCount(str5)}`);

console.log(" ");

console.log(`------08.Program to count vowels------`);
function vowelsCount(str){
    let count = 0;
    var vowels = "aeiou";
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        char = char.toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`Total number of vowels in string "${str}" is: ${count}`);
}
vowelsCount("JavaScript");
vowelsCount("HTML and CSS");
vowelsCount("Language Of Internet");
vowelsCount("I am UI Developer");
vowelsCount("Do or Die");

console.log(" ");

console.log(`------09.Program to count words------`);
function wordCount(str){
    let word = str.split(' ');
    return word.length;
}
str1 = "JavaScript The language of Internet";
console.log(`Total count of words in string "${str1}" is: ${wordCount(str1)}`);

str2 = "Enhance Your Learning Journey with Exclusive Add-ons";
console.log(`Total count of words in string "${str2}" is: ${wordCount(str2)}`);

str3 = "Beyond frameworks, Beyond Imagination";
console.log(`Total count of words in string "${str3}" is: ${wordCount(str3)}`);

str4 = "I am passionate software developer";
console.log(`Total count of words in string "${str4}" is: ${wordCount(str4)}`);

console.log(` `);

console.log(`=====10.Program to find duplicate characters=====`);

function duplicateCharCount(str) {
    const charCount = {};

    str = str.toLowerCase();

    for (let char of str) {
        if (char >= "a" && char <= "z") {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    for (const char in charCount) {
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
        }
    }
}

console.log(`Duplicate character in "Banana" with count is:`);
duplicateCharCount("Banana");
console.log(`Duplicate character in "Apple" with count is:`);
duplicateCharCount("Apple");
console.log(`Duplicate character in "Software Developer" with count is:`);
duplicateCharCount("Software Developer");
