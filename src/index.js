import readlineSync from 'readline-sync';

export function greeting() {
  const user_name = readlineSync.question('May I have your name? ');
  return user_name;
}

