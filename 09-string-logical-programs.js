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
const str1 = "Web Developer";
const str2 = "Billion Dollar";
const str3 = "Java";

console.log(`Reverse string of "${str1}" is: ${reverseStringManually(str1)}`);
console.log(`Reverse string of "${str2}" is: ${reverseStringManually(str2)}`);
console.log(`Reverse string of "${str3}" is: ${reverseStringManually(str3)}`);