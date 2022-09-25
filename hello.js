// This app will...

// slides in BIOL 112
const slide1 = 1;
const slide2 = 2;
const slide3 = 3;
const slide4 = 4;
const slide5 = 5;
const slide6 = 6;
const slide7 = 7;
const slide8 = 8;
const slide9 = 9;
const slide10 = 10;
const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];
console.log("BIOL 112: " + slides);

// user adds topics
const cells = "cells";
const ecosystem = "ecosystem";
let cellsSlides = []
let ecoSlides = []

// user adds slides 1-5 into topic "cells"
// user adds slides 6-10 into topic "ecosystem"
cellsSlides.push(slide1, slide2, slide3, slide4, slide5);
//console.log("Topic Cells: " +  cellsSlides);
ecoSlides.push(slide6, slide7, slide8, slide9, slide10);
//console.log("Topic Ecosystem: " + ecoSlides);

// user adds learning objectives 1-4
const LO1 = "LO1";
const LO2 = "LO2";
const LO3 = "LO3";
const LO4 = "LO4";
let LO1Slides = []
let LO2Slides = []
let LO3Slides = []
let LO4Slides = []

// user adds slides 2-3 to learning objective 1
LO1Slides.push(slide2, slide3);
// user adds slides 4-5 to LO2;
LO2Slides.push(slide4, slide5);
// user adds slides 6-8 to LO3
LO3Slides.push(slide6, slide7, slide8);
// user adds slides 8-9 to LO4
LO4Slides.push(slide8, slide9);


// user filters slides to show topic "cells"
var showSlides = [];
showSlides.push(cellsSlides);
console.log("Topic " + cells + ": " +  showSlides);

// user clears previous filters and filters LO3 and LO4
var showSlides = [];
showSlides.push(LO3Slides);
console.log("LO3: " + showSlides);
console.log("LO4: " + LO4Slides);
for (i=0;i<LO4Slides.length;i++) {
    if (LO3Slides.includes(LO4Slides[i])) {
        showSlides = showSlides;
    } else {
        showSlides.push(LO4Slides[i]);
    }
}
console.log("Learning Objectives " + LO3 + ", " + LO4 + ": " + showSlides)


// user filters slides to show certain topics and learning objectives
