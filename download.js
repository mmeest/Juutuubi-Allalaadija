var button = document.createElement('button');
button.type = 'button';
button.innerHTML = '⇩';
button.classList.add('btn', 'btn-primary');
button.style.fontSize = '30px';
button.style.fontWeight = '600';
button.style.zIndex = '9999'; // Määrame nupu z-indeksi väärtuseks 9999
button.style.width = '50px';
button.style.height = '50px';
button.style.margin = '15px';
button.style.backgroundColor = 'LawnGreen';
button.style.color = 'Black';
button.style.borderRadius = '50%';
button.style.position = 'fixed';
button.style.top = '10px';
button.style.left = '10px';

button.onclick = function() {
	var currentURL = window.location.href;
  // Kontrollime Regular Expressioni abil linki
	var youtubePattern = /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=/;

	if (youtubePattern.test(currentURL)) {
	// Tegemist on YouTube'i videoleheküljega
	console.log("Tegemist on YouTube'i videoleheküljega");
  
	// Loome download lingi
	var modifiedURL = currentURL.replace("youtube.com", "youtubepi.com");

	// Avame loodud lingi uues aknas
	window.open(modifiedURL, "_blank");
	} else {
	// Ei ole YouTube'i videolehekülg
	alert("Ei ole YouTube'i videolehekülg");
	console.log("Ei ole YouTube'i videolehekülg");
	}
};

var body = document.getElementsByTagName('body')[0]; // Valime esimese body elemendi
body.appendChild(button);
