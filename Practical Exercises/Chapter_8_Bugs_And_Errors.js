//First
class MultiplicationUnitFailure extends Error {}

function primitiveMultiply (a ,b) {

    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicationUnitFailure ("Fail")
    }
}

function reliableMultiply(a, b) {
    for (; ;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (!(e instanceof MultiplicationUnitFailure)) {
                throw e
            }
        }
    }
}

console.log(reliableMultiply(2,1 ));

//Second

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
let locked = box.locked;
if (!locked) {
   return body ();
}

box.unlock();
try {
    return body();
} finally {
    box.lock();
}
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);
// → true