function fadeInPage(duration) {
    const body = document.body; //Pega body do html e transforma em variavel JS
    body.style.opacity = 0; //Deixca opacidade 0
    body.style.display = "block"; //Deixa para ocupar toda a largura do navegador disponivel
    let startTime = null; //Comeca o tempo do start como NULL

    function animate(time) { //Cria uma funcao que faz animacao
        if (!startTime) { //Se for vazio
            startTime = time; //Atribui valor de time
        }

        const progress = (time - startTime) / duration; //Calcula o tempo do progresso da animacao, tempo de progresso = tempo q demora para realizar animacao
        body.style.opacity = Math.min(progress, 1); //Define o tamanho maximo da opacidade como 1 e o valor como o tempo da progressao

        if (progress < 1) { //Se for menor ou igual a 1
            requestAnimationFrame(animate); //Inicia um loop de 60x ( q eh 60 hz ) chamando a funcao animate. FAZ ISSO ATE ATINGIR 1, se parar antes de 60, tudo bem tb
        }
    }

    requestAnimationFrame(animate); // Inicia um loop de 60x ( q eh 60 hz ) chamando a funcao animate. Fora de loop pois ela quem vai iniciar esse processo
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
            requestAnimationFrame(animate); // Realiza 60x 60FPS a funcao animate
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
    } else {
        currentIndex = 0; // Reset to the first item if at the last item
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselWrapper.children.length - 1; // Go to the last item if at the first item
    }
    updateCarousel();
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