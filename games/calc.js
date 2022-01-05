import game, { challengesCount } from '../src/index.js';
import random from '../src/random.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const maxValue = 100;

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const a = random(maxValue);
    const b = random(maxValue);
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

export default () => game(description, generator(challengesCount));
