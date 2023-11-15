function fadeInPage(duration) {
    const body = document.body;
    body.style.opacity = 0;
    body.style.display = "block";
    let startTime = null;

    function animate(time) {
        if (!startTime) {
            startTime = time;
        }

        const progress = (time - startTime) / duration;
        body.style.opacity = Math.min(progress, 1);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function fadeOutPage(duration) {
    const body = document.body;
    body.style.opacity = 1;
    let startTime = null;

    function animate(time) {
        if (!startTime) {
            startTime = time;
        }

        const progress = (time - startTime) / duration;
        body.style.opacity = 1 - Math.min(progress, 1);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            body.style.display = "none";
        }
    }

    requestAnimationFrame(animate);
}

fadeInPage(2000); // 2000 milissegundos = 2 segundos
// fadeOutPage(1000); // 1000 milissegundos = 1 segundo

const carouselWrapper = document.getElementById('carousel-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselWrapper.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    carouselWrapper.style.transform = `translateX(${newTransformValue})`;
}

let currentIndex2 = 0;
const items2 = document.querySelectorAll('.carousel-item-2');
const totalItems2 = items2.length;
const container2 = document.getElementById('carousel-wrapper-2');

document.getElementById('nextBtn-2').addEventListener('click', () => {
    if (currentIndex2 < totalItems2 - 1) {
        currentIndex2++;
    } else {
        currentIndex2 = 0;
    }
    updateCarousel2();
});

document.getElementById('prevBtn-2').addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
    } else {
        currentIndex2 = totalItems2 - 1;
    }
    updateCarousel2();
});

function updateCarousel2() {
    const newTransformValue = -currentIndex2 * 100 + '%';
    container2.style.transform = 'translateX(' + newTransformValue + ')';
}
