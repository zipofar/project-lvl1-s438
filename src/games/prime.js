import startGame from '..';
import getRandom from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  const n = Math.abs(num);
  const sqrt = Math.sqrt(n);

  for (let i = 2; i <= sqrt; i += 1) {
    if (n % i === 0) {
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
      case 'question':
        return question;
      default:
        return null;
    }
  };
};

export default () => startGame(description, generateGameData);
