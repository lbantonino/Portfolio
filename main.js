// overlayAnimation
const overlayAnimation = () => {
    document.querySelector('#topOverlay').style.transition = 'transform 700ms ease-in-out';
    document.querySelector('#bottomOverlay').style.transition = 'transform 700ms ease-in-out';

    document.querySelector('#topOverlay').classList.add('top');
    document.querySelector('#bottomOverlay').classList.add('bottom');

    setTimeout(() => {
        document.querySelector('#topOverlay').style.transform = 'translateY(0) translateX(-200vw)';
        document.querySelector('#bottomOverlay').style.transform = 'translateY(0) translateX(200vw)';
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
        document.querySelector('#topOverlay').style.transform = 'translateY(0) translateX(-200vw)';
        document.querySelector('#bottomOverlay').style.transform = 'translateY(0) translateX(200vw)';
    }, 1000);
}
document.addEventListener('DOMContentLoaded', function () {
    overlayAnimation();
});
// Mouse effect
const blob = document.getElementById("blob");
document.onpointermove = (event) => {
    const { clientX, clientY } = event;
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
        const body = document.querySelector('body');
        const hamburger = document.querySelector('.hamburger')
        const modal = document.querySelector('.modal');
        const about = document.querySelector('.about-li-modal');
        const work = document.querySelector('.work-li-modal');
        const cross = document.querySelector('.cross');
        const line = document.querySelector('.line');
        const copyright = document.querySelector('.copyright-modal');
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
        body.style.backgroundColor = 'rgb(223, 223, 223)';
        btnMoon.style.display = 'none';
        btnSun.style.display = 'block';

        hamburger.addEventListener('click', () => {
            setTimeout(() => {
                modal.style.display = 'block'
                modal.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    modal.style.transition = 'transform 500ms ease-in-out';
                    modal.style.transform = 'translateX(0%)';
                    modal.style.backgroundColor = 'rgb(7, 11, 28)';
                    about.style.color = '#ffffff';
                    work.style.color = '#ffffff';
                    copyright.style.color = '#ffffff';
                    btnMoon.style.display = 'none';
                    btnSun.style.display = 'block';
                    cross.style.color = '#ffffff';
                    line.style.backgroundColor = '#ffffff';
                }, 10)
            }, 10);
            cross.addEventListener('click', () => {
                setTimeout(() => {
                    modal.style.transition = 'transform 500ms ease-in-out';
                    modal.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 510)
                }, 10)
            })
            work.addEventListener('click', () => {
                setTimeout(() => {
                    modal.style.transition = 'transform 500ms ease-in-out';
                    modal.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 510)
                }, 10)
            })

        });


        localStorage.setItem('theme', 'light');
    }, 1001);
};
const applyDarkTheme = () => {
    overlayAnimation2();
    setTimeout(() => {
        const elements = document.querySelectorAll('*');
        const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');
        const body = document.querySelector('body');
        const hamburger = document.querySelector('.hamburger')
        const modal = document.querySelector('.modal');
        const about = document.querySelector('.about-li-modal');
        const work = document.querySelector('.work-li-modal');
        const cross = document.querySelector('.cross');
        const line = document.querySelector('.line');
        const copyrigth = document.querySelector('.copyright-modal');
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
        body.style.backgroundColor = '#08051cd6'
        btnMoon.style.display = 'block';
        btnSun.style.display = 'none';

        hamburger.addEventListener('click', () => {
            setTimeout(() => {
                modal.style.display = 'block'
                modal.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    modal.style.transition = 'transform 500ms ease-in-out';
                    modal.style.transform = 'translateX(0%)';
                    modal.style.backgroundColor = 'rgba(255, 255, 255, 0.99)';
                    about.style.color = 'rgb(18, 28, 70)';
                    work.style.color = 'rgb(18, 28, 70)';
                    copyrigth.style.color = 'rgb(18, 28, 70)';
                    btnMoon.style.display = 'block';
                    btnSun.style.display = 'none';
                    about.style.color = 'rgb(18, 28, 70)';
                    work.style.color = 'rgb(18, 28, 70)';
                    cross.style.color = 'rgb(18, 28, 70)';
                    line.style.backgroundColor = 'rgb(18, 28, 70)';
                }, 10)
            }, 10);
            cross.addEventListener('click', () => {
                setTimeout(() => {
                    modal.style.transition = 'transform 500ms ease-in-out';
                    modal.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 510)
                }, 10)
            })
            work.addEventListener('click', () => {
                setTimeout(() => {
                    modal.style.transition = 'transform 500ms ease-in-out';
                    modal.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 510)
                }, 10)
            })

        });


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
    const body = document.querySelector('body');
    const hamburger = document.querySelector('.hamburger')
    const modal = document.querySelector('.modal');
    const about = document.querySelector('.about-li-modal');
    const work = document.querySelector('.work-li-modal');
    const cross = document.querySelector('.cross');
    const line = document.querySelector('.line');
    const copyright = document.querySelector('.copyright-modal')
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
    body.style.backgroundColor = 'rgb(223, 223, 223)';
    btnMoon.style.display = 'none';
    btnSun.style.display = 'block';
    body.style.overflowX = 'hidden';
    body.style.maxWidth = '100vw';
    modal.style.display = 'none';
    hamburger.addEventListener('click', () => {
        setTimeout(() => {
            modal.style.display = 'block'
            modal.style.transform = 'translateX(100%)';
            setTimeout(() => {
                modal.style.transition = 'transform 500ms ease-in-out';
                modal.style.transform = 'translateX(0%)';
                modal.style.backgroundColor = 'rgb(7, 11, 28)';
                about.style.color = '#ffffff';
                work.style.color = '#ffffff';
                copyright.style.color = '#ffffff';
                btnMoon.style.display = 'none';
                btnSun.style.display = 'block';
                cross.style.color = '#ffffff';
                line.style.backgroundColor = '#ffffff';
            }, 10)
        }, 10);
        cross.addEventListener('click', () => {
            setTimeout(() => {
                modal.style.transition = 'transform 500ms ease-in-out';
                modal.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 510)
            }, 10)
        })
        work.addEventListener('click', () => {
            setTimeout(() => {
                modal.style.transition = 'transform 500ms ease-in-out';
                modal.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 510)
            }, 10)
        })

    });


};



const setDarkTheme = () => {
    const elements = document.querySelectorAll('*');
    const text = document.querySelectorAll('p , h1 , h2 , h3 , h4 , h5 , h6 , a , span , li , label , input , textarea , button , .word-container');
    const body = document.querySelector('body');
    const hamburger = document.querySelector('.hamburger')
    const modal = document.querySelector('.modal');
    const about = document.querySelector('.about-li-modal');
    const work = document.querySelector('.work-li-modal');
    const cross = document.querySelector('.cross');
    const line = document.querySelector('.line');
    const copyrigth = document.querySelector('.copyright-modal');
    body.style.overflowX = 'hidden';
    body.style.maxWidth = '100vw';
    modal.style.display = 'none';
    hamburger.addEventListener('click', () => {
        setTimeout(() => {
            modal.style.display = 'block'
            modal.style.transform = 'translateX(100%)';
            setTimeout(() => {
                modal.style.transition = 'transform 500ms ease-in-out';
                modal.style.transform = 'translateX(0%)';
                modal.style.backgroundColor = 'rgba(255, 255, 255, 0.99)';
                about.style.color = 'rgb(18, 28, 70)';
                work.style.color = 'rgb(18, 28, 70)';
                copyrigth.style.color = 'rgb(18, 28, 70)';
                btnMoon.style.display = 'block';
                btnSun.style.display = 'none';
                about.style.color = 'rgb(18, 28, 70)';
                work.style.color = 'rgb(18, 28, 70)';
                cross.style.color = 'rgb(18, 28, 70)';
                line.style.backgroundColor = 'rgb(18, 28, 70)';
            }, 10)
        }, 10);
        cross.addEventListener('click', () => {
            setTimeout(() => {
                modal.style.transition = 'transform 500ms ease-in-out';
                modal.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 510)
            }, 10)
        })
        work.addEventListener('click', () => {
            setTimeout(() => {
                modal.style.transition = 'transform 500ms ease-in-out';
                modal.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 510)
            }, 10)
        })

    });

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
    body.style.backgroundColor = '#08051cd6';


};


document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setDarkTheme();
    } if (savedTheme === 'light') {
        setLightTheme();
    }
});







