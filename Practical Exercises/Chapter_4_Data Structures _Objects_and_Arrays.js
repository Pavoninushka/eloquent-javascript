function rangeOne (start, end) {
    let array = [];
    for (let i = start; i<= end; i++){
        array.push(i);
    }
  return array;
}
console.log(rangeOne(1,9));

function sum(arr) {
  let result = 0;
  for (let i of arr) {
      result +=i;
  }
  return result
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));

function rangeTwo (start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}
console.log(rangeTwo(5,2,-1));

function reverseArray (arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.unshift(arr[i]);
    }
    return newArray;
}
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));

function reverseArrayInPlace (arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.unshift(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = newArray[i];
    }
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
reverseArrayInPlace(myArray);
console.log(myArray);

function nth(list, n) {
    if (!list) return undefined;
    else if (n === 0) return list.value;
    else return nth(list.rest, n - 1);
}

function deepEqual (val1, val2) {
    if (val1 === val2) return true;
    if (val1 == null || typeof val1 != "object" ||
        val2 == null || typeof val2 != "object") return false;
    let keysVal1 = Object.keys(val1);
    let keysVal2 = Object.keys(val2);

    if (keysVal1.length !== keysVal2.length) return false;
    for (let key of keysVal1) {
        if (!keysVal2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
    }
    return true;
}

function arrayToList (arr) {
    let last = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        last = {value: arr[i], rest: last};
    }
    return last;
}

function listToArray (list) {
    let newArray = [];

    while (list !== null) {
        newArray.push(list.value);
        list = list.rest;
    }
    return newArray;
}

let node2 = {
    value: 2,
    rest: null,
};

let node1 = {
    value: 1,
    rest: node2,
};

let node0 = {
    value: 0,
    rest: node1,
};

let myList = node0;

function prepend (element, list) {
    return {value: element, rest: list};
}




