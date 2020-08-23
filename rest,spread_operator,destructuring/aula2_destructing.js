var arr = ['apple', 'banana', 'orange', ['tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destruction Assigment com array
var [apple2, banana2, orage2, [tomato2]] = ['apple', 'banana', 'orange', ['tomato']];

console.log(tomato2);

//Destruction Assigment com objeto
var obj = {
    name: 'Edney',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};
var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];
//DA
var {name} = obj;//ou
var {name: name2} = obj;
var {props:{age : age2}} = obj;
var {
    props: {age: age2, favoriteColors: [color1, color2]}
} = obj;
console.log(name);
console.log(name2);
console.log(age2);
console.log(color1);
console.log(color2);

var arr = [{
    name: 'Apple',
    type: 'fruit'
}];
var fruit1 = arr[0].name;
//DA
var [{name : name2}] = arr;
console.log(name2);

//Destruction Arguments com function
function sum([a, b] = [0, 0]) {
    return a + b;
}
console.log(sum([5, 5]));

function sum({a, b}) {
    return a + b;
}
console.log(sum({ a:5, b: 5}));