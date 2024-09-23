document.querySelector('input[type="number"]').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9.]/g, '');
    this.value = this.value.replace(/[^0-9]/g, ''); 
  });
  

window.addEventListener('scroll', function() {
    const boton = document.getElementById('scrollup-btn');
    if (window.scrollY > 800) {
        boton.classList.add('show');
    } else {
        boton.classList.remove('show');
    }
});

document.getElementById('scrollup-btn').addEventListener('click', function() {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
});

const Panes = [
    {
        image: './assets/images/productos/AVY09756.jpeg',
        name: 'BLANCO',
        description: 'sin semillas',
        color: '#8FACE5'
    },
    {
        image: './assets/images/productos/AVY09686.jpeg',
        name: 'DOBLE INTEGRAL',
        description: '',
        color: '#819E71'
    },
    {
        image: './assets/images/productos/AVY09690.jpeg',
        name: 'SIN SAL',
        description: 'agregada',
        color: '#A9B0B6'
    },
    {
        image: './assets/images/productos/AVY09695.jpeg',
        name: 'TRADICIONAL',
        description: 'con semillas de girasol y lino',
        color: '#E3C167'
    },
    {
        image: './assets/images/productos/AVY09698.jpeg',
        name: 'ACTIVO',
        description: 'doble avena',
        color: '#8DB571'
    },
    {
        image: './assets/images/productos/AVY09704.jpeg',
        name: 'DOBLE SALVADO',
        description: 'sin semillas',
        color: '#BE8075'
    },
    {
        image: './assets/images/productos/AVY09706.jpeg',
        name: 'CALABAZA',
        description: 'con semillas de sésamo integral',
        color: '#DF9B6C'
    },
    {
        image: './assets/images/productos/AVY09714.jpeg',
        name: 'ZAPALLO Y CÚRCUMA',
        description: 'con semillas de sésamo',
        color: '#A46CA1'
    },
    {
        image: './assets/images/productos/AVY09730.jpeg',
        name: 'PASAS DE UVA',
        description: 'con semillas de chía',
        color: '#A28ED6'
    },
    {
        image: './assets/images/productos/AVY09737.jpeg',
        name: 'PAPA',
        description: '',
        color: '#545255'
    },
    {
        image: './assets/images/productos/AVY09772.jpeg',
        name: 'TRES HARINAS',
        description: 'integrales',
        color: '#DE72C4'
    },
    {
        image: './assets/images/productos/AVY09779.jpeg',
        name: 'MULTICEREAL',
        description: 'con semillas de chía, girasol, lino, quinoa y sésamo',
        color: '#E76471'
    },

]

const Cookies = [
    {
        image: './assets/images/productos/DSC00109.jpeg',
        name: 'NARANJA Y LINO',
        description: '',
        color: '#F17D51'
    },
    {
        image: './assets/images/productos/DSC00126.jpeg',
        name: 'LIMÓN Y CHÍA',
        description: '',
        color: '#E5C451'
    },
    {
        image: './assets/images/productos/DSC00245.jpeg',
        name: 'ALGARROBA Y LINO',
        description: '',
        color: '#85B38A'
    },
    {
        image: './assets/images/productos/DSC00306.jpeg',
        name: 'VAINILLA Y PASAS DE UVA',
        description: '',
        color: '#DC8299'
    },
]

const Pepas = [
    {
        image: './assets/images/Productos/DSC00328.jpeg',
        name: 'MEMBRILLO Y CHÍA',
        description: '',
        color: '#CC5754'
    },
    {
        image: './assets/images/Productos/DSC00272.jpeg',
        name: 'ALGARROBA Y MEMBRILLO',
        description: '',
        color: '#735DA4'
    },
    {
        image: './assets/images/Productos/DSC00355.jpeg',
        name: 'BATATA Y CHÍA',
        description: '',
        color: '#D2A272'
    },
]

const Veganitas = [
    {
        image: './assets/images/Productos/10-DSC05734.jpg',
        name: 'ALGARROBA Y NUEZ',
        description: '',
        color: '#B85719'
    },
    {
        image: './assets/images/Productos/9-DSC05718.jpg',
        name: 'LIMÓN Y CHÍA',
        description: '',
        color: '#D5C800'
    },
    {
        image: './assets/images/Productos/18-DSC05703.jpg',
        name: 'COCO Y AVENA',
        description: '',
        color: '#2C89DA'
    },
    {
        image: '',
        name: 'MANZANA Y GRANOLA',
        description: '',
        color: '#F44A41'
    },
]

let currentPanIndex = 0;
let currentCookieIndex = 0;
let currentPepaIndex = 0;
let currentVeganitaIndex = 0;


function nextProduct(productsArray, currentIndex) {
    return (currentIndex + 1) % productsArray.length;
}

function previousProduct(productsArray, currentIndex) {
    return (currentIndex - 1 + productsArray.length) % productsArray.length;
}


function updateProduct(containerSelector, titleSelector, descriptionSelector, productsArray, currentIndex) {
    const container = document.querySelector(containerSelector);
    const title = document.querySelector(titleSelector);
    const description = document.querySelector(descriptionSelector);

   
    title.textContent = productsArray[currentIndex].name;
    description.textContent = productsArray[currentIndex].description;
    container.style.backgroundImage = `url(${productsArray[currentIndex].image})`;

    title.style.color = productsArray[currentIndex].color;
}


updateProduct('.pan-container', '.pan-title', '.pan-description', Panes, currentPanIndex);
updateProduct('.cookie-container', '.cookie-title', '.cookie-description', Cookies, currentCookieIndex);
updateProduct('.pepa-container', '.pepa-title', '.pepa-description', Pepas, currentPepaIndex);
updateProduct('.veganita-container', '.veganita-title', '.veganita-description', Veganitas, currentVeganitaIndex);


// Event listeners para los botones de Pan
document.querySelector('.pan-next-btn').addEventListener('click', () => {
    currentPanIndex = nextProduct(Panes, currentPanIndex);
    updateProduct('.pan-container', '.pan-title', '.pan-description', Panes, currentPanIndex);
});

document.querySelector('.pan-back-btn').addEventListener('click', () => {
    currentPanIndex = previousProduct(Panes, currentPanIndex);
    updateProduct('.pan-container', '.pan-title', '.pan-description', Panes, currentPanIndex);
});


// Event listeners para los botones de Cookies
document.querySelector('.cookie-next-btn').addEventListener('click', () => {
    currentCookieIndex = nextProduct(Cookies, currentCookieIndex);
    updateProduct('.cookie-container', '.cookie-title', '.cookie-description', Cookies, currentCookieIndex);
});

document.querySelector('.cookie-back-btn').addEventListener('click', () => {
    currentCookieIndex = previousProduct(Cookies, currentCookieIndex);
    updateProduct('.cookie-container', '.cookie-title', '.cookie-description', Cookies, currentCookieIndex);
});


// Event listeners para los botones de Pepas
document.querySelector('.pepa-next-btn').addEventListener('click', () => {
    currentPepaIndex = nextProduct(Pepas, currentPepaIndex);
    updateProduct('.pepa-container', '.pepa-title', '.pepa-description', Pepas, currentPepaIndex);
});

document.querySelector('.pepa-back-btn').addEventListener('click', () => {
    currentPepaIndex = previousProduct(Pepas, currentPepaIndex);
    updateProduct('.pepa-container', '.pepa-title', '.pepa-description', Pepas, currentPepaIndex);
});


// Event listeners para los botones de Veganitas
document.querySelector('.veganita-next-btn').addEventListener('click', () => {
    currentVeganitaIndex = nextProduct(Veganitas, currentVeganitaIndex);
    updateProduct('.veganita-container', '.veganita-title', '.veganita-description', Veganitas, currentVeganitaIndex);
});

document.querySelector('.veganita-back-btn').addEventListener('click', () => {
    currentVeganitaIndex = previousProduct(Veganitas, currentVeganitaIndex);
    updateProduct('.veganita-container', '.veganita-title', '.veganita-description', Veganitas, currentVeganitaIndex);
});
