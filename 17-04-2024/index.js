const logEvents=require('./logEvents')
const EventEmitter=require('events');



class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter(); //obj creation
myEmitter.on('log', (msg) => {  //'on' keyword-listen the event
  logEvents(msg);
});
myEmitter.emit('log','log event emitted');