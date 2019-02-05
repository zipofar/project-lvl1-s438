import startGame from '..';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const description = 'What is the result of the expression?';

let answer = null;

const generateAnswer = (n1, n2, operator) => {
  switch (operator) {
    case '+':
      answer = String(n1 + n2);
      break;
    case '-':
      answer = String(n1 - n2);
      break;
    case '*':
      answer = String(n1 * n2);
      break;
    default:
      answer = null;
  }
};

const getQuestion = () => {
  const firstNum = getRandom(1, 10);
  const secondNum = getRandom(1, 10);
  const operations = ['+', '-', '*'];
  const operator = operations[getRandom(0, operations.length - 1)];
  generateAnswer(Number(firstNum), Number(secondNum), operator);
  return `${firstNum} ${operator} ${secondNum}`;
};

const game = (fn) => {
  switch (fn) {
    case 'getDescription':
      return description;
    case 'getQuestion':
      return getQuestion();
    case 'getAnswer':
      return answer;
    default:
      return null;
  }
};

export default () => startGame(game);
