let triangle = "#";
while (triangle.length < 8){
    console.log(triangle);
    triangle += "#";
};

for (let number = 0; number<=100; number++ ) {
    if (number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz");
    }else if (number % 3 == 0) {
        console.log("Fizz");
    }else if (number % 5 == 0) {
        console.log("Buzz");

    } else {
        console.log(number);
    }
};

let firstLine = " # # # #";
let secondLine = "# # # #";
let chessBoard = `${firstLine}\n${secondLine}\n${firstLine}\n${secondLine}
\n${firstLine}\n${secondLine}\n${firstLine}\n${secondLine}`;
console.log(chessBoard);

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if((x+y) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
};


