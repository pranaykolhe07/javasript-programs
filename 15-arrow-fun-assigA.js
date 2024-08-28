console.log(`===== 1.a =====`);

let greet = () => {
    console.log(`"Good Morning, Today is Monday"`);
    
}
greet();

console.log(` `);

console.log(`===== 2.a =====`);

let multiply = (n1,n2,n3) => {
    let result = n1*n2*n3;
    console.log(`multiplication of given number is: ${result}`);
    
}
multiply(5,5,2);

console.log(`===== 2.b =====`);

let multiDefault = (n1,n2,n3=1) => {
    let result = n1*n2*n3;
    console.log(`multiplication of given number is: ${result}`);
    
}
multiDefault(10,4);

console.log(` `);

console.log(`===== 3.a =====`);

let addNum = (num1,num2,num3,num4,num5) => {
    let result = num1 + num2 + num3 + num4 + num5;
    return result;
    
}
let result = addNum(100, 100, 200, 349, 756);
console.log(`Addition of given numbers is: ${result}`);

console.log(`===== 3.c =====`);
let result1 = addNum("I am ","learning ","ES6 ","features ","in depth.");
console.log(`Addition of given words is: ${result1}`);
