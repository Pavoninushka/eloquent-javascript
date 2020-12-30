// First
class Vec {
    constructor(x,y){
    this.x = x;
    this.y = y;
}
plus (otherVector) {
        return new Vec (this.x + otherVector.x,this.y + otherVector.y );
};
minus (otherVector) {
    return new Vec (this.x - otherVector.x, this.y - otherVector.y);
};

get length () {
return Math.sqrt(this.x * this.x + this.y * this.y);
}
}

console.log(new Vec(1, 2).minus(new Vec(2, 3)));

// Second

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
}


let group = Group.from([10, 20]);

// Third

class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }
};



// Forth
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));






