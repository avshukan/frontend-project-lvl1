import cli from './cli.js';
import task from './task.js';

export const challengesCount = 3;

export default (description, challenges) => {
  const name = cli();
  console.log(description);
  for (let pointsCounter = 0; pointsCounter < challenges.length; pointsCounter += 1) {
    const challenge = challenges[pointsCounter];
    const result = task(challenge);
    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
