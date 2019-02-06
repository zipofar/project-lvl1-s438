import startGame from '..';
import { getRandom } from '../utils';

const description = 'What is the result of the expression?';

const parse = (exp) => {
  const [n1, operator, n2] = exp.split(' ');
  return [Number(n1), Number(n2), operator];
};

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

const getQuestion = (operations) => {
  const firstNum = getRandom(1, 10);
  const secondNum = getRandom(1, 10);
  const operator = operations[getRandom(0, operations.length - 1)];
  return `${firstNum} ${operator} ${secondNum}`;
};

const operations = ['+', '-', '*'];

const generateDataGame = () => {
  const question = getQuestion(operations);
  const answer = calcExpression(...parse(question));

  return (message) => {
    switch (message) {
      case 'answer':
        return answer;
      default:
        return question;
    }
  };
};

export default () => startGame(description, generateDataGame);
