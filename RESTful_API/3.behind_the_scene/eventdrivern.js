let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('tail', () => {
    console.log('connection successful.');
})

eventEmitter.on('connect', () => {
    console.log('connection 2 successful.');
})

eventEmitter.emit('tail');
eventEmitter.emit('connect');
eventEmitter.emit('tail');
