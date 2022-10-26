function averageScore(score1, score2, score3) {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
}

const phinsAveScore = averageScore(97, 112, 101);
const bearAveScor = averageScore(97, 112, 101);
console.log(phinsAveScore);
console.log(bearAveScor);
console.log((bearAveScor > phinsAveScore) && (bearAveScor > 100));

if (phinsAveScore === bearAveScor) {
    console.log("Its a Draw!");
}
else if ((phinsAveScore > bearAveScor) && (phinsAveScore > 100)) {
    console.log("Phins Win! " + phinsAveScore);
}
else if ((bearAveScor > phinsAveScore) && (bearAveScor > 100)) {
    console.log("Bears Win! " + bearAveScor);
}
else if (bearAveScor > 100) {
    console.log("No team scored averaged more than 100")
}