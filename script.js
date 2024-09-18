const root = document.getElementById("root")
import { generateNav } from "./navbar.js";
const respScreen = window.matchMedia("(max-width:1000px)");

generateNav();

const container = document.createElement("div");
container.id = "container";
root.appendChild(container);

const leftDiv = document.createElement("div");
leftDiv.classList = "inner-divs";
leftDiv.id = "text-div";
container.appendChild(leftDiv);

const rightDiv = document.createElement("div");
rightDiv.classList = "inner-divs";
container.appendChild(rightDiv);

const title = document.createElement("h1");
title.classList = "title";
title.textContent = "Make remote work";
leftDiv.appendChild(title);

const subtitle = document.createElement("p");
subtitle.classList = "subtitle";
subtitle.textContent = "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.";
leftDiv.appendChild(subtitle);

const learnBtn = document.createElement("button");
learnBtn.classList = "learn-btn";
learnBtn.textContent = "Learn more";
leftDiv.appendChild(learnBtn);

const quilt = document.createElement('div');
quilt.classList = "quilt";
leftDiv.appendChild(quilt);

const first = document.createElement('img');
first.classList = "imgs";
first.src = './images/client-databiz.svg';
quilt.appendChild(first);

const second = document.createElement('img');
second.classList = "imgs";
second.src = './images/client-audiophile.svg';
quilt.appendChild(second);

const third = document.createElement('img');
third.classList = "imgs";
third.src = './images/client-meet.svg';
quilt.appendChild(third);

const fourth = document.createElement('img');
fourth.classList = "imgs";
fourth.src = './images/client-maker.svg';
quilt.appendChild(fourth);

const heroImg = document.createElement('img');
heroImg.src = './images/image-hero-desktop.png';
heroImg.classList = 'hero-img';
rightDiv.appendChild(heroImg);





const responsiveImg = (respScreen) => {
    if (respScreen.matches) {
        heroImg.src = './images/image-hero-mobile.png';
    } else {
        heroImg.src = './images/image-hero-desktop.png';
       
    }
}

responsiveImg(respScreen);

respScreen.addEventListener("change", ()=>{
    responsiveImg(respScreen);
});


