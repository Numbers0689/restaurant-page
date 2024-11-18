export default function loadHome() {
    const homeDiv = document.createElement('div');

    const homeHead = document.createElement('div');
    homeHead.setAttribute('id', 'head');
    homeHead.innerHTML = `<h1>GREAT NEIGHBORS DESERVE GREAT FOOD.</h1> <button id="order">ORDER NOW</button>`;
    
    homeDiv.appendChild(homeHead);
    return homeDiv;
}