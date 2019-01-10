import { setupEl } from '../helpers.js';
import { ScoreDisplay } from './scoreDisplay.js';

const Farewell = () => {
	const section = setupEl('div', 'farewellDiv');
	const headline = setupEl('h2', null, 'farewell', ScoreDisplay.scoreData.total
		? `Great Job! You scored ${ScoreDisplay.scoreData.total} Points!!`
		: 'Thanks for Playing - we hope it helped!');
	const textContent = setupEl('p', null, 'farewell', ScoreDisplay.scoreData.total
		? `Way to go, and good job keeping track of your progress. We hope that you come back and try again, and accumulate even more than the ${ScoreDisplay.scoreData.total} points you earned this time.`
		: 'We hope you have enjoyed this little game, and that it has been helpful in matching the names with the faces of your fellow WillowTree employees.  Next time, we suggest you keep score and quantify the progress you have made!');

	section.appendChild(headline);
	section.appendChild(textContent);
	return section;
};

export default Farewell;
