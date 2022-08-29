async function populateBio() {
    const request = new Request("../profile.json");
    const profile = await (await fetch(request)).json();

    document.getElementById('position-text').innerHTML = profile.position;

    let bioText = profile.bio.split(/\r?\n/);

    bioText.forEach(line => {
        let tag = document.createElement("p");
        let text = document.createTextNode(line);

        tag.appendChild(text);
        document.getElementById('description-text').appendChild(tag);
    });
}

let button = document.querySelector('#contact-button');

button.addEventListener('click', () => {
    document.location.href = 'mailto:kenya.chan+SiteContact@gmail.com';
});

populateBio();