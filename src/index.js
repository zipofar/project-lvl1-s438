import readlineSync from 'readline-sync';

function isEven(num) {
  return num % 2 === 0;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function askQuestion(text) {
  return readlineSync.question(text);
}

function showTryAgain(userAnswer, rightAnswer, userName) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
}

function checkAnswer(userAnswer, rightAnswer, userName) {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  showTryAgain(userAnswer, rightAnswer, userName);
  return false;
}

function showCongrats(userName) {
  console.log(`Congratulations, ${userName}!`);
}

export function greeting(rules = '') {
  console.log('Welcome to the Brain Games!');
  if (rules !== '') console.log(rules);
  console.log('');
  const userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function startGameEven(times, min, max) {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const userName = greeting(rules);
  for (let i = 0; i < times; i += 1) {
    const randNum = getRandom(min, max);
    const rightAnswer = isEven(randNum) ? 'yes' : 'no';
    const userAnswer = askQuestion(`Question: ${randNum}\nYour answer: `);
    if (checkAnswer(userAnswer, rightAnswer, userName) === false) {
      return;
    }
  }
  showCongrats(userName);
}
