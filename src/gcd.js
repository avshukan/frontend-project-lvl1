import game from './game.js';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  const [max, min] = (a > b) ? [a, b] : [b, a];
  if (max % min === 0) {
    return min;
  }
  return gcd(min, max % min);
};

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    const question = `${a} ${b}`;
    const correctAnswer = (gcd(a, b)).toString();
    result.push({ question, correctAnswer });
  }
  return result;
};

export default () => {
  const challenges = generator(3);
  game(challenges);
};
