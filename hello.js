// This app will...

// slides in BIOL 112
const slide1 = [1];
const slide2 = [2];
const slide3 = [3];
const slide4 = [4];
const slide5 = [5];
const slide6 = [6];
const slide7 = [7];
const slide8 = [8];
const slide9 = [9];
const slide10 = [10];
const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];
console.log(slides);

// user adds topics to slides

// user filters slides to show topic "cells"
let showSlides = []
for (let i = 0; i < 10; i++) {
    let checkSlide = slides[i];
    if (checkSlide.includes("cells")) {
        showSlides.push(slides[i]);
    }
}
console.log(showSlides);
console.log(slides[1]);
console.log(slides);
//LO1 = [2,4,6]

// user adds learning objective to slides

// user filters slides to show certain topics and learning objectives
