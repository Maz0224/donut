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

```
stash2: [
    "stash2.1.png",
    "stash2.2.png",
    "stash2.3.png",
    "stash2.4.png",
    "stash2.5.png",
    "stash2.6.png",
    "stash2.7.png"
]
```

};

let currentStash = [];
let currentImage = 0;

function openViewer(image, stash = "stash1") {
currentStash = stashImages[stash];
currentImage = currentStash.indexOf(image);

```
if (currentImage === -1) {
    currentImage = 0;
}

updateViewer();

document.getElementById("viewer").style.display = "flex";
```

}

function updateViewer() {
document.getElementById("viewerImage").src = currentStash[currentImage];
}

function nextImage() {
currentImage++;

```
if (currentImage >= currentStash.length) {
    currentImage = 0;
}

updateViewer();
```

}

function previousImage() {
currentImage--;

```
if (currentImage < 0) {
    currentImage = currentStash.length - 1;
}

updateViewer();
```

}

function closeViewer() {
document.getElementById("viewer").style.display = "none";
}

document.addEventListener("keydown", function(event) {
if (document.getElementById("viewer").style.display !== "flex") {
return;
}

```
if (event.key === "Escape") {
    closeViewer();
}

if (event.key === "ArrowRight") {
    nextImage();
}

if (event.key === "ArrowLeft") {
    previousImage();
}
```

});
