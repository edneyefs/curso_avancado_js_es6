function hello() {
    console.log('Hello');
    console.log('From');

    console.log('Function!');
}
hello();

//generators - forma de construir iteradores
function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function!');
}
const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

//Novo
function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}
const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

//Novo
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Novo
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj)
    console.log(value);