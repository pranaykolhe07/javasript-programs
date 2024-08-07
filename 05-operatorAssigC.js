console.log("============Assignment 1============");

function interviewCheck(gradScore, hscScore, sscScore, candidateName ){
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 
    ? `Congrats "${candidateName}" you are eligible for TCS interview.` 
    : `Unfortunately "${candidateName}" you are not eligible for interview.`;
    console.log(result);
    

}
var result = interviewCheck(80, 86, 90, "Jenny");
var result = interviewCheck(70, 65, 55, "Steve");
var result = interviewCheck(60, 79, 88, "Samuel");
