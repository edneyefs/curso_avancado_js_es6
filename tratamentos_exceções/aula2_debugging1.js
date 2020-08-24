const { runInThisContext } = require("vm");

class app {
    constructor() {
        this.bind();
    }

    bind() {
        document.querySelector('.add-button').addEventListener('click', () => {
            this.handleClick(1);
        });

        console.log(document.querySelector('sub-button'))
        document.querySelector('.sub-button').addEventListener('click', () => {
            this.handleClick(-1);
        });
    }

    handleClick(val) {
        const counterE1 = document.querySelector('.counter');
        const value = parseInt(counterE1.innerText);

        counterE1.innerText = value + val;
    }
}

new app();

/*
//Console

console.log('Black Text');
console.warn('Yellow text with alert');
console.error('Red error text');
console.trace();


console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');


console.time('Log time');;
setTimeout(() => {
    console.log('Long time');
});

console.table(['Edney Silva', 'Digital Innovation One']);;
console.log('%c styled log', 'color : blue;');
*/