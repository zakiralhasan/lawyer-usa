const img1 = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnFsukZ2jJuUV2DrCQni9-H-sFLFCNbUGSl-RgBC1WY3gnlK-suUJ3xIDOVGcryqSMEl8oJzR3zHD4vG8qvxEMxnWUMircK8kh8uzayV-6S_ywQ-opf0YQcrHyX4V7d0aWBY9A4DyaDa5DbSizW7m5LRewYj-WqPTd793x9qLzW0oe1TtISAs1JOGZHqQq/w640-h360/banner-0.jpg';
const img2 = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhorAYpjaZDuYn-qxLPhSr1ExfElqG-SJpct40gT_VPnMz0FdBMBhzhltGT-IeLku1z8xvn45r1XK5_XpIRyoAfeU9FONTzuIcV5mtNKX2YPI8dnTVYDIC1SFKHT5Nw2_0NTAxUqS5o3BLrtsA5e4zZWTEbhLCIMXjv_VvutOcae_x--8u8iL_0PTaVop1A/w640-h360/banner-1.jpg';
const img3 = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjww75LwahUQQDn6hmZalQ6I8U30P7g9Lwh9ZppmtXYvNG8u0YGkppS4c4J_QDDWP2W32PmKumk30SRT61q0RjViH-_IFTtfNGEBmxPtkjPIkkaOF-tJxT479sh49aY8IW-fmIzhKA8qcE3F521HjfYvZECuYWCi0g4vBzujW5SowESmvp8UZxaRmph28uz/w400-h225/banner-2.jpg';
const img4 = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEoEDvdMu2L6wxXuuJYfBI-qRCWPRCySmYnmIM6Ci0Mx2ep8o6fav4M0RKYpHfeaTETlUJle_uybgQ6kNIOgQ9LY7ImFlO9jAgFotb0suCDNGk96PMiyimwzkAhmuWJu3R3z3j2U7qcX9XQSMEOgDqnbgk8afDuJT2PcxOk-T4qb36dK2ZNR9DedH3OBTV/w400-h225/banner-3.jpg';
const img5 = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjy6wHoaHC4IvdjxRoykgR0Q0UkzgqJk9rjKYYLp_zFfn5UlV1sZTPKFLFY-6YFSmgRFU3gOadtKtXGm_HqKvlJMoEwDD9cpw81LaNHAFKq0K4Uo48Zm9OG9FNIWOGjw-FGZaUO_MQZo1WSQ7ftw0V3oPfJcqOWLfj_rz6KWV_ybPTz3Y3w334XK_PSxsh1/w400-h225/banner-4.jpg';

let i = 0;

const arrImage = [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnFsukZ2jJuUV2DrCQni9-H-sFLFCNbUGSl-RgBC1WY3gnlK-suUJ3xIDOVGcryqSMEl8oJzR3zHD4vG8qvxEMxnWUMircK8kh8uzayV-6S_ywQ-opf0YQcrHyX4V7d0aWBY9A4DyaDa5DbSizW7m5LRewYj-WqPTd793x9qLzW0oe1TtISAs1JOGZHqQq/w640-h360/banner-0.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhorAYpjaZDuYn-qxLPhSr1ExfElqG-SJpct40gT_VPnMz0FdBMBhzhltGT-IeLku1z8xvn45r1XK5_XpIRyoAfeU9FONTzuIcV5mtNKX2YPI8dnTVYDIC1SFKHT5Nw2_0NTAxUqS5o3BLrtsA5e4zZWTEbhLCIMXjv_VvutOcae_x--8u8iL_0PTaVop1A/w640-h360/banner-1.jpg'
];

const imgSlider = document.getElementById('img-slider-section');
const arr = [img1, img2, img3, img4, img5]
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
    imgSlider.innerHTML = `<img src="${arr[i]}" alt="banner image">`
    i++;
}, 2500)


