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
    // body.style.backgroundColor = '#070b1c';
    body.style.backgroundColor = '#1a1d2e';
    const el1 = document.querySelector('.el1');
    el1.style.backgroundColor = '#070b1c';
    const el2 = document.querySelector('.el2');
    el2.style.backgroundColor = '#070b1c';
    const el3 = document.querySelector('.el3');
    el3.style.backgroundColor = '#070b1c';
    const el4 = document.querySelector('.el4');
    el4.style.backgroundColor = '#070b1c';
    const logo = document.querySelector('.logo');
    logo.style.backgroundColor = '#070b1c';
    const nomJob = document.querySelector('.nomJob-global');
    nomJob.style.backgroundColor = '#070b1c';
    const aboutMe = document.querySelector('.aboutMe');
    aboutMe.style.backgroundColor = '#070b1c';
    const social = document.querySelector('.social');
    social.style.backgroundColor = '#070b1c';
    const el5 = document.querySelector('.el5');
    el5.style.backgroundColor = '#070b1c';
    const el6 = document.querySelector('.el6');
    el6.style.backgroundColor = '#070b1c';
    const el7 = document.querySelector('.el7');
    el7.style.backgroundColor = '#070b1c';
    const el8 = document.querySelector('.el8');
    el8.style.backgroundColor = '#070b1c';
    const el9 = document.querySelector('.el9');
    el9.style.backgroundColor = '#070b1c';
    const el10 = document.querySelector('.el10');
    el10.style.backgroundColor = '#070b1c';
    const el11 = document.querySelector('.el11');
    el11.style.backgroundColor = '#070b1c';
    const el12 = document.querySelector('.el12');
    el12.style.backgroundColor = '#070b1c';
    const el13 = document.querySelector('.el13');
    el13.style.backgroundColor = '#070b1c';
    const el14 = document.querySelector('.el14');
    el14.style.backgroundColor = '#070b1c';
    const el15 = document.querySelector('.el15');
    el15.style.backgroundColor = '#070b1c';
    const el16 = document.querySelector('.el16');
    el16.style.backgroundColor = '#070b1c';
    const menuGlobal = document.querySelector('.menu-global');
    menuGlobal.style.backgroundColor = '#070b1c';
    const menuGlobalAbout = document.querySelector('.menu-global-about');
    menuGlobalAbout.style.backgroundColor = '#070b1c';
    const el1n = document.querySelector('.el1n');
    el1n.style.backgroundColor = '#070b1c';
    const el3n = document.querySelector('.el3n');
    el3n.style.backgroundColor = '#070b1c';
    const el4s = document.querySelector('.el4s');
    el4s.style.backgroundColor = '#070b1c';
    const el6w = document.querySelector('.el6w');
    el6w.style.backgroundColor = '#070b1c';
    const el1f = document.querySelector('.el1f');
    el1f.style.backgroundColor = '#070b1c';
    const el2f = document.querySelector('.el2f');
    el2f.style.backgroundColor = '#070b1c';
    const el3f = document.querySelector('.el3f');
    el3f.style.backgroundColor = '#070b1c';
    const el5f = document.querySelector('.el5f');
    el5f.style.backgroundColor = '#070b1c';
    const el6f = document.querySelector('.el6f');
    el6f.style.backgroundColor = '#070b1c';
    const el7f = document.querySelector('.el7f');
    el7f.style.backgroundColor = '#070b1c';
    const el8f = document.querySelector('.el8f');
    el8f.style.backgroundColor = '#070b1c';
    const el9f = document.querySelector('.el9f');
};

const setLightTheme = () => {
    body.style.backgroundColor = '#23253421';
    const el1 = document.querySelector('.el1');
    el1.style.backgroundColor = 'white';
    const el2 = document.querySelector('.el2');
    el2.style.backgroundColor = 'white';
    const el3 = document.querySelector('.el3');
    el3.style.backgroundColor = 'white';
    const el4 = document.querySelector('.el4');
    el4.style.backgroundColor = 'white';
    const logo = document.querySelector('.logo');
    logo.style.backgroundColor = 'white';
    const nomJob = document.querySelector('.nomJob-global');
    nomJob.style.backgroundColor = 'white';
    const aboutMe = document.querySelector('.aboutMe');
    aboutMe.style.backgroundColor = 'white';
    const social = document.querySelector('.social');
    social.style.backgroundColor = 'white';
    const el5 = document.querySelector('.el5');
    el5.style.backgroundColor = 'white';
    const el6 = document.querySelector('.el6');
    el6.style.backgroundColor = 'white';
    const el7 = document.querySelector('.el7');
    el7.style.backgroundColor = 'white';
    const el8 = document.querySelector('.el8');
    el8.style.backgroundColor = 'white';
    const el9 = document.querySelector('.el9');
    el9.style.backgroundColor = 'white';
    const el10 = document.querySelector('.el10');
    el10.style.backgroundColor = 'white';
    const el11 = document.querySelector('.el11');
    el11.style.backgroundColor = 'white';
    const el12 = document.querySelector('.el12');
    el12.style.backgroundColor = 'white';
    const el13 = document.querySelector('.el13');
    el13.style.backgroundColor = 'white';
    const el14 = document.querySelector('.el14');
    el14.style.backgroundColor = 'white';
    const el15 = document.querySelector('.el15');
    el15.style.backgroundColor = 'white';
    const el16 = document.querySelector('.el16');
    el16.style.backgroundColor = 'white';
    const menuGlobal = document.querySelector('.menu-global');
    menuGlobal.style.backgroundColor = 'white';
    const menuGlobalAbout = document.querySelector('.menu-global-about');
    menuGlobalAbout.style.backgroundColor = 'white';
    const el1n = document.querySelector('.el1n');
    el1n.style.backgroundColor = 'white';
    const el3n = document.querySelector('.el3n');
    el3n.style.backgroundColor = 'white';
    const el4s = document.querySelector('.el4s');
    el4s.style.backgroundColor = 'white';
    const el6w = document.querySelector('.el6w');
    el6w.style.backgroundColor = 'white';
    const el1f = document.querySelector('.el1f');
    el1f.style.backgroundColor = 'white';
    const el2f = document.querySelector('.el2f');
    el2f.style.backgroundColor = 'white';
    const el3f = document.querySelector('.el3f');
    el3f.style.backgroundColor = 'white';
    const el5f = document.querySelector('.el5f');
    el5f.style.backgroundColor = 'white';
    const el6f = document.querySelector('.el6f');
    el6f.style.backgroundColor = 'white';
    const el7f = document.querySelector('.el7f');
    el7f.style.backgroundColor = 'white';
    const el8f = document.querySelector('.el8f');
    el8f.style.backgroundColor = 'white';
    const el9f = document.querySelector('.el9f');
    el9f.style.backgroundColor = 'white';
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


        let words = ['Specialized in Frontend', ' But I AM Fullstack'];
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