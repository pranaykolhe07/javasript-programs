console.log(`=====Remove duplicate element from array=====`);

const arrayNum = [11, 3, 4, 11, 4, 7, 3];

function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}

console.log("Array after removing duplicates:", removeDuplicates(arrayNum));

console.log(` `);


console.log(`=====Convert the string into given pattern=====`);

const str = "How are you mate";

function transformString(s) {
    let result = "";
    let capitalize = true;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += ' ';
            capitalize = true;
        } else if (capitalize) {
            result += s[i].toUpperCase();
            capitalize = false;
        } else {
            result += s[i].toLowerCase();
            capitalize = true;
        }
    }

    return result;
}

console.log("Transformed string:", transformString(str));
