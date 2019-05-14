var colorOne, colorTwo, input, backgroundColors, backgroundText;

colorOne = document.querySelector('.colorOne');
colorTwo = document.querySelector('.colorTwo');
input = document.querySelector('input');
backgroundColors = document.querySelector('h3');
backgroundText = document.createTextNode(`${colorOne.value} & ${colorTwo.value}`)
backgroundColors.appendChild(backgroundText);

colorOne.addEventListener("input", changeColor);
colorTwo.addEventListener("input", changeColor);

function changeColor() {
	document.body.style = `background: linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
	backgroundColors.removeChild(backgroundText);
	backgroundColors.appendChild(checkColor());
}
function checkColor() {
	backgroundText = document.createTextNode(`${colorOne.value} & ${colorTwo.value}`)
	return backgroundText;
}