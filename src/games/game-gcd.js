import startGame from '..';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const description = 'Find the greatest common divisor of given numbers.';

let answer = null;

const generateAnswer = (n1, n2) => {
  const [maxNum, minNum] = n1 > n2 ? [n1, n2] : [n2, n1].reverse();
  for (let divisor = minNum; divisor > 0; divisor -= 1) {
    if (minNum % divisor === 0 && maxNum % divisor === 0) {
      answer = String(divisor);
      break;
    }
  }
  return null;
};

const getQuestion = () => {
  const n1 = getRandom(1, 100);
  const n2 = getRandom(1, 100);
  generateAnswer(n1, n2);
  return `${n1} ${n2}`;
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
