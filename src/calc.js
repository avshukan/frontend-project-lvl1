import game from './game.js';

const operators = ['+', '-', '*'];

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    const question = `${a} ${operator} ${b}`;
    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = a + b;
        break;
      case '-':
        correctAnswer = a - b;
        break;
      case '*':
        correctAnswer = a * b;
        break;
      default:
    }
    result.push({ question, correctAnswer: correctAnswer.toString() });
  }
  return result;
};

export default () => {
  const challenges = generator(3);
  game(challenges);
};
