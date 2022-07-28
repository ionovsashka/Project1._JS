const button = document.querySelector('#submit');
button.addEventListener("click", function () {
	const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	let hexcode1 = "";
	let hexcode2 = "";
	let randomIndex = 0;
	for (i = 0; i < 6; i++) {
		randomIndex = Math.floor(Math.random() * colors.length);
		hexcode1 += colors[randomIndex];
		randomIndex = Math.floor(Math.random() * colors.length);
		hexcode2 += colors[randomIndex];
	}
	document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
	document.querySelector("#hexcode1").textContent = hexcode1;
	document.querySelector("#hexcode2").textContent = hexcode2;
});
