// overlayAnimation
const overlayAnimation = () => {
    console.log('overlayAnimation called');
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

const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem('theme', theme);
};

const loadThemeFromLocalStorage = () => {
    return localStorage.getItem('theme');
};

const applyTheme = (theme) => {
    if (theme === 'dark') {
        setDarkTheme();
    } else {
        setLightTheme();
    }
};

const setDarkTheme = () => {
    body.style.backgroundColor = '#070b1c';

};

const setLightTheme = () => {
    body.style.backgroundColor = 'white';

};

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = loadThemeFromLocalStorage();
    applyTheme(savedTheme);
});

// Variables
const theme = document.querySelector('#themeSwitch');
const body = document.querySelector('body');
// Ajoutez d'autres éléments nécessaires ici

// Switch de thème (dark et light)
theme.addEventListener('click', () => {
    overlayAnimation2();
    setTimeout(() => {
        if (theme.checked) {
            setLightTheme();
            saveThemeToLocalStorage('light');
        } else {
            setDarkTheme();
            saveThemeToLocalStorage('dark');
        }
    }, 1001);
});
