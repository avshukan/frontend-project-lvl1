import game from './game.js';

const random = (max, min = 0) => min + Math.floor(Math.random() * (max - min + 1));

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const length = random(15, 5);
    const start = random(100, -100);
    const step = random(10, -10);
    const array = [...Array(length).keys()].map((item) => start + item * step);
    const key = random(length - 1);
    const question = array.map((value, index) => ((index === key) ? '..' : value)).join(' ');
    const correctAnswer = array[key].toString();
    result.push({ question, correctAnswer });
  }
  return result;
};

export default () => {
  const challenges = generator(3);
  game(challenges);
};
