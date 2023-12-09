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
    }, 100);
}


const overlayAnimation2 = () => {
    console.log('overlayAnimation called');
    document.querySelector('#topOverlay').style.transition = 'transform 1000ms ease-in-out';
    document.querySelector('#bottomOverlay').style.transition = 'transform 1000ms ease-in-out';

    document.querySelector('#topOverlay').classList.add('top');
    document.querySelector('#bottomOverlay').classList.add('bottom');

    document.querySelector('#topOverlay').style.transform = 'translateY(0) translateX(0)';
    document.querySelector('#bottomOverlay').style.transform = 'translateY(0) translateX(0)';
 

    setTimeout(() => {
        document.querySelector('#topOverlay').style.transform = 'translateY(0) translateX(-100vw)';
        document.querySelector('#bottomOverlay').style.transform = 'translateY(0) translateX(100vw)';
    }, 100);
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
        body.style.backgroundColor = 'white';
        aboutText.style.color = '#0466c8';
        socialText.style.color = '#0466c8';
        text.forEach(element => {
            element.style.color = '#121a38';
        });
    } else {
        body.style.backgroundColor = '#121a38';
        aboutText.style.color = '#0466c8';
        socialText.style.color = '#0466c8';
        text.forEach(element => {
            element.style.color = 'white';
        });
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
    setTimeout(() => {console.log('Theme clicked'); }, 1000);
    setTimeout(() => {
        if (theme.checked) {
            body.style.backgroundColor = 'white';
            aboutText.style.color = '#0466c8';
            socialText.style.color = '#0466c8';
            text.forEach(element => {
                element.style.color = '#121a38';
            });
            saveThemeToLocalStorage('dark');
        } else {
            body.style.backgroundColor = '#121a38';
            aboutText.style.color = '#0466c8';
            socialText.style.color = '#0466c8';
            text.forEach(element => {
                element.style.color = 'white';
            });
            saveThemeToLocalStorage('light');
        }
    }, 1000); 
});
