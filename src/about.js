export default function loadAbout() {
    const homeDiv = document.createElement('div');

    const homeHead = document.createElement('div');
    homeHead.setAttribute('id', 'head');
    homeHead.innerHTML = `<h1>WE SELL WHAT EVERYONE WANTS TO EAT.</h1>`;
    
    homeDiv.appendChild(homeHead);
    return homeDiv;
}