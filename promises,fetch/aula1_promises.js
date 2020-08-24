//antes
function doSomething(callback) {
    setTimeout(function() {
        //Did something
        callback('First data');
    }, 1000);
}
function doOtherThing(callback) {
    setTimeout(function() {
        //Did other thing
        callback('Second data');
    }, 1000);
}
function doAll() {
    doSomething(function(data) {
        var processedData = data.split('');
    
        doOtherThing(function(data2) {
            var processedData2 = data2.split('');
            
            setTimeout(function() {
                console.log(processedData, processedData2);
            }, 1000);
        });
    });
}

//Promisse pode ser: pending, fulfilled, rejected
//promises pending
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('Firt data');
    }, 1000);
});
const doOtherthingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('Second data');
    }, 1000);
});
console.log(doSomethingPromise);

//promise
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('Firt data');
        }, 1000);
    });
const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('Second data');
        }, 1000);
    });
doSomethingPromise()
    .then(data => {
        console.log(data);
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', erro));

//promise
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('Firt data');
        }, 1000);
    });
const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('Second data');
        }, 1000);
    });
doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))

//promise
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('Firt data');
        }, 1000);
    });
const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('Second data');
        }, 1000);
    });
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[0].split(''));
}).catch (err => {
    console.log(err);
});

//callback
function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
        
            try {
            doOtherThing(function(data2) {
                var processedData2 = data2.split('');
                
                try {
                setTimeout(function() {
                    console.log(processedData, processedData2);
                }, 1000);
                } catch (err) {
                    //handle error
                }
            });
        } catch(err) {
            //handler error
        }
        });
    } catch (err) {
        //handle erro
    }
}
doAll();
