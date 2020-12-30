import { SCRIPTS } from "./scripts.js";

// First
let arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce((item1, item2) =>
    item1.concat(item2), []);

// Second

function loop (start, test, update, body) {
    for (let value = start; test(value); value = update(value)  ) {
        body(value);
    }
}

// Third

function every (array, test) {
    for (let i = 0; i <= array.length; i++) {
        if(!test(i))
            return false;
        }
        return true;
}

function every2 (array, test) {
    return !array.some(n => !test(n));
}

// Forth
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);

        let known = counts.findIndex(c => c.name === name);
        if (known === -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function dominant (str) {
let counts = countBy(str, letter => {

})

}



//console.log(dominantDirection("Hey, مساء الخير"));
// → ltr


function uniteUnique(...arrs) {
    let newArray = [];
    for (let array of arrs) {
        for (let item of array) {
            if (!newArray.includes(item)){
                newArray.push(item);
            }
        }
    }
    return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
