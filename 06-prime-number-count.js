console.log(`=====Count Prime Numbers=====`);

function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }        
    }
    return true;
}

const array = [3,9,7,6,19,29,53];
let count = 0;
let primeNum = [];
for (const element of array) {
    var result = isPrime(element);
    if (result==true) {
        primeNum.push(element);
        count++;

    }
}
console.log(`The total count of prime number in array [${array}] is: `,count);
console.log(`And the Prime numbers are: `,primeNum);

console.log(` `);

console.log(`=====Count Spaces=====`);

function spaceCount(str) {
    let countSpace = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]==' ') {
            countSpace++;
        }
        
    }
    return countSpace
}
const str1 = "Revision is mother of success";
console.log(`The total space count of string "${str1}" is: ${spaceCount(str1)}`);
const str2 = "JavaScript is the language of Internet world";
console.log(`The total space count of string "${str2}" is: ${spaceCount(str2)}`);
