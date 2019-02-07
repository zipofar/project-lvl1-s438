import startGame from '..';
import getRandom from '../utils';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateGameData = () => {
  const question = getRandom(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';

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
