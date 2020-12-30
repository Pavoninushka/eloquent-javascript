/* function noisy(f) {
     return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

let resultFunction = noisy(Math.min);

let resultFunction = (...args) => {
    console.log("calling with", args);
    let result = Math.min(...args);
    console.log("called with", args, ", returned", result);
    return result;
};

resultFunction(3, 2, 1);

noisy(Math.min)(3, 2, 1);

// Second

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function unless(test, then) {
    if (!test) {
        then();
    }
}

repeat(3, n => {
    unless(n % 2 === 1, () => {
        console.log(n, "is even");
    });
});

// Third
["A", "B"].forEach(item => console.log(item));

// Forth
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// Fifth
let SCRIPTS = [
    {
        name: "Coptic",
        ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
        direction: "ltr",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
    {
        name: "Coptic2",
        ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
        direction: "ltr",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
];

function characterCount(script) {
    return script.ranges.reduce((count, array) => {
        let from = array[0];
        let to = array[1];
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

// Six
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

console.log(characterScript(121));



class Group {
    constructor() {
        this.members = [];
    }
    add (value) {
        if (!this.has(value)) {
         this.members.push(value);
    }
}
    delete (value) {
        this.members = this.members.filter(v => v !== value);
    }
    has (value) {
        return this.members.includes(value);
    }
    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));

class Group {
    constructor() {
        this.members = [];
    }
    add (value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }
    delete (value) {
        this.members = this.members.filter(v => v !== value);
    }
    has (value) {
        return this.members.includes(value);
    }
    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
[Symbol.iterator]() {
    return new GroupIterator(this);
}
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return {done: true};
        } else {
            let result = {value: this.group.members[this.position],
                done: false};
            this.position++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

let Reptiles = {
    biomes: {
        water: ["Alligators", "Crocs"],
        land: ["Snakes", "Turtles"]
    },
    [Symbol.iterator]() {
    let reptilesByBiome = Object.values(this.biomes);
    let reptileIndex = 0;
    let biomeIndex = 0;
    return {
        next() {
            if (reptileIndex >= reptilesByBiome[biomeIndex].length) {
                biomeIndex++;
                reptileIndex = 0;
            }

            if (biomeIndex >= reptilesByBiome.length) {
                return { value: undefined, done: true };
            }

            return {
                value: reptilesByBiome[biomeIndex][reptileIndex++],
                done: false
            };
        }
    };
}
};

let reptileIterator = Reptiles[Symbol.iterator]();
console.log(reptileIterator.next());

 */

