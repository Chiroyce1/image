const search = location.search.substring(1),
    body = document.body; // Gets the location.search, and then removes the first character

if (search) {
    // image
    let image = document.createElement("img");
    image.src = `https://assets.scratch.mit.edu/${search}`;
    image.style.backgroundColor = "white";
    image.style.maxWidth = "100%";
    image.style.margin = "auto";
    image.style.minWidth = "100px";
    image.style.height = "auto";

    // title
    document.title = search + " - view";

    // body
    body.innerHTML = ""
    body.style.margin = 0;
    body.style.backgroundColor = "black";
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    body.style.height = "100vh";
    body.appendChild(image);
} else {
    document.getElementById("url").addEventListener("change", function() {
        let elem = this.value.split(".");
        if (elem[0].substring(8) === "assets" && elem[1] === "scratch" && elem[2] === "mit" && elem[3].split("/")[0] === "edu")
            location.assign(`?${this.value.substring(8).split("/")[1]}`);
        else
            alert(`${this.value} doesn't seem to be a url to Scratch Assets`);
    })
}