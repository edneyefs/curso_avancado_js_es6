//ES7 - Async / Await
const simpleFunc = async () => {
    return 123456;
};
console.log(simpleFunc());
simpleFunc().then(data => {
    console.log(data);    
});

//Outro
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123456);
    }, 1000);
});
const simpleFunc = async () => {
    const data = await asyncTimer();

    return data;
};
simpleFunc()
    .then(data => {
        console.log(data);    
    })
    .catch(err => {
        console.log(err);
    });

//Outro
const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123456);
        }, 1000);
    });
const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);
    return data;
};
simpleFunc()
    .then(data => {
        console.log(data);    
    })
    .catch(err => {
        console.log(err);
    });