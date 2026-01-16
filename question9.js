// Create your own implementations of common array methods.

// Implement these on Array.prototype:

Array.prototype.myMap = function(callback) {
    const res = []

    for(let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this));
    }

    return res;
};

const testMap = [1,2,3].myMap(x => x * 2);
console.log(testMap);

Array.prototype.myFilter = function(callback) {
    const res = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            res.push(this[i])
        }
    }

    return res;
};

const testFilter = [2,4,7].myFilter(x => x % 2 === 0);
console.log(testFilter)

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

const testReduce = [1,2,3].myReduce((acc, cv) => acc + cv);
console.log(testReduce);

Array.prototype.myFind = function(callback) {
   for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            return this[i];
        }
    }

    return undefined;

};

const testFind = [8, 12, 20].myFind((x) => x % 2 === 0)
console.log(testFind);

Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }

    return false;
};

const testSome = [4,8,10].mySome((x) => x % 3 === 0);
console.log(testSome);