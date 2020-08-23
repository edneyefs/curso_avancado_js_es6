//strings, arrays, literal objects e objetos iteraveis
//spread oparator - tem a função de quebrar os itens e retornar para algum lugar

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
/*
function logArgs(...args){
    console.log(args);
};
*/
function logArgs() {
    console.log(arguments);
}
const arr2 = [5, 6, 7];
arrConcat = arr.concat(arr2).sort(); //ou

const arr3 = [...arr, 5, 6, 7]

logArgs(...str);
logArgs(...arr);
logArgs(...arrConcat);
logArgs(...arr3);

//so pode utilizar o spread para ciração de novos objetos, se tentar cirar um array dará erro
const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);
