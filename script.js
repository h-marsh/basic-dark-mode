'use strict';
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

const imageMode = function (mode) {
	image1.src = `img/undraw_proud_coder_${mode}.svg`;
	image2.src = `img/undraw_feeling_proud_${mode}.svg`;
	image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
};

const toggleMode = function (isLight) {
	nav.style.backgroundColor = isLight
		? 'rgb(255 255 255 / 50%)'
		: 'rgb(0 0 0 / 50%)';
	textBox.style.backgroundColor = isLight
		? 'rgb(0 0 0 / 50%)'
		: 'rgb(255 255 255 / 50%)';
	toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
	isLight
		? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
		: toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
	isLight ? imageMode('light') : imageMode('dark');
};

const switchTheme = function (event) {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		toggleMode(false);
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		toggleMode(true);
	}
};

toggleSwitch.addEventListener('change', switchTheme);

// get theme from localstorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
		toggleMode(false);
	}
}
