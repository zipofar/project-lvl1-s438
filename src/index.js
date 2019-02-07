import readlineSync from 'readline-sync';

const showTryAgain = (userAnswer, rightAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const countGames = 3;

export default (description, generateGameData) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < countGames; i += 1) {
    const getDataGame = generateGameData();
    const question = getDataGame('question');
    const rightAnswer = getDataGame('answer');
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      showTryAgain(userAnswer, rightAnswer, userName);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
