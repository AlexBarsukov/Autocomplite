function autocomp(input) {
	var reg = new RegExp("^" + input.split('').join('\\w*'), 'i');
	return arrKladr.filter(function (arrKladr) {
		if (arrKladr.City.match(reg)) {
			return arrKladr.City;
		}
	});
}

var matchCities = [];
function inputchange(input) {
	matchCities = autocomp(input);
	var element = document.getElementById('searchResult');
    var style_elem = document.getElementById('error');
	element.innerHTML = ' ';
	var newLi = document.createElement('li');
	if (matchCities.length == 0) {
        // style_elem.innerHTML="input:focus {border: 3px solid red !important; }";
        // style_elem.appendChild(newLi);
		newLi.innerHTML = "<li class='liClass' id='er'>Не найдено</li>";
		element.appendChild(newLi);
	}
	else {


		for (i = 0; i < matchCities.length; i++) {
			newLi = document.createElement('li');
			newLi.innerHTML = "<li class='liClass' id='pr' onmousedown=d(this)>" + matchCities[i].City + "</li>";
			element.appendChild(newLi);
			//проверка на дочерние элементы соответствующих указанному имени класса.

		}

	}
}

function d(val) {
	var elementLi = document.getElementById('autocompValue');
	elementLi.value = val.innerHTML
}
function openBox(val) {
	display = document.getElementById("textBox").style.display;
	document.getElementById("textBox").style.display = 'block';

val.select();
	var errorText = document.getElementById("errorText");
	val.classList.remove("input-error");
	errorText.style.display = "none";
}

function hideBox() {
	display = document.getElementById("textBox").style.display;
	var autocompInput = document.getElementById("autocompValue");
	// autocompInput.onblur = this.classList.remove("focus-text");
	var errorText = document.getElementById("errorText");
	document.getElementById("textBox").style.display = 'none';
    if (matchCities.length == 0) {
        autocompInput.classList.add("input-error");
errorText.style.display = "block";
	}
    
}