var log = function(value){
    console.log(value);
};
log('test');


var sumOld = function(a, b){
    return a + b;
};
console.log(sumOld(5, 10));

//Arrow Function - => (hoisting não funciona em arrow functions)

var sum = (a, b) => {
    a + b;
}
console.log(sum(5, 15));

var createObject = () => ({ test: 123 });
console.log(createObject())

//sem arrow function
var obj = {
    showContext: function showContext() {
        this.log('teste'); //ou
        //console.log(this);

        setTimeout(
            function() {
                console.log(this);
            }.bind(this),
            1000
        );
    },
    log: function log(value) {
        console.log(value);
    }
}
obj.showContext();

//utilizando arrow functions
var obj = {
    showContext: function showContext() {
        //this = obj;

        setTimeout(() => {
            this.log('after 1000ms');
            }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
}
obj.showContext();