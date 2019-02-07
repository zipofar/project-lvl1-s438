import startGame from '..';
import getRandom from '../utils';

const description = 'Find the greatest common divisor of given numbers.';


const findGcd = (n1, n2) => {
  const maxNum = Math.max(n1, n2);
  const minNum = Math.min(n1, n2);

  for (let divisor = minNum; divisor > 0; divisor -= 1) {
    if (minNum % divisor === 0 && maxNum % divisor === 0) {
      return divisor;
    }
  }
  return 1;
};

const generateGameData = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const question = `${number1} ${number2}`;
  const answer = findGcd(number1, number2);

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
