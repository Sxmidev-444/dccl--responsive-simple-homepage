const cambioModo = document.getElementById("mode");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const circulo = document.getElementById("circulo");
const logo = document.querySelector(".logo");
const body = document.getElementById("body");
const about = document.getElementById("about");
const smallTitle = document.getElementById("span");
const title = document.getElementById("titulo");
const menu = document.getElementById("menu__toggle");
const menuToggle = document.querySelector(".container__links");
const icon = document.getElementById('icon');
const nav = document.getElementById('nav');


cambioModo.addEventListener('click', () => {
    sun.classList.toggle('sun')
    moon.classList.toggle('moon')
    circulo.classList.toggle('circulo')
    menuToggle.classList.toggle('dark')
    
     if (moon.src.endsWith('img/Moon_fill_light.svg')) {
        moon.src = 'img/Moon_fill.svg'
        logo.src = 'img/alarado-icon-homepage-dark.svg'
        body.style.background = '#111729'
        about.style.color = '#FFFFFF'
        smallTitle.style.color = '#FFFFFF'
        title.style.color = '#FFFFFF'
        menu.style.color = '#FFFFFF'
        nav.style.backgroundColor = '#111729'

     }
     else {
        moon.src = 'img/Moon_fill_light.svg'
        logo.src = 'img/alarado-icon-homepage.svg'
        body.style.background = '#F2F9FE'
        about.style.color = '#223344'
        smallTitle.style.color = '#223344'
        title.style.color = '#223344'
        menu.style.color = '#111729'
        nav.style.backgroundColor = '#F2F9FE'

     }

      

}) 

menu.addEventListener('click', () => {
            menuToggle.classList.toggle('active')
            icon.classList.toggle('bx-x')
        })
