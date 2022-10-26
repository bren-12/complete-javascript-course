let markMass = 78;
let markH = 1.69

let johnMass = 92;
let johnH = 1.95;

let markBMI;
let johnBMI;
function BMI(h, mass) {
    let bmi = mass / (h * h);
    return bmi;
}
markBMI = BMI(markH, markMass);
johnBMI = BMI(johnH, johnMass);

console.log("MarkBMI: " + markBMI);
console.log("JohnBMI: " + johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markMass = 95;
markH = 1.88

johnMass = 85;
johnH = 1.76;

markBMI = BMI(markH, markMass);
johnBMI = BMI(johnH, johnMass);

console.log("Mark2BMI: " + markBMI);
console.log("John2BMI: " + johnBMI);

markHigherBMI = markBMI > johnBMI;
if (markHigherBMI === true) {
    console.log(`Mark has a higher BMI than John because ${markBMI} is greater than ${johnBMI}`);
}
else {
    console.log(`John has a higher BMI than Mark because ${johnBMI} is greater than ${markBMI}`);
}
console.log();