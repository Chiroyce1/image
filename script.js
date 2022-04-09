let hash = location.href.split("#")[1];
let loadBtn = document.querySelector('#load');
let input = document.querySelector('#url')

if (hash) {
    // If the link is using the older version
    // Redirect them to the new one
    location.replace(`/image/?${hash}`)
}

const search = location.search.substring(1);
let body = document.body; // Gets the location.search, and then removes the first character

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
    loadBtn.addEventListener("click", function () {
        let elem = input.value.split(".");
        let elea = input.value.substring(8).split("/");
        if (elem[0].substring(8) === "assets" && elem[1] === "scratch" && elem[2] === "mit" && elem[3].split("/")[0] === "edu") {
            let assign = 1;
            if (elea[1] == "get_image")
                assign = 3;
            location.assign(`?${elea[assign]}`);
        } else {
            document.getElementById("error").innerText = "This URL doesn't seem to be a URL to Scratch Assets.";
        }
    })
}
