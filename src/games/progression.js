import startGame from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const generateProgression = (count, period, startNumber) => {
  const progression = [];
  for (let i = 0; i < count; i += 1) {
    progression[i] = startNumber + period * i;
  }
  return progression;
};

const countNumbers = 10;

const generateGameData = () => {
  const period = getRandom(1, 10);
  const startNumber = getRandom(1, 10);
  const progression = generateProgression(countNumbers, period, startNumber);
  const hiddenIndex = getRandom(0, countNumbers - 1);
  const question = progression.map((e, i) => (i === hiddenIndex ? '...' : e)).join(' ');
  const answer = progression[hiddenIndex];

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
