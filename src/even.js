import game from './game.js';

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const question = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    result.push({ question, correctAnswer });
  }
  return result;
};

export default () => {
  const challenges = generator(3);
  game(challenges);
};
