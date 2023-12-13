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
        body.style.backgroundColor = '#131a32';
    } else {
        body.style.backgroundColor = 'white';
    }
};



document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = loadThemeFromLocalStorage();
    applyTheme(savedTheme);
});

// variables
const theme = document.querySelector('#themeSwitch');
const body = document.querySelector('body');
const text = document.querySelectorAll('.jobTitle,jobTitle2, h2, h3, h4, p, a, li, button, input, textarea');
const socialText = document.querySelector('.social-text');
const aboutText = document.querySelector('.about-text');
const svgLogo = document.querySelector('.logo-svg');

// Switch de thème (dark et light)
theme.addEventListener('click', () => {
    overlayAnimation2();
    setTimeout(() => {
        if (theme.checked) {
            body.style.backgroundColor = 'white';
            saveThemeToLocalStorage('dark');
        } else {
            body.style.backgroundColor = '#131a32';
        }
    }, 1001);
});
