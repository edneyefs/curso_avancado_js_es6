/*
try {
    const name = 'Edney Silva';

    const myError = new Error('Custom message');

    throw myError;
} catch (err) {
    console.log('Erro: ', err);
} finally {
    console.log('Keep going...');
}
*/

//outro
class CustomError extends Error {
    constructor({ message, data}) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Edney Silva';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
}   catch (err) {
    if (err.data.type === 'Server error') {
    } else {
    }
} finally {
    console.log('Keep going...');
}