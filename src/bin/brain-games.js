#!/usr/bin/env node

import {greeting} from '..';

console.log('Welcome to the Brain Games!\n');
const user_name = greeting();
console.log(`Hello, ${user_name}!`);

