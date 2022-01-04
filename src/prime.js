import game from './game.js';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const question = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    result.push({ question, correctAnswer });
  }
  return result;
};

export default () => {
  const challenges = generator(3);
  game(challenges);
};
