//antes
function sum(a, b) {
    var value = 0;

    for(var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(sum(5, 5, 3, 2, 5));

//rest operator = ...
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 3, 2, 5));

const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
};
console.log(sum(5, 5, 3, 2, 5));

//
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply.apply(undefined, rest);
};
console.log(sum(5, 5, 3, 2, 5));
