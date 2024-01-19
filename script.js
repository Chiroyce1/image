let hash = location.href.split("#")[1];
let loadBtn = document.querySelector("#load");
let input = document.querySelector("#url");

if (hash) {
	// If the link is using the older version, redirect them to the new one
	location.replace(`/image/?${hash}`);
}

const encode = (arg) =>
	arg.toLowerCase().replace(/\d/g, (n) => String.fromCharCode(71 + Number(n)));
const decode = (arg) => arg.replace(/[G-P]/g, (s) => s.codePointAt(0) - 71);

const search = location.search.substring(1);

function onInput() {
	let url;

	try {
		url = new URL(input.value);
	} catch (e) {
		document.getElementById("error").innerText = "Invalid URL";
		return;
	}

	if (url.origin === "https://assets.scratch.mit.edu") {
		location.assign(`?${encode(url.pathname.slice(1))}`);
	} else {
		document.getElementById("error").innerText =
			"This URL doesn't seem to be a URL to Scratch Assets.";
	}
}

if (search) {
	// image
	let image = document.createElement("img");
	image.id = "img";
	const decoded = decode(search);
	image.src = `https://assets.scratch.mit.edu/${decoded}`;

	// title
	document.title = `Scratch Assets Image Viewer`;

	// body
	document.body.innerHTML = "";
	document.body.classList.add("view-img");
	document.body.appendChild(image);
} else {
	loadBtn.addEventListener("click", onInput);
	document.querySelector("#url").addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			onInput();
		}
	});
}
