console.log(`===============Assignment 02===============`);

console.log(`=============== 01 ===============`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`Total elements available in array: ${arrayNumbers.length}`);

console.log(`=============== 02 ===============`);
console.log(arrayNumbers);
console.log(`The first element in the array is: ${arrayNumbers[0]}.`);
console.log(`The last element in the array is: ${arrayNumbers[arrayNumbers.length-1]}.`);

console.log(`=============== 03 ===============`);
console.log(arrayNumbers);
console.log(`Third last element of the array is: ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`=============== 04 ===============`);
console.log(arrayNumbers);
console.log(`Even numbers in the array is:`); 
for (const element of arrayNumbers) {
    if (element%2==0) {       
        console.log(element);
        
    }
    
}

console.log(`=============== 05 ===============`);
console.log(arrayNumbers);
console.log(`Odd numbers in the array is:`); 
for (const element of arrayNumbers) {
    if (element%2==1) {
        console.log(element);
        
    }
    
}

console.log(`=============== 06 ===============`);
console.log(arrayNumbers);
console.log(`Numbers which are multiple of 5 in the array is:`); 
for (const element of arrayNumbers) {
    if (element%5==0) {
        console.log(element);
        
    }
    
}

console.log(`=============== 07 ===============`);
console.log(arrayNumbers);
console.log(`Is number 115 available in the array: ${arrayNumbers.includes(115)}`);

console.log(`=============== 08 ===============`);
console.log(arrayNumbers);
console.log(`Is number 23 available in the array: ${arrayNumbers.includes(23)}`);

console.log(`=============== 09 ===============`);
console.log(arrayNumbers);
console.log(`inserting number 55 & 66 at index 3`);
let arrayInsert = arrayNumbers.splice(3, 0, 55,66)
console.log(`after inserting number 55 & 66 at index 3:`);
console.log(arrayInsert);

console.log(`=============== 10 ===============`);
console.log(arrayNumbers);
console.log(`deleting number 3 elements from index 4`);
let arrayDelete = arrayNumbers.splice(4, 3)
console.log(`after deleting 3 elements from index 4:`);
console.log(arrayDelete);

console.log(`=============== 11 ===============`);
const arrayNum = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNum);
var addition = 0;
console.log(`finding elements at even index position, and adding them`);
for (let index = 0; index < arrayNum.length; index++) {
    if (index%2==0) {
        const element = arrayNum[index];
        addition = addition + element
    }
}
console.log(`The sum of elements at even index: ${addition}`);

console.log(`=============== 12 ===============`);
console.log(arrayNum);
var addition = 0;
console.log(`Finding elements at odd index positions, and adding them`);
for (let index = 0; index < arrayNum.length; index++) {
    if (index % 2 != 0) { 
        const element = arrayNum[index];
        addition = addition + element;
    }
}
console.log(`The sum of elements at odd index: ${addition}`);


console.log(`=============== 13 ===============`);
console.log(arrayNum);
var sum = 0;
console.log(`Sum of all elements in array`);
for (const element of arrayNum) {
    sum = sum + element;
}
console.log(`Sum of all elements in array: ${sum}`);

