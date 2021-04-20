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

let a = Math.floor(Math.random() * 2);
document.getElementById('cat').src = `gifs/${a}.webp`;

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', 'quotes.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

const url = 'http://wttr.in/haarlem?format=+%c+%t 💧%p %w';

function getman() {
  const req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    console.log('aaaaa');
    if (req.readyState === XMLHttpRequest.DONE) {
      console.log(req.response);
      const weather = document.getElementById('weather');
      weather.innerHTML = req.response;
    }
  };
  req.open('GET', url, true);
  req.send();
}

const links = [
  [
    { title: 'AAAAAA', href: 'https://www.google.com' },
    { title: 'testerino', href: 'https://youtube.com' },
  ],
];

function initializeList() {
  const allItems = loadList();
  console.log(allItems);
}

function saveList(allItems) {
  const itemStorageKey = 'items';
  localStorage.setItem(itemStorageKey, JSON.stringify(allItems));
}

function loadList() {
  const itemStorageKey = 'items';
  const storedData = localStorage.getItem(itemStorageKey) || '[]';
  return JSON.parse(storedData);
}
function renderlist() {
  const ul = document.getElementById('list');
  links.forEach((list) => {
    const unorderedList = document.createElement('ul');
    list.forEach((listItem) => {
      const newItem = document.createElement('li');
      const link = document.createElement('a');
      link.innerText = listItem.title;
      link.href = listItem.href;
      newItem.appendChild(link);
      unorderedList.appendChild(newItem);
    });
    ul.appendChild(unorderedList);
  });
}

initializeList();
// renderlist();
saveList(links);
getman();
loadJSON(function (response) {
  // Parse JSON string into object
  var actual_JSON = JSON.parse(response);
  const randomElement =
    actual_JSON[Math.floor(Math.random() * actual_JSON.length)];
  console.log(actual_JSON);
  document.getElementById('quote').innerHTML = randomElement.quote;
  document.getElementById('author').innerHTML =
    randomElement.author || randomElement.source;
});

// switch (a) {
// 	case 0:
// 		console.log(a);
// 		document.getElementById('cat').src =
// 			`gifs/${a}.gif`;
// 		break;
// 	case 1:
// 		console.log(a);
// 		document.getElementById('cat').src =
// 			'gifs/2.webp';
// 		break;
// }

//https://media.giphy.com/media/YYwfMYBALrofC/giphy.gif
//https://media.giphy.com/media/KrRktL6SAUzE4/giphy.gif
