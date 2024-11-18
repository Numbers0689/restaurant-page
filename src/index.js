import loadAbout from "./about";
import loadFooter from "./footer";
import loadHome from "./home";
import loadMenu from "./menu";
import './styles.css';

const content = document.getElementById('content');

function clrContent() {
    content.innerHTML = '';
}

function loadContent(loadFunc) {
    clrContent();
    content.appendChild(loadFunc());
    content.appendChild(loadFooter());
}

function init() {
    loadContent(loadHome);
    console.log(123);
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const aboutBtn = document.getElementById('aboutBtn');

    homeBtn.addEventListener('click', () => loadContent(loadHome));
    menuBtn.addEventListener('click', () => loadContent(loadMenu));
    aboutBtn.addEventListener('click', () => loadContent(loadAbout));
}

init();