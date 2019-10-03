import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.csv';
import Data2 from './data.xml';

function component() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], '-');
	element.classList.add('hello');

	// Add the image to our existing div.
	const myIcon = new Image();
	console.log(myIcon);
	myIcon.src = Icon;
	myIcon.classList.add('image');

	element.appendChild(myIcon);

	console.log(Data);
	console.log(Data2);

	return element;
}

document.body.appendChild(component());
