//symbols - maneira de gerar um identificador único, nunca é igual ao outro
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log('Symbol 1:', uniqueId);
console.log('Symbol 2:', uniqueId2);
console.log('Um symbol nunca é igual ao outro: Symbol 1 = Symbol2 =', uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello',
};
console.log(obj);

const uniqueId = Symbol('Hello');
//well known symbols
Symbol.iterator;
Symbol.split
Symbol.toStringTag;

const obj = {
    [Symbol.iterator]() {
        break
    }
};

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
while(true) {
    let {value, done} = it.next();

    if(done) {
        break;
    }
    console.log(value);
}

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
for (let value of arr) {
    console.log(value);
}
for (let value of str) {
    console.log(value);
}

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};
const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
