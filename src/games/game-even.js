import startGame from '..';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

let answer = null;

const generateAnswer = (question) => {
  answer = isEven(question) ? 'yes' : 'no';
};

const getQuestion = () => {
  const question = getRandom(1, 20);
  generateAnswer(question);
  return question;
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
