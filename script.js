var colorOne, colorTwo, input;

colorOne = document.querySelector('.colorOne');
colorTwo = document.querySelector('.colorTwo');
input = document.querySelector('input');

colorOne.addEventListener("input", changeColor);

colorTwo.addEventListener("input", changeColor);

function changeColor() {
	document.body.style = `background: linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
}