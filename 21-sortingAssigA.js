const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45] ;
console.log(`Given Array: ${arrayRollNumbers}`);
console.log(` `);


console.log(`-----------01----------`);
const reverseRollNum = arrayRollNumbers.reverse();
console.log(`The reversed array: ${reverseRollNum}`);

console.log(` `);

console.log(`-----------02----------`);
const sortedRollNum = arrayRollNumbers.sort();
console.log(`Sorted array with issue: ${sortedRollNum}`);

console.log(` `);

console.log(`-----------03----------`);
const sortedAscendingArray = arrayRollNumbers.sort((a, b) => a - b);
console.log(`Ascending order (custom logic): ${sortedAscendingArray}`);

console.log(` `);

console.log(`-----------04----------`);
const greatestNumber = sortedAscendingArray[sortedAscendingArray.length - 1];
console.log(`Greatest number in array: ${greatestNumber}`);

console.log(` `);

console.log(`-----------05----------`);
const smallestNumber = sortedAscendingArray[0];
console.log(`Smallest number in array: ${smallestNumber}`);

console.log(` `);

console.log(`-----------06----------`);
const uniqueNumbers = [];

for (let i = 0; i < arrayRollNumbers.length; i++) {
  if (uniqueNumbers.indexOf(arrayRollNumbers[i]) === -1) {
    uniqueNumbers.push(arrayRollNumbers[i]);
  }
}

console.log(`Array after removing duplicate elements: ${uniqueNumbers}`); 