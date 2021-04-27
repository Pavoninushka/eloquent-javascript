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
    static fromMethod (iterableObject) {
        let newGroup = new Group;
        for (let item of iterableObject) {
            newGroup.add(item)
        }
        return newGroup;
    }
    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

//Fourth

class GroupIterator{
    constructor(group) {
        this.group = group;
        this.position = 0;
    }
    next() {
        if (this.position >= this.group.members.length){
            return {done : true};
        } else {
            let result = { value: this.group.members[this.position],
            done: false};
            this.position++;
            return result;
        }
    }
}

// Fifth

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));






