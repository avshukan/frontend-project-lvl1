import readlineSync from 'readline-sync';
import greetings from './games/greetings.js';

const maxPoints = 3;

const task = ({ question, correctAnswer }) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const result = correctAnswer === answer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return result;
};

export default (description, generator) => {
  const name = greetings();
  console.log(description);
  for (let pointsCounter = 0; pointsCounter < maxPoints; pointsCounter += 1) {
    if (!task(generator())) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
