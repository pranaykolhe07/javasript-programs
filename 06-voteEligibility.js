console.log(`---------------> Assignment 1 <---------------`);
var voteEligible = function(age){
    if (age <= 0 || age > 130 || age == null) {
        console.log(`Invalid Data, age: ${age}`);
        console.log(`----------------------------------------`);
        
    } else {
        console.log(`Valid Data: ${age}`);
        if (age >= 18) {
            console.log(`You are Eligible for vote.`);
            console.log(`----------------------------------------`);
            
        } else {
            console.log(`Sorry, You are not eligible for vote`);
            console.log(`----------------------------------------`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);