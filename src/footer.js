export default function loadFooter() {
    const footer = document.createElement('footer');
    const info = document.createElement('div');
    info.setAttribute('id', 'fi');
    info.innerHTML = `<h2>Inside Pickup</h2>
                    <p>It's this easy. Just call ahead and tell us what you like and we'll give you a time when it will be ready for you to come in and pickup.</p>`;
    
    const grid = document.createElement('div');
    const req = document.createElement('div');
    const reqmail = document.createElement('div');
    
    grid.setAttribute('id', 'grid');
    req.setAttribute('id', 'req');
    reqmail.setAttribute('id', 'reqmail');

    req.innerHTML = `<h3> Any special requests from us?</h3>
                    <p>For urgent matters please call us</p>`;
    reqmail.innerHTML = `<form action="#">
                                <input type="text" placeholder="Full name">
                                <input type="email" placeholder="Email">
                                <textarea placeholder="Message"></textarea>
                                <p>You may receive marketing and promotional materials. Contact the merchant for their privacy practices.</p>
                                <button type="submit">Submit</button>
                        </form>`;
    
    grid.appendChild(req);
    grid.appendChild(reqmail);

    footer.appendChild(info);
    footer.appendChild(grid);

    return footer;
}