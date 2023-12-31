// overlayAnimation
const overlayAnimation = () => {
    document.querySelector('#topOverlay').style.transition = 'transform 700ms ease-in-out';
    document.querySelector('#bottomOverlay').style.transition = 'transform 700ms ease-in-out';

    document.querySelector('#topOverlay').classList.add('top');
    document.querySelector('#bottomOverlay').classList.add('bottom');

    setTimeout(() => {
        document.querySelector('#topOverlay').style.transform = 'translateY(0) translateX(-100vw)';
        document.querySelector('#bottomOverlay').style.transform = 'translateY(0) translateX(100vw)';
    }, 200);
}


const overlayAnimation2 = () => {
    document.querySelector('#topOverlay').style.transition = 'transform 1000ms ease-in-out';
    document.querySelector('#bottomOverlay').style.transition = 'transform 1000ms ease-in-out';

    document.querySelector('#topOverlay').classList.add('top');
    document.querySelector('#bottomOverlay').classList.add('bottom');

    document.querySelector('#topOverlay').style.transform = 'translateY(0) translateX(0)';
    document.querySelector('#bottomOverlay').style.transform = 'translateY(0) translateX(0)';

    setTimeout(() => {
        document.querySelector('#topOverlay').style.transform = 'translateY(0) translateX(-100vw)';
        document.querySelector('#bottomOverlay').style.transform = 'translateY(0) translateX(100vw)';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    overlayAnimation();
});

// Mouse effect
const blob = document.getElementById("blob");

document.onpointermove = (event) => {
    const { clientX, clientY } = event;

    // Obtenez les coordonnées du curseur par rapport à l'ensemble de la page
    const pageX = clientX + window.pageXOffset;
    const pageY = clientY + window.pageYOffset;

    blob.animate(
        {
            left: `${pageX}px`,
            top: `${pageY}px`
        },
        { duration: 600, fill: "forwards" }
    );
};


//theme switcher
const btnMoon = document.querySelector('.btn-moon');
const btnSun = document.querySelector('.btn-sun');

const applylightTheme = () => {
    overlayAnimation2()
    setTimeout(() => {
        const elements = document.querySelectorAll('*');
        const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');

        elements.forEach(element => {
            const backgroundColor = window.getComputedStyle(element).backgroundColor;
            if (backgroundColor === 'rgb(7, 11, 28)') {
                element.style.backgroundColor = '#ffffff';
            }
        });

        text.forEach(element => {
            const color = window.getComputedStyle(element).color;
            if (color === 'rgb(255, 255, 255)' || color === 'rgba(255, 255, 255, 0.753)') {
                element.style.color = '#121c46';
            }
        });

        btnMoon.style.display = 'none';
        btnSun.style.display = 'block';

        // Stocker le thème actuel dans le local storage
        localStorage.setItem('theme', 'light');
    }, 1001);
};

const applyDarkTheme = () => {
    // Déclencher l'animation de l'overlay immédiatement
    overlayAnimation2();

    // Ajouter un délai de 1001 ms avant d'appliquer le thème
    setTimeout(() => {
        const elements = document.querySelectorAll('*');
        const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');

        elements.forEach(element => {
            const backgroundColor = window.getComputedStyle(element).backgroundColor;
            if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === 'rgba(255, 255, 255, 0)') {
                element.style.backgroundColor = '#070b1c';
            }
        });

        text.forEach(element => {
            const color = window.getComputedStyle(element).color;
            if (color === 'rgb(18, 28, 70)') {
                element.style.color = '#ffffff';
            }
        });

        btnMoon.style.display = 'block';
        btnSun.style.display = 'none';

        // Stocker le thème actuel dans le local storage
        localStorage.setItem('theme', 'dark');
    }, 1001);
};


btnSun.addEventListener('click', () => {
    console.log('click on the button');
    applyDarkTheme()
});

btnMoon.addEventListener('click', () => {
    console.log('click on the button');
    applylightTheme()
});

const setLightTheme = () => {
    const elements = document.querySelectorAll('*');
    const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');

    elements.forEach(element => {
        const backgroundColor = window.getComputedStyle(element).backgroundColor;
        if (backgroundColor === 'rgb(7, 11, 28)') {
            element.style.backgroundColor = '#ffffff';
        }
    });

    text.forEach(element => {
        const color = window.getComputedStyle(element).color;
        if (color === 'rgb(255, 255, 255)' || color === 'rgba(255, 255, 255, 0.753)') {
            element.style.color = '#121c46';
        }
    });

    btnMoon.style.display = 'none';
    btnSun.style.display = 'block';
};

// Charge le thème au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        applyDarkTheme();
    } if (savedTheme === 'light') {
        setLightTheme();
    }
});







