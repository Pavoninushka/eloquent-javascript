function min (num1, num2) {
    if (num1 > num2) return num2;
   else return num1;
}
console.log(min(1,2));

function isEven (integer) {
if (integer === 0) return true;
else if (integer === 1) return false;
else if (integer < 0) return isEven(-integer);
else return isEven(integer - 2);
}

function countBs (string) {
    let result = 0;
    for (let i = 0; i <= string.length; i++ ) {
        if (string[i] === "B"){
            result = result + 1;
        }
    } return result;
}
countBs("BBbBb");

function countChar (string, ch) {
    let result = 0;
    for (let i = 0; i <= string.length; i++ ) {
        if (string[i] === ch){
            result += 1;
        }
    } return result;
}
countChar ("AAAaa", "A");
