export default function loadMenu() {
    const Div = document.createElement('div');

    const homeHead = document.createElement('div');
    homeHead.setAttribute('id', 'head');
    homeHead.innerHTML = `<h1>MENU</h1>`;
    
    Div.appendChild(homeHead);
    return Div;
}