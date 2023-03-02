var currentImage = 0
var imagesIndex = [
    "./assets/gif.gif",
    "./assets/image.png",

]

function changeImage() {

    if (currentImage == imagesIndex.length)
    {
        currentImage = 0
    }
    document.getElementById("img-principal").src = imagesIndex[currentImage]
    currentImage++
}