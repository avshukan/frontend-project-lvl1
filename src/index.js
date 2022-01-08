import readlineSync from 'readline-sync';

export const roundsCount = 3;

const task = ([question, correctAnswer]) => {
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

export default (description, rounds) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let roundsCounter = 0; roundsCounter < roundsCount; roundsCounter += 1) {
    if (!task(rounds[roundsCounter])) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
