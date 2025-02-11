//Pre-carga de imagenes --------------------------------------

function preloadImages() {
    const images = [
        ...Panes.map(pan => pan.image),
        ...Cookies.map(cookie => cookie.image),
        ...Pepas.map(pepa => pepa.image),
        ...Veganitas.map(veganita => veganita.image),
        './assets/images/paper-clip.png',
        './assets/images/AVY09690.jpeg',
        './assets/images/10-DSC05734.jpg',
        './assets/images/DSC00127.jpeg',
        './assets/images/DSC00304.jpeg',
        './assets/images/DSC00321.jpeg',
        './assets/images/DSC_0530.jpg'
    ];
    
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }
  
  window.onload = preloadImages;
  

// Habilitación del botón de enviar ----------------------------
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const inputs = form.querySelectorAll('input, textarea');

    function validateForm() {
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
            }
        });

        submitBtn.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });
});

//Type number ----------------------------------------------------------------

document.querySelector('input[type="number"]').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9.]/g, '');
    this.value = this.value.replace(/[^0-9]/g, ''); 
  });


//Animaciones -----------------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('#logo');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });


document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.social-network-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  cards.forEach(card => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.img-about-us');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.product-article');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });


//Productos ---------------------------------------------------------------------------------

const Panes = [
    {
        image: './assets/images/productos/AVY09756.jpeg',
        name: 'BLANCO',
        description: 'Elaborado con masa madre, avena gruesa molida y harina integral. Especial sin semillas',
        color: '#8FACE5',
        containerColor: 'rgba(143, 172, 229, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09686.jpeg',
        name: 'DOBLE INTEGRAL',
        description: 'Elaborado con masa madre, harina integral fina y gruesa. Además cuenta también con avena gruesa molida y salvado',
        color: '#819E71',
        containerColor: 'rgba(129, 158, 113, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09690.jpeg',
        name: 'SIN SAL',
        description: 'Elaborado con masa madre, avena gruesa molida, harina integral. Bañado en semillas de lino y chía, sin sal agregada',
        color: '#A9B0B6',
        containerColor: 'rgba(169, 176, 182, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09695.jpeg',
        name: 'TRADICIONAL',
        description: 'Elaborado con masa madre, salvado de trigo y harina integral. Cubierto con semillas de lino y girasol',
        color: '#E3C167',
        containerColor: 'rgba(227, 193, 103, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09698.jpeg',
        name: 'ACTIVO',
        description: 'Elaborado con harina integral de trigo, amasado con mix de semillas energéticas activadas y con doble avena en su interior',
        color: '#8DB571',
        containerColor: 'rgba(141, 181, 113, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09704.jpeg',
        name: 'DOBLE SALVADO',
        description: 'Elaborado con masa madre, salvado de trigo y harina integral. Cubierto con una lluvia de salvado puro. Especial sin semillas',
        color: '#BE8075',
        containerColor: 'rgba(190, 128, 117, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09706.jpeg',
        name: 'CALABAZA',
        description: 'Elaborado con gran porcentaje de puré de calabaza, harina integral y masa madre. En su superficie se encuentra una lluvia de semillas de sésamo integral',
        color: '#DF9B6C',
        containerColor: 'rgba(223, 155, 108, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09714.jpeg',
        name: 'ZAPALLO Y CÚRCUMA',
        description: 'Este especial pan cuenta con gran cantidad de puré de zapallo y cúrcuma en su amasado. Elaborado con harina integral de grano entero y bañado en semillas sésamo',
        color: '#A46CA1',
        containerColor: 'rgba(164, 108, 161, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09730.jpeg',
        name: 'PASAS DE UVA',
        description: 'Amasado con pasas de uva y elaborado con masa madre, salvado de trigo y harina integral. Agregado especial de semillas de chía en cada rodaja',
        color: '#A28ED6',
        containerColor: 'rgba(162, 142, 214, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09737.jpeg',
        name: 'PAPA',
        description: 'Elaborado con papa natural y fermentado controladamente por 14 horas',
        color: '#545255',
        containerColor: 'rgba(84, 82, 85, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09772.jpeg',
        name: 'TRES HARINAS',
        description: 'Elaborado con harina 100% integral de centeno, sarraceno y trigo. Cubierto con semillas de sésamo y chía',
        color: '#DE72C4',
        containerColor: 'rgba(222, 114, 196, 0.9)'
    },
    {
        image: './assets/images/productos/AVY09779.jpeg',
        name: 'MULTICEREAL',
        description: 'Elaborado con variedad de semillas: chía, lino, girasol, sésamo y quinoa. Cuenta también con masa madre, salvado de trigo y harina integral',
        color: '#E76471',
        containerColor: 'rgba(231, 100, 113, 0.9)'
    },

]

const Cookies = [
    {
        image: './assets/images/productos/DSC00109.jpeg',
        name: 'NARANJA Y LINO',
        description: 'Cookies de harina integral y avena. En su amasado cuenta con agregado de semillas de lino, combinándolo con un rico sabor a naranja',
        color: '#F17D51',
        containerColor: 'rgba(241, 125, 81, 0.9)'
    },
    {
        image: './assets/images/productos/DSC00126.jpeg',
        name: 'LIMÓN Y CHÍA',
        description: 'Cookies de harina integral y avena. En su amasado cuenta con agregado de semillas de chía, combinándolo con un rico sabor a limón',
        color: '#E5C451',
        containerColor: 'rgba(229, 196, 81, 0.9)'
    },
    {
        image: './assets/images/productos/DSC00245.jpeg',
        name: 'ALGARROBA Y LINO',
        description: 'Cookies de harina de algarroba, harina integral y avena. En su amasado cuenta con agregado de semillas de lino',
        color: '#85B38A',
        containerColor: 'rgba(133, 179, 138, 0.9)'
    },
    {
        image: './assets/images/productos/DSC00306.jpeg',
        name: 'VAINILLA Y PASAS DE UVA',
        description: 'Cookies de harina integral y avena. En su amasado cuenta con agregado de pasas de uva, perfecta combinación con su sabor avainillado',
        color: '#DC8299',
        containerColor: 'rgba(220, 130, 153, 0.9)'
    },
]

const Pepas = [
    {
        image: './assets/images/productos/DSC00328.jpeg',
        name: 'MEMBRILLO Y CHÍA',
        description: 'Elaboradas con avena y harina integral, rellenas con membrillo. En su amasado se integran semillas de chía. Fuente de fibra y proteína',
        color: '#CC5754',
        containerColor: 'rgba(204, 87, 84, 0.9)'
    },
    {
        image: './assets/images/productos/DSC_0540.jpg',
        name: 'ALGARROBA Y MEMBRILLO',
        description: 'Elaboradas con avena, harina integral y harina de algarroba, rellenas con membrillo. Fuente de fibra y proteína',
        color: '#735DA4',
        containerColor: 'rgba(115, 93, 164, 0.9)'
    },
    {
        image: './assets/images/productos/DSC_0554.jpg',
        name: 'BATATA Y CHÍA',
        description: 'Elaboradas con avena y harina integral, rellenas con batata. En su amasado se integran semillas de chía. Fuente de fibra y proteína',
        color: '#D2A272',
        containerColor: 'rgba(210, 162, 114, 0.9)'
    },
]

const Veganitas = [
    {
        image: './assets/images/productos/10-DSC05734.jpg',
        name: 'ALGARROBA Y NUEZ',
        description: ' Galletitas integrales y veganas, con harina de algarroba y agregado de nueces en su interior',
        color: '#B85719',
        containerColor: 'rgba(184, 87, 25, 0.9)'
    },
    {
        image: './assets/images/productos/9-DSC05718.jpg',
        name: 'LIMÓN Y CHÍA',
        description: 'Galletitas integrales y veganas, suave sabor a limón, combinado con la crocantes de las semillas de chía',
        color: '#D5C800',
        containerColor: 'rgba(213, 200, 0, 0.9)'
    },
    {
        image: './assets/images/productos/18-DSC05703.jpg',
        name: 'COCO Y AVENA',
        description: ' Galletitas integrales y veganas, con agregado de avena y suave sabor a coco',
        color: '#2C89DA',
        containerColor: 'rgba(44, 137, 218, 0.9)'
    },
    {
        image: './assets/images/productos/manzanagranola.jpeg',
        name: 'MANZANA Y GRANOLA',
        description: ' Galletitas integrales y veganas, cuentan con pedacitos de granola combinados con el rico sabor de la manzana',
        color: '#F44A41',
        containerColor: 'rgba(244, 74, 65, 0.9)'
    },
]

let currentPanIndex = 0;
// let currentCookieIndex = 0;
let currentPepaIndex = 0;
// let currentVeganitaIndex = 0;


function nextProduct(productsArray, currentIndex) {
    return (currentIndex + 1) % productsArray.length;
}

function previousProduct(productsArray, currentIndex) {
    return (currentIndex - 1 + productsArray.length) % productsArray.length;
}


function updateProduct(containerSelector, titleSelector, descriptionSelector, containerDescriptionSelector, productsArray, currentIndex) {
    const container = document.querySelector(containerSelector);
    const title = document.querySelector(titleSelector);
    const description = document.querySelector(descriptionSelector);
    const containerDescription = document.querySelector(containerDescriptionSelector);

   
    title.textContent = productsArray[currentIndex].name;
    description.textContent = productsArray[currentIndex].description;
    container.style.backgroundImage = `url(${productsArray[currentIndex].image})`;
    containerDescription.style.backgroundColor = productsArray[currentIndex].containerColor; 

    title.style.color = productsArray[currentIndex].color;
}


updateProduct('.pan-container', '.pan-title', '.pan-description', '#description-pan-container', Panes, currentPanIndex);
// updateProduct('.cookie-container', '.cookie-title', '.cookie-description', '#description-cookie-container', Cookies, currentCookieIndex);
updateProduct('.pepa-container', '.pepa-title', '.pepa-description', '#description-pepa-container', Pepas, currentPepaIndex);
// updateProduct('.veganita-container', '.veganita-title', '.veganita-description', '#description-veganita-container', Veganitas, currentVeganitaIndex);


// Event listeners para los botones de Pan
document.querySelector('.pan-next-btn').addEventListener('click', () => {
    currentPanIndex = nextProduct(Panes, currentPanIndex);
    updateProduct('.pan-container', '.pan-title', '.pan-description', '#description-pan-container', Panes, currentPanIndex);
});

document.querySelector('.pan-back-btn').addEventListener('click', () => {
    currentPanIndex = previousProduct(Panes, currentPanIndex);
    updateProduct('.pan-container', '.pan-title', '.pan-description', '#description-pan-container', Panes, currentPanIndex);
});


// Event listeners para los botones de Cookies
// document.querySelector('.cookie-next-btn').addEventListener('click', () => {
//     currentCookieIndex = nextProduct(Cookies, currentCookieIndex);
//     updateProduct('.cookie-container', '.cookie-title', '.cookie-description', '#description-cookie-container', Cookies, currentCookieIndex);
// });

// document.querySelector('.cookie-back-btn').addEventListener('click', () => {
//     currentCookieIndex = previousProduct(Cookies, currentCookieIndex);
//     updateProduct('.cookie-container', '.cookie-title', '.cookie-description', '#description-cookie-container', Cookies, currentCookieIndex);
// });


// Event listeners para los botones de Pepas
document.querySelector('.pepa-next-btn').addEventListener('click', () => {
    currentPepaIndex = nextProduct(Pepas, currentPepaIndex);
    updateProduct('.pepa-container', '.pepa-title', '.pepa-description', '#description-pepa-container', Pepas, currentPepaIndex);
});

document.querySelector('.pepa-back-btn').addEventListener('click', () => {
    currentPepaIndex = previousProduct(Pepas, currentPepaIndex);
    updateProduct('.pepa-container', '.pepa-title', '.pepa-description', '#description-pepa-container', Pepas, currentPepaIndex);
});

// // Event listeners para los botones de Veganitas
// document.querySelector('.veganita-next-btn').addEventListener('click', () => {
//   currentVeganitaIndex = nextProduct(Veganitas, currentVeganitaIndex);
//   updateProduct('.veganita-container', '.veganita-title', '.veganita-description', '#description-veganita-container', Veganitas, currentVeganitaIndex);
// });

// document.querySelector('.veganita-back-btn').addEventListener('click', () => {
//   currentVeganitaIndex = previousProduct(Veganitas, currentVeganitaIndex);
//   updateProduct('.veganita-container', '.veganita-title', '.veganita-description', '#description-veganita-container', Veganitas, currentVeganitaIndex);
// });
