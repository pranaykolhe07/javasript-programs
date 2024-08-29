console.log(`---------01--------`);

function isPalindrome(str){
    return str === str.split("").reverse().join("");
}

console.log(`Is string "madam" a palindrome: ${isPalindrome("madam")}`);
console.log(`Is string "dad" a palindrome: ${isPalindrome("dad")}`);
console.log(`Is string "hello" a palindrome: ${isPalindrome("hello")}`);

console.log(``);

console.log(`--------02--------`);
function isAnagram(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

console.log(`is string "Silent" & "Listen" an anagram: ${isAnagram("Silent", "Listen")}`);
console.log(`is string "Hello" & "World" an anagram: ${isAnagram("Hello", "World")}`);
console.log(`is string "Such" & "Much" an anagram: ${isAnagram("Such", "Much")}`);
