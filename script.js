const search = location.search.substring(1); // Gets the location.search, and then removes the first character

(function() {
    if (!search) return; // if the search empty, then it stops.

    // image
    let image = document.createElement("img");
    image.src = `https://assets.scratch.mit.edu/get_image/../${search}`;
    image.style.backgroundColor = "white";
    image.style.maxWidth = "100%";
    image.style.margin = "auto";
    image.style.minWidth = "100px";
    image.style.height = "auto";

    // title
    document.title = search + " - View";

    // body
    document.body.innerHTML = ""
    document.body.style.margin = 0;
    document.body.style.backgroundColor = "black";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";
    document.body.appendChild(image);
})()

function loadURL(element) {
    let elem = element.value.split(".");
    if (elem[0].substring(8) === "assets" && elem[1] === "scratch" && elem[2] === "mit" && elem[3].split("/")[0] === "edu")
        location.assign(`?${element.value.substring(8).split("/")[3]}`);
    else
        alert(`${element.value} doesn't seem to be a url to Scratch Assets`);
}