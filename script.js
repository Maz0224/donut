const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png"
];

let currentImage = 0;

function openViewer(image) {
    currentImage = images.indexOf(image);

    if (currentImage === -1) {
        currentImage = 0;
    }

    updateViewer();

    document.getElementById("viewer").style.display = "flex";
}

function updateViewer() {
    document.getElementById("viewerImage").src = images[currentImage];
}

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    updateViewer();
}

function previousImage() {
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

document.addEventListener("mousemove", function(event) {
document.body.style.setProperty("--mouse-x", event.clientX + "px");
document.body.style.setProperty("--mouse-y", event.clientY + "px");
});
