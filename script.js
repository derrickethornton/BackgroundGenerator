let colorOne, colorTwo, input, backgroundColorInfo, backgroundTextNode;

colorOne = document.querySelector('.colorOne');
colorTwo = document.querySelector('.colorTwo');
input = document.querySelector('input');
backgroundColorInfo = document.querySelector('h3');
backgroundTextNode = document.createTextNode(`${colorOne.value} & ${colorTwo.value}`)
backgroundColorInfo.appendChild(backgroundTextNode);

const changeColor = () => {
	document.body.style = `background: linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
	backgroundColorInfo.removeChild(backgroundTextNode);
	backgroundColorInfo.appendChild(checkColor());
}
const checkColor = () => {
	backgroundTextNode = document.createTextNode(`${colorOne.value} & ${colorTwo.value}`)
	return backgroundTextNode;
}

colorOne.addEventListener("input", changeColor);
colorTwo.addEventListener("input", changeColor);
