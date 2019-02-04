#!/usr/bin/env node

import Greeting from '..';

console.log('Welcome to the Brain Games!\n');
const userName = Greeting();
console.log(`Hello, ${userName}!`);
