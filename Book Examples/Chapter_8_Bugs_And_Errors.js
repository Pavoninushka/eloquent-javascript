function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}
test ("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() === "Hello";
});

function numberToString(n, base = 10) {
    let result = "", sign = "";
    if(n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
}
console.log(numberToString(13,10));


function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    return arr.map(({name, avgAlt}) => {
        let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((avgAlt + earthRadius), 3)/GM));
        return {name, orbitalPeriod}
    });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

function promptDirection (question) {
    let result = prompt(question);
    if(result.toLowerCase() === "left") return "L";
    if(result.toLowerCase() === "right") return "R";

    throw new Error("Invalid direction: " + result );
}

function look() {
    if(promptDirection("Which way") === "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}