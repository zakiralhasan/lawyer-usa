const img1 = './images/banner/banner-0.jpg';
const img2 = './images/banner/banner-1.jpg';
const img3 = './images/banner/banner-2.jpg';
const img4 = './images/banner/banner-3.jpg';
const img5 = './images/banner/banner-4.jpg';
let i = 0;

const arrImage = [img1, img2, img3, img4, img5];

const imgSlider = document.getElementById('img-slider-section');
// const leftArrowBtn = document.getElementById('left-arrow');
// const rightArrowBtn = document.getElementById('right-arrow');


// leftArrowBtn.addEventListener('click', () => {
//     imgSlider.innerHTML = `<img src="./images/banner/banner-${i}.jpg" alt="banner image">`
//     if (i > 0 && i < arrImage.length) {
//         i--;
//         console.log('left clicked', i)
//     }
//     return
// })
// rightArrowBtn.addEventListener('click', () => {
//     imgSlider.innerHTML = `<img src="./images/banner/banner-${i}.jpg" alt="banner image">`
//     if (i >= 0 && i < arrImage.length - 1) {
//         i++;
//         console.log('right clicked', i)
//     }
//     return
// })

setInterval(() => {
    if (i >= 5) i = 0;
    imgSlider.innerHTML = `<img src="./images/banner/banner-${i}.jpg" alt="banner image">`
    i++;
}, 2500)

