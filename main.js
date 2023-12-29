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

// Mouse effect




// Theme switcher
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






// Animation text 'Fullstack / Bakcend / Frontend'

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {


        let words = ['Specialized in Backend', ' But I AM Fullstack'];
        let part, i = 0, offset = 0, len = words.length, forwards = true, skip_count = 0, skip_delay = 15, speed = 70;
        let wordContainer = document.querySelector('.word-container');

        let wordflick = function () {
            setInterval(function () {
                if (forwards) {
                    if (offset >= words[i].length) {
                        ++skip_count;
                        if (skip_count == skip_delay) {
                            forwards = false;
                            skip_count = 0;
                        }
                    }
                } else {
                    if (offset == 0) {
                        forwards = true;
                        i++;
                        offset = 0;
                        if (i >= len) {
                            i = 0;
                        }
                    }
                }
                part = words[i].substr(0, offset);
                if (skip_count == 0) {
                    if (forwards) {
                        offset++;
                    } else {
                        offset--;
                    }
                }
                wordContainer.textContent = part;
            }, speed);
        };

        wordflick();
    }, 620);
});