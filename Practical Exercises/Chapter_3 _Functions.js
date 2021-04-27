//1
function min (a, b) {
    return a < b ? a : b;
}

console.log(min(3,2));

//2
function isEven (number) {
if (Math.abs(number) === 0) return true;
else if (Math.abs(number) === 1) return false;
else return isEven(Math.abs(number) - 2);
}

console.log(isEven(-7))

//3
const countChar = function (string, letter) {
    let count = 0;
    for (let i = 0; i <= string.length; i ++) {
        if (string[i] === letter){
            count++;
        }
    } return count;
}

const countBs = function (string) {
    return countChar(string, "A");
}

console.log(countBs("AAaaA"));
