import { ScoreDisplay } from './scoreDisplay.js';

const Farewell = () => {
	const section = document.createElement('div');
	const headline = document.createElement('h2');
	const textContent = document.createElement('p');
	if (ScoreDisplay.scoreData.total === 0) {
		section.id = 'farewellDiv';
		headline.innerText = 'Thanks for Playing - we hope it helped!';
		textContent.innerText = 'We hope you have enjoyed this little game, and that it has been helpful in matching the names with the faces of your fellow WillowTree employees.  Next time, we suggest you keep score and quantify the progress you have made!';
		section.appendChild(headline);
		section.appendChild(textContent);
		return section;
	}
	section.id = 'farewellDiv';
	headline.innerText = `Great Job! You scored ${ScoreDisplay.scoreData.total} Points!!`;
	textContent.innerText = `Way to go, and good job keeping track of your progress. We hope that you come back and try again, and accumulate even more than the ${scoreData.total} points you earned this time.`;
	section.appendChild(headline);
	section.appendChild(textContent);
	return section;
};

export default Farewell;
