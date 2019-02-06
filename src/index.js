import readlineSync from 'readline-sync';

const showTryAgain = (userAnswer, rightAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export function greeting(description = '') {
  console.log('Welcome to the Brain Games!');
  if (description !== '') console.log(description);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export default function startGame(description, generateDataGame) {
  const countGames = 3;
  const userName = greeting(description);
  for (let i = 0; i < countGames; i += 1) {
    const getDataGame = generateDataGame();
    const question = getDataGame();
    const rightAnswer = getDataGame('answer');
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (String(rightAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      showTryAgain(userAnswer, rightAnswer, userName);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
