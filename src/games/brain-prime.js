import startGame from '..';
import getRandom from '../utils';

const isPrime = (num) => {
  for (let i = 2; i < num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const question = getRandom(1, 20);
  const answer = isPrime(question) ? 'yes' : 'no';

  return (message) => {
    switch (message) {
      case 'answer':
        return answer;
      default:
        return question;
    }
  };
};

export default () => startGame(description, generateGameData);
