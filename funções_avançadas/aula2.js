function multiply(a, b) {
    b = typeof b === "undefined" ? 1 : b;

    return a * b;
};

console.log(multiply(5));
console.log(multiply(5, 7));

//outra forma
function multiply(a, b = 1) {
    return a * b;
};
console.log(multiply(a, b));
console.log(multiply(5, 7));

//lazy evaluation
function randomNumber() {
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5));