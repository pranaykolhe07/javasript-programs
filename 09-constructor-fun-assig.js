console.log(`=====Creating a function constructor with data member and objects=====`);

function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
let yesBank = new Bank ("Yes Bank","Pune","YES12345","45621");
console.log(`Bank Details: Name: ${yesBank.bankName} | location: ${yesBank.location} | ifsc code: ${yesBank.ifscCode} | branch code: ${yesBank.branchCode}`);

let sbiBank = new Bank ("SBI Bank","Mumbai","SBI12345","40891");
console.log(`Bank Details: Name: ${sbiBank.bankName} | location: ${sbiBank.location} | ifsc code: ${sbiBank.ifscCode} | branch code: ${sbiBank.branchCode}`);

let mahBank = new Bank ("Maharashtra Bank","Nagpur","MAH89045","43215");
console.log(`Bank Details: Name: ${mahBank.bankName} | location: ${mahBank.location} | ifsc code: ${mahBank.ifscCode} | branch code: ${mahBank.branchCode}`);

let axisBank = new Bank ("Axis Bank","Hinganghat","AXIS12345","23232");
console.log(`Bank Details: Name: ${axisBank.bankName} | location: ${axisBank.location} | ifsc code: ${axisBank.ifscCode} | branch code: ${axisBank.branchCode}`);

console.log(`=====Adding data member open & close time=====`);

//prototype
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Bank Details: Name: ${sbiBank.bankName} | Open Time: ${sbiBank.openTime} | Close Time: ${sbiBank.closeTime}`);

console.log(`Bank Details: Name: ${axisBank.bankName} | Close Time: ${axisBank.closeTime}`);

console.log(`Bank Details: Name: ${yesBank.bankName} | Branch Code: ${yesBank.branchCode} | Open Time: ${yesBank.openTime}`);
