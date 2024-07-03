const imagePanels = document.querySelectorAll('.image-panels');

const arrowForward = document.getElementById('btn-forward');
const arrowBack = document.getElementById('btn-back');
let currentImage = 0;

function hideImages() {
    imagePanels.forEach(image => {
        image.classList.remove('show')
    });
}

function showImage() {
    imagePanels[currentImage].classList.add('show')
}


arrowForward.addEventListener('click', function () {


    const totalImage = imagePanels.length - 1;
    if (currentImage === totalImage) {
        return;
    }

    currentImage++;

    hideImages();
    showImage();
})

arrowBack.addEventListener('click', function () {

    if (currentImage === 0) {
        return;
    }
    currentImage--;

    hideImages();
    showImage();

})
