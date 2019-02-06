import startGame from '..';
import { getRandom } from '../utils';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateDataGame = () => {
  const question = getRandom(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';

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
