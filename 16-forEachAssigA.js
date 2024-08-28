console.log(`----------01----------`);

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach((element, index) => {
  console.log(`Index is: ${index}, & Element is: ${element}`);
});

console.log(` `);

console.log(`----------02----------`);
    console.log(`Positive numbers in array`);

arrayNumbers.forEach((element) => {
  if (element > 0) {  
    console.log(element);
  }
});

console.log(` `);

console.log(`----------03----------`);
const negativeNumbers = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    negativeNumbers.push(element);
  }
});

console.log(`The negative number in array: ${negativeNumbers}`);

console.log(` `);

console.log(`----------04----------`);
console.log(`Even numbers in array`);

arrayNumbers.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});

console.log(` `);

console.log(`----------05----------`);
let sum = 0;
arrayNumbers.forEach((element) => {
  sum += element;
});

console.log(`Sum of all elements: ${sum}`);

console.log(` `);

console.log(`----------06----------`);
arrayNumbers.forEach((element, index) => {
  if (index % 2 === 0) {
    console.log(`Even index: ${index} and Corresponding element: ${element}`);
  }
});