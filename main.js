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




///////////////////////////////////////////////

// ESSAI 1

// Theme switcher 
// const saveThemeToLocalStorage = (theme) => {
//     localStorage.setItem('theme', theme);
// };
// const loadThemeFromLocalStorage = () => {
//     return localStorage.getItem('theme');
// };
// const applyTheme = (theme) => {
//     if (theme === 'dark') {
//         setDarkTheme();
//     } else {
//         setLightTheme();
//         updateThemeIcon(theme);
//     }
// };
// const setDarkTheme = () => {
//     body.style.backgroundColor = '#1a1d2e';
//     const elements = document.querySelectorAll('*');
//     const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');
//     const liMenuAbout = document.querySelector('.about-li');
//     const liMenuWork = document.querySelector('.work-li');
//     const sunIcon = document.querySelector('.sun');
//     elements.forEach(element => {
//         const backgroundColor = window.getComputedStyle(element).backgroundColor;
//         if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === 'rgba(255, 255, 255, 0)') {
//             element.style.backgroundColor = '#070b1c';
//         }
//     });

//     text.forEach(element => {
//         const color = window.getComputedStyle(element).color;
//         if (color === 'rgb(18, 28, 70)') {
//             element.style.color = '#ffffff';
//         }
//     });

//     liMenuAbout.addEventListener('mouseover', () => {
//         liMenuAbout.style.color = '#0466c8';
//     });
//     liMenuAbout.addEventListener('mouseout', () => {
//         liMenuAbout.style.color = '#ffffff';
//     });
//     liMenuWork.addEventListener('mouseover', () => {
//         liMenuWork.style.color = '#0466c8';
//     });
//     liMenuWork.addEventListener('mouseout', () => {
//         liMenuWork.style.color = '#ffffff';
//     });
//     sunIcon.style.display = 'none';

// };
// const setLightTheme = () => {
//     const elements = document.querySelectorAll('*');
//     const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');
//     const line = document.querySelector('.line');
//     const liMenuAbout = document.querySelector('.about-li');
//     const liMenuWork = document.querySelector('.work-li');
//     const moonIcon = document.querySelector('.moon');
//     const sunIcon = document.querySelector('.sun');
//     elements.forEach(element => {
//         const backgroundColor = window.getComputedStyle(element).backgroundColor;
//         if (backgroundColor === 'rgb(7, 11, 28)') {
//             element.style.backgroundColor = '#ffffff';
//             body.style.backgroundColor = 'rgba(46, 52, 75, 0.19)';
//         }
//     });
//     text.forEach(element => {
//         const color = window.getComputedStyle(element).color;
//         if (color === 'rgb(255, 255, 255)' || color === 'rgba(255, 255, 255, 0.753)') {
//             element.style.color = '#121c46';
//         }
//     });
//     liMenuAbout.addEventListener('mouseover', () => {
//         liMenuAbout.style.color = '#0466c8';
//     });
//     liMenuAbout.addEventListener('mouseout', () => {
//         liMenuAbout.style.color = '#121c46';
//     });
//     liMenuWork.addEventListener('mouseover', () => {
//         liMenuWork.style.color = '#0466c8';
//     });
//     liMenuWork.addEventListener('mouseout', () => {
//         liMenuWork.style.color = '#121c46';
//     });
//     sunIcon.style.display = 'block';
//     moonIcon.style.display = 'none';

// };
// const updateThemeIcon = (theme) => {
//     const moonIcon = document.querySelector('.moon');
//     const sunIcon = document.querySelector('.sun');
//     if (theme === 'dark') {
//         sunIcon.style.display = 'none';
//         moonIcon.style.display = 'block';
//     } else {
//         sunIcon.style.display = 'block';
//         moonIcon.style.display = 'none';
//     }
// };
// document.addEventListener('DOMContentLoaded', function () {
//     const savedTheme = loadThemeFromLocalStorage();
//     applyTheme(savedTheme);
//     updateThemeIcon(savedTheme);
// });

// // Variables
// const theme = document.querySelector('#themeSwitch');
// const body = document.querySelector('body');
// // Switch de thème (dark et light)
// theme.addEventListener('click', () => {
//     overlayAnimation2();
//     setTimeout(() => {
//         const newTheme = theme.checked ? 'light' : 'dark';
//         if (newTheme === 'light') {
//             setLightTheme();
//         } else {
//             setDarkTheme();
//         }
//         saveThemeToLocalStorage(newTheme);
//         updateThemeIcon(newTheme);
//     }, 1001);
// });

// window.addEventListener('storage', (event) => {
//     if (event.key === 'theme') {
//         applyTheme(event.newValue);
//         updateThemeIcon(event.newValue);
//     }
// });

////////////////////////////////////////////

// ESSAI 2

// theme switcher

// const btn = document.querySelector('.btn-theme');
// btn.addEventListener('click', () => {
//     console.log('click');
// });

// const saveThemeToLocalStorage = (theme) => {
//     localStorage.setItem('theme', theme);
// };
// const loadThemeFromLocalStorage = () => {
//     return localStorage.getItem('theme');
// };
// const applyTheme = (theme) => {
//     if (theme === 'dark') {
//         setDarkTheme();
//     } else {
//         setLightTheme();
//         updateThemeIcon(theme);
//     }
// };

// const setDarkTheme = () => {
//     const body = document.querySelector('body');
//     body.style.backgroundColor = '#1a1d2e';
//     const elements = document.querySelectorAll('*');
//     const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');
//     const liMenuAbout = document.querySelector('.about-li');
//     const liMenuWork = document.querySelector('.work-li');
//     const sunIcon = document.querySelector('.sun');
//     elements.forEach(element => {
//         const backgroundColor = window.getComputedStyle(element).backgroundColor;
//         if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === 'rgba(255, 255, 255, 0)') {
//             element.style.backgroundColor = '#070b1c';
//         }
//     });

//     text.forEach(element => {
//         const color = window.getComputedStyle(element).color;
//         if (color === 'rgb(18, 28, 70)') {
//             element.style.color = '#ffffff';
//         }
//     });

//     liMenuAbout.addEventListener('mouseover', () => {
//         liMenuAbout.style.color = '#0466c8';
//     });
//     liMenuAbout.addEventListener('mouseout', () => {
//         liMenuAbout.style.color = '#ffffff';
//     });
//     liMenuWork.addEventListener('mouseover', () => {
//         liMenuWork.style.color = '#0466c8';
//     });
//     liMenuWork.addEventListener('mouseout', () => {
//         liMenuWork.style.color = '#ffffff';
//     });
//     sunIcon.style.display = 'none';

// };
// const setLightTheme = () => {
//     const elements = document.querySelectorAll('*');
//     const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');
//     const line = document.querySelector('.line');
//     const liMenuAbout = document.querySelector('.about-li');
//     const liMenuWork = document.querySelector('.work-li');
//     const moonIcon = document.querySelector('.moon');
//     const sunIcon = document.querySelector('.sun');
//     elements.forEach(element => {
//         const backgroundColor = window.getComputedStyle(element).backgroundColor;
//         if (backgroundColor === 'rgb(7, 11, 28)') {
//             element.style.backgroundColor = '#ffffff';
//             body.style.backgroundColor = 'rgba(46, 52, 75, 0.19)';
//         }
//     });
//     text.forEach(element => {
//         const color = window.getComputedStyle(element).color;
//         if (color === 'rgb(255, 255, 255)' || color === 'rgba(255, 255, 255, 0.753)') {
//             element.style.color = '#121c46';
//         }
//     });
//     liMenuAbout.addEventListener('mouseover', () => {
//         liMenuAbout.style.color = '#0466c8';
//     });
//     liMenuAbout.addEventListener('mouseout', () => {
//         liMenuAbout.style.color = '#121c46';
//     });
//     liMenuWork.addEventListener('mouseover', () => {
//         liMenuWork.style.color = '#0466c8';
//     });
//     liMenuWork.addEventListener('mouseout', () => {
//         liMenuWork.style.color = '#121c46';
//     });
//     sunIcon.style.display = 'block';
//     moonIcon.style.display = 'none';

// };

// const updateThemeIcon = (theme) => {
//     const moonIcon = document.querySelector('.moon');
//     const sunIcon = document.querySelector('.sun');
//     if (theme === 'dark') {
//         sunIcon.style.display = 'none';
//         moonIcon.style.display = 'block';
//     } else {
//         sunIcon.style.display = 'block';
//         moonIcon.style.display = 'none';
//     }
// };
// document.addEventListener('DOMContentLoaded', function () {
//     const savedTheme = loadThemeFromLocalStorage();
//     applyTheme(savedTheme);
//     updateThemeIcon(savedTheme);
// });

// const btn = document.querySelector('.btn-theme');
// btn.addEventListener('click', () => {
//     const savedTheme = loadThemeFromLocalStorage();
//     const newTheme = savedTheme === 'dark' ? 'light' : 'dark';

//     if (newTheme === 'dark') {
//         setDarkTheme();
//     } else {
//         setLightTheme();
//     }

//     updateThemeIcon(newTheme);
//     saveThemeToLocalStorage(newTheme);
// });






// Animation text 'Fullstack / Bakcend / Frontend'

// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {


//         let words = ['Specialized in Frontend', ' But I AM Fullstack'];
//         let part, i = 0, offset = 0, len = words.length, forwards = true, skip_count = 0, skip_delay = 15, speed = 70;
//         let wordContainer = document.querySelector('.word-container');

//         let wordflick = function () {
//             setInterval(function () {
//                 if (forwards) {
//                     if (offset >= words[i].length) {
//                         ++skip_count;
//                         if (skip_count == skip_delay) {
//                             forwards = false;
//                             skip_count = 0;
//                         }
//                     }
//                 } else {
//                     if (offset == 0) {
//                         forwards = true;
//                         i++;
//                         offset = 0;
//                         if (i >= len) {
//                             i = 0;
//                         }
//                     }
//                 }
//                 part = words[i].substr(0, offset);
//                 if (skip_count == 0) {
//                     if (forwards) {
//                         offset++;
//                     } else {
//                         offset--;
//                     }
//                 }
//                 wordContainer.textContent = part;
//             }, speed);
//         };

//         wordflick();
//     }, 620);
// });