let hash = location.href.split("#")[1];

if (hash) {
    let image = document.createElement('img');
    document.body.style.margin = 0;
    document.body.style.backgroundColor = "black";
    image.src = `https://assets.scratch.mit.edu/get_image/.%2E/${hash}`;
    image.style.maxWidth = "100%";
    document.body.appendChild(image);
}
