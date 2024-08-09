console.log(`----------------------> Assignment 2 <----------------------`);
var interview = function(gradScore, hscScore, sscScore, candidateName){
    if (gradScore >= 70 || hscScore >= 80 || sscScore > 90){
        console.log(`Congrats "${candidateName}", You are eligible for TCS interview.`);
        
    } else {
        console.log(`Unfortunately "${candidateName}", You are not eligible for TCS interview.`);
        
    }
}
interview(80, 86, 90, "Jenny")
interview(70, 65, 55, "James")
interview(60, 79, 88, "John")
