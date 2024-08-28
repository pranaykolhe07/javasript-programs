console.log(`----------01----------`);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const addedTenArray = arrayNumbers.map(element => element + 10);
console.log(`Add 10 in each element: ${addedTenArray}`);

console.log(` `);

console.log(`----------02----------`);
const cubedArray = arrayNumbers.map(element => element ** 3);
console.log(`Cube each element: ${cubedArray}`);

console.log(` `);

console.log(`----------03----------`);
const addedIndexArray = arrayNumbers.map((element, index) => element + index);
console.log(`indes + element : ${addedIndexArray}`);
