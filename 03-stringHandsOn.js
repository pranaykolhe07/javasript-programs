console.log(`====================="Assignment 02"=====================`);

function stringHandsOn(){
    var sentence = "  Hey you are doing good, keep it up    ";
    console.log(`1.  Given string is: ${sentence}`);
    console.log(`2.  Length of the given string is: ${sentence.length}`);

    var result = sentence.trim();
    var resultLength= result.length;
    console.log(`3.  String after trimming: ${result}, Length: ${resultLength}`);

    console.log(`4.  Total number of space removed: ${sentence.length - resultLength}`);

    console.log(`5.  First and Last character after trimming: "${result.charAt(0)}" ,"${result.charAt(result.length - 1)}"`);
    
    var resultSplit = result.split(" ");
    console.log("6.  Total number of words in the string: ", resultSplit.length);
    
    var resultIndex = result.indexOf("good");
    console.log(`7.  Index of character "good" is: ${resultIndex}`);

    var subStrResult = result;
    console.log(`8.  Substring starting from index 22; "${subStrResult.substr(22)}"`);
    
    var resultInclude = result;
    console.log(`9.  Does the string ends with "up"? : "${resultInclude.includes("up")}"`);

    var resultInc = result;
    console.log(`10. Does the string starts with "Hey"? : "${resultInc.includes("Hey")}"`);
    
}
stringHandsOn();