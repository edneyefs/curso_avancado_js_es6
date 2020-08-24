//EventEmitter
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});
emitter.emit('User Logged', { user: 'Edney Silva'});

//outro
const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});
Users.userLogged({ user: 'Edney Silva'});
Users.userLogged({ user: 'Juliana Negrão'});
