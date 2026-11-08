import { average } from './math.js';
import os from 'node:os';

console.log(average([2, 4, 9]));
console.log(os.cpus.length);

console.log(import.meta.dirname);
console.log(import.meta.filename);
