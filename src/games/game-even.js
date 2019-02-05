const isEven = num => num % 2 === 0;

const getDescription = () => 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = getRandom => getRandom(1, 20);

const getAnswer = question => (isEven(question) ? 'yes' : 'no');

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
