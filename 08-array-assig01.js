console.log(`===============Assignment 01===============`);

console.log(`=============== 01 ===============`);
const fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits);
console.log(`The first element in the array is: ${fruits[0]}.`);
console.log(`The first element in the array is: ${fruits[fruits.length-1]}.`);

console.log(`=============== 02 ===============`);
console.log(fruits);
console.log(`inserting Papaya at beginning of the array`);
fruits.unshift("Papaya");
console.log(fruits);

console.log(`=============== 03 ===============`);
console.log(fruits);
console.log(`removing "Mango" from the list`);
fruits.splice(4, 1);
console.log(fruits);

console.log(`=============== 04 ===============`);
console.log(fruits);
console.log(`inserting element "Pineapple" at the end of the array`);
fruits.push("Pineapple")
console.log(fruits);

console.log(`=============== 05 ===============`);
console.log(fruits);
console.log(`inserting element "Dragon fruit" before "Water melon"`);
fruits.splice(4, 0, "Dragon Fruit");
console.log(fruits);

console.log(`=============== 06 ===============`);
console.log(fruits);
console.log(`replacing element "orange" with "kiwi"`);
fruits.splice(2, 2, "Kiwi");
console.log(fruits);

console.log(`=============== 07 ===============`);
console.log(fruits);
console.log(`Elements staring from index 1 to 4`);
let sliceFruit = fruits.slice(1, 5);
console.log(sliceFruit);

console.log(`=============== 08 ===============`);
console.log(fruits);
console.log(`selecting last 3 element & logging it on console `);
let last3Fruits = fruits.slice(fruits.length-3);
console.log(last3Fruits);





















