const calculate = (expression) => {
  const [firstNum, operator, secondNum] = expression.split(' ');
  switch (operator) {
    case '+':
      return String(Number(firstNum) + Number(secondNum));
    case '-':
      return String(Number(firstNum) - Number(secondNum));
    case '*':
      return String(Number(firstNum) * Number(secondNum));
    default:
      return null;
  }
};

const getDescription = () => 'What is the result of the expression?';

const getQuestion = (getRandom) => {
  const firstNum = getRandom(1, 10);
  const secondNum = getRandom(1, 10);
  const operations = ['+', '-', '*'];
  const operator = operations[getRandom(0, operations.length - 1)];
  return `${firstNum} ${operator} ${secondNum}`;
};

const getAnswer = question => calculate(question);

export default (fn, arg) => {
  switch (fn) {
    case 'getDescription':
      return getDescription();
    case 'getQuestion':
      return getQuestion(arg);
    case 'getAnswer':
      return getAnswer(arg);
    default:
      return null;
  }
};
