const url = 'https://wttr.in/haarlem?format=+%c+%t 💧%p %w';

const getWeather = () => {
	const req = new XMLHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState === XMLHttpRequest.DONE) {
			if (req.readyState == 4 && req.status == '200') {
				const weather = document.getElementById('weather');
				weather.innerHTML = req.response;
			}
		}
	};
	req.open('GET', url, true);
	req.send();
}

const loadJSON = (callback) => {
	var req = new XMLHttpRequest();
	req.overrideMimeType('application/json');
	req.open('GET', 'quotes.json', true);
	req.onreadystatechange = function () {
		if (req.readyState === XMLHttpRequest.DONE) {
			if (req.readyState == 4 && req.status == '200') {
				callback(req.responseText);
			}
		}
	};
	req.send(null);
}

const setCat = () => {
	let a = Math.floor(Math.random() * 2);
	document.getElementById('cat').src = `gifs/${a}.webp`;
}

const setGreeting = () => {
	let element = document.getElementById('title');
	var d = new Date();
	var time = d.getHours();

	if (time > 5 && time < 12) {
		element.innerHTML = 'Good morning!';
	}
	if (time > 12 && time < 18) {
		element.innerHTML = 'Good afternoon!';
	}
	if (time == 12) {
		element.innerHTML = 'Go eat lunch!';
	}
	if (time > 18 && time < 5) {
		element.innerHTML = 'Good Night!';
	}
}

setGreeting();
setCat();
getWeather();
loadJSON((response) => {
	// Parse JSON string into object
	var actual_JSON = JSON.parse(response);
	const randomElement =
		actual_JSON[Math.floor(Math.random() * actual_JSON.length)];
	document.getElementById('quote').innerHTML = randomElement.quote;
	document.getElementById('author').innerHTML =
		randomElement.author || randomElement.source;
});
