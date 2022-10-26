const bill = 430;
let tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .20;
console.log("Bill*.15 = " + bill * .15);
console.log("Bill*.20 = " + bill * .20);
console.log(tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${bill + tip}`);