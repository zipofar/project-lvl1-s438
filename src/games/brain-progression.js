import startGame from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const generateProgression = (count) => {
  const period = getRandom(1, 10);
  let number = getRandom(1, 10);
  const progression = [];

  for (let i = 0; i < count; i += 1) {
    progression[i] = number;
    number += period;
  }
  return progression;
};

const generateGameData = () => {
  const countNumbers = 10;
  const progression = generateProgression(countNumbers);
  const missedIndex = getRandom(0, countNumbers - 1);
  const question = progression.map((e, i) => (i === missedIndex ? '...' : e)).join(' ');
  const answer = progression[missedIndex];

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
