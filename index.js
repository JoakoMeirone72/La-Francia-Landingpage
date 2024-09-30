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
        description: 'elaborado con masa madre, avena gruesa molida y harina integral. Especial sin semillas',
        color: '#8FACE5'
    },
    {
        image: './assets/images/productos/AVY09686.jpeg',
        name: 'DOBLE INTEGRAL',
        description: 'elaborado con masa madre, harina integral fina y gruesa. Además cuenta también con avena gruesa molida y salvado',
        color: '#819E71'
    },
    {
        image: './assets/images/productos/AVY09690.jpeg',
        name: 'SIN SAL',
        description: 'elaborado con masa madre, avena gruesa molida, harina integral. Bañado en semillas de lino y chía, sin sal agregada',
        color: '#A9B0B6'
    },
    {
        image: './assets/images/productos/AVY09695.jpeg',
        name: 'TRADICIONAL',
        description: 'elaborado con masa madre, salvado de trigo y harina integral. Cubierto con semillas de lino y girasol',
        color: '#E3C167'
    },
    {
        image: './assets/images/productos/AVY09698.jpeg',
        name: 'ACTIVO',
        description: 'elaborado con harina integral de trigo, amasado con mix de semillas energéticas activadas y con doble avena en su interior',
        color: '#8DB571'
    },
    {
        image: './assets/images/productos/AVY09704.jpeg',
        name: 'DOBLE SALVADO',
        description: 'elaborado con masa madre, salvado de trigo y harina integral. Cubierto con una lluvia de salvado puro. Especial sin semillas',
        color: '#BE8075'
    },
    {
        image: './assets/images/productos/AVY09706.jpeg',
        name: 'CALABAZA',
        description: ' elaborado con gran porcentaje de puré de calabaza, harina integral y masa madre. En su superficie se encuentra una lluvia de semillas de sésamo integral',
        color: '#DF9B6C'
    },
    {
        image: './assets/images/productos/AVY09714.jpeg',
        name: 'ZAPALLO Y CÚRCUMA',
        description: 'este especial pan cuenta con gran cantidad de puré de zapallo y cúrcuma en su amasado. Elaborado con harina integral de grano entero y bañado en semillas sésamo',
        color: '#A46CA1'
    },
    {
        image: './assets/images/productos/AVY09730.jpeg',
        name: 'PASAS DE UVA',
        description: 'amasado con pasas de uva y elaborado con masa madre, salvado de trigo y harina integral. Agregado especial de semillas de chía en cada rodaja',
        color: '#A28ED6'
    },
    {
        image: './assets/images/productos/AVY09737.jpeg',
        name: 'PAPA',
        description: 'elaborado con papa natural y fermentado controlada mente por 14 horas',
        color: '#545255'
    },
    {
        image: './assets/images/productos/AVY09772.jpeg',
        name: 'TRES HARINAS',
        description: 'elaborado con harina 100% integral de centeno, sarraceno y trigo. Cubierto con semillas de sésamo y chía',
        color: '#DE72C4'
    },
    {
        image: './assets/images/productos/AVY09779.jpeg',
        name: 'MULTICEREAL',
        description: 'elaborado con variedad de semillas: chía, lino, girasol, sésamo y quinoa. Cuenta también con masa madre, salvado de trigo y harina integral',
        color: '#E76471'
    },

]

const Cookies = [
    {
        image: './assets/images/productos/DSC00109.jpeg',
        name: 'NARANJA Y LINO',
        description: ' cookies de harina integral y avena. En su amasado cuenta con agregado de semillas de lino, combinándolo con un rico sabor a naranja',
        color: '#F17D51'
    },
    {
        image: './assets/images/productos/DSC00126.jpeg',
        name: 'LIMÓN Y CHÍA',
        description: 'cookies de harina integral y avena. En su amasado cuenta con agregado de semillas de chía, combinándolo con un rico sabor a limón',
        color: '#E5C451'
    },
    {
        image: './assets/images/productos/DSC00245.jpeg',
        name: 'ALGARROBA Y LINO',
        description: 'cookies de harina de algarroba, harina integral y avena. En su amasado cuenta con agregado de semillas de lino',
        color: '#85B38A'
    },
    {
        image: './assets/images/productos/DSC00306.jpeg',
        name: 'VAINILLA Y PASAS DE UVA',
        description: 'cookies de harina integral y avena. En su amasado cuenta con agregado de pasas de uva, perfecta combinación con su sabor avainillado',
        color: '#DC8299'
    },
]

const Pepas = [
    {
        image: './assets/images/Productos/DSC00328.jpeg',
        name: 'MEMBRILLO Y CHÍA',
        description: 'elaboradas con avena y harina integral, rellenas con membrillo. En su amasado se integran semillas de chía. Fuente de fibra y proteína',
        color: '#CC5754'
    },
    {
        image: './assets/images/Productos/DSC00272.jpeg',
        name: 'ALGARROBA Y MEMBRILLO',
        description: 'elaboradas con avena, harina integral y harina de algarroba, rellenas con membrillo. Fuente de fibra y proteína',
        color: '#735DA4'
    },
    {
        image: './assets/images/Productos/DSC00355.jpeg',
        name: 'BATATA Y CHÍA',
        description: 'elaboradas con avena y harina integral, rellenas con batata. En su amasado se integran semillas de chía. Fuente de fibra y proteína',
        color: '#D2A272'
    },
]

const Veganitas = [
    {
        image: './assets/images/Productos/10-DSC05734.jpg',
        name: 'ALGARROBA Y NUEZ',
        description: ' galletitas integrales y veganas, con harina de algarroba y agregado de nueces en su interior',
        color: '#B85719'
    },
    {
        image: './assets/images/Productos/9-DSC05718.jpg',
        name: 'LIMÓN Y CHÍA',
        description: 'galletitas integrales y veganas, suave sabor a limón, combinado con la crocantes de las semillas de chía',
        color: '#D5C800'
    },
    {
        image: './assets/images/Productos/18-DSC05703.jpg',
        name: 'COCO Y AVENA',
        description: ' galletitas integrales y veganas, con agregado de avena y suave sabor a coco',
        color: '#2C89DA'
    },
    {
        image: '',
        name: 'MANZANA Y GRANOLA',
        description: ' galletitas integrales y veganas, cuentan con pedacitos de granola combinados con el rico sabor de la manzana',
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
    // description.style.color = productsArray[currentIndex].color;
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
