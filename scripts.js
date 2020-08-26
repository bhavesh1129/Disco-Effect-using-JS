const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const white = document.querySelector(".white");
const indigo = document.querySelector(".indigo");

const center = document.querySelector(".center");

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.backgroundColor = color;
    });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(yellow, getBGColor(yellow));
magicColorChanger(blue, getBGColor(blue));
magicColorChanger(green, getBGColor(green));
magicColorChanger(white, getBGColor(white));
magicColorChanger(indigo, getBGColor(indigo));