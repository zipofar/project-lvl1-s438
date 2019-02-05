const getDescription = () => 'Find the greatest common divisor of given numbers.';

const getQuestion = (getRandom) => {
  const firstNum = getRandom(1, 100);
  const secondNum = getRandom(1, 100);
  return `${firstNum} ${secondNum}`;
};

const getAnswer = (question) => {
  const numbers = question.split(' ');
  const [maxNum, minNum] = numbers[0] > numbers[1] ? numbers : numbers.reverse();
  for (let divisor = minNum; divisor > 0; divisor -= 1) {
    if (minNum % divisor === 0 && maxNum % divisor === 0) {
      return String(divisor);
    }
  }
  return null;
};

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
