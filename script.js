const stashImages = {
stash1: [
"1.png",
"2.png",
"3.png",
"4.png",
"5.png",
"6.png",
"7.png"
],

stash2: [
"stash2.1.png",
"stash2.2.png",
"stash2.3.png",
"stash2.4.png",
"stash2.5.png",
"stash2.6.png",
"stash2.7.png"
]
};

let currentStash = "stash1";
let currentImage = 0;

function openViewer(image, stash) {
if (!stashImages[stash]) {
return;
}

currentStash = stash;
currentImage = stashImages[stash].indexOf(image);

if (currentImage < 0) {
currentImage = 0;
}

updateViewer();

document.getElementById("viewer").style.display = "flex";
}

function updateViewer() {
const images = stashImages[currentStash];

document.getElementById("viewerImage").src = images[currentImage];
}

function nextImage() {
const images = stashImages[currentStash];

currentImage++;

if (currentImage >= images.length) {
currentImage = 0;
}

updateViewer();
}

function previousImage() {
const images = stashImages[currentStash];

currentImage--;

if (currentImage < 0) {
currentImage = images.length - 1;
}

updateViewer();
}

function closeViewer() {
document.getElementById("viewer").style.display = "none";
}

document.addEventListener("keydown", function(event) {
const viewer = document.getElementById("viewer");

if (viewer.style.display !== "flex") {
return;
}

if (event.key === "Escape") {
closeViewer();
}

if (event.key === "ArrowRight") {
nextImage();
}

if (event.key === "ArrowLeft") {
previousImage();
}
});
