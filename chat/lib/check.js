import { describeListenError } from './lib/errors.js';
console.log(describeListenError({ code: 'EADDRINUSE' }, 5000));
console.log(describeListenError({ code: 'EACCES' }, 80));
console.log(describeListenError(new Error('boom'), 5000));