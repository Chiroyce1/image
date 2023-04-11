let hash = location.href.split("#")[1];
let loadBtn = document.querySelector('#load');
let input = document.querySelector('#url');

if (hash) {
    // If the link is using the older version, redirect them to the new one
    location.replace(`/image/?${hash}`);
}

const encode = (arg) => arg.replace(/\d/g, (n) => String.fromCharCode(103 + Number(n)));
const decode = (arg) => arg.replace(/[e-p]/g, (s) => s.codePointAt(0) - 103);

const search = location.search.substring(1);
let body = document.body;

if (search) {
    // image
    let image = document.createElement("img");
    const decoded = decode(search);
    image.src = `https://assets.scratch.mit.edu/${search}`;
    image.style.backgroundColor = "white";
    image.style.maxWidth = "100%";
    image.style.margin = "auto";
    image.style.minWidth = "100px";
    image.style.height = "auto";

    // title
    document.title = `${search} Assets Image Viewer`;

    // body
    body.innerHTML = "";
    body.style.margin = 0;
    body.style.backgroundColor = "black";
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    body.style.height = "100vh";
    body.appendChild(image);
} else {
    loadBtn.addEventListener("click", () => {
        let url;

        try {
            url = new URL(input.value);
        } catch (e) {
            document.getElementById("error").innerText = "Invalid URL";
            return;
        }

        if (url.origin === "https://assets.scratch.mit.edu") {
            location.assign(`?${encode(url.assign)}`);
        } else {
            document.getElementById("error").innerText = "This URL doesn't seem to be a URL to Scratch Assets.";
        }
    })
}
