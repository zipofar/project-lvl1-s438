import startGame from '..';
import getRandom from '../utils';

const description = 'What is the result of the expression?';

const calcExpression = (n1, n2, operator) => {
  switch (operator) {
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return n1 + n2;
  }
};

const operations = ['+', '-', '*'];

const generateGameData = () => {
  const number1 = getRandom(1, 10);
  const number2 = getRandom(1, 10);
  const operator = operations[getRandom(0, operations.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calcExpression(number1, number2, operator);

  return (message) => {
    switch (message) {
      case 'answer':
        return String(answer);
      case 'question':
        return question;
      default:
        return null;
    }
  };
};

export default () => startGame(description, generateGameData);
