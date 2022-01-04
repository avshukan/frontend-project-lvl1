import cli from './cli.js';
import task from './task.js';

export const challengesCount = 3;

export default (challenges) => {
  const name = cli();
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
