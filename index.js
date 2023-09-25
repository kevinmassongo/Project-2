// Barre Navigation

const header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})

// bar menu

const menu = document.querySelector('.menu-bar')
const icon = document.querySelector('.icon')
const iconX = document.querySelector('.icon i')

icon.onclick = function(){
    menu.classList.toggle('open')
    const close = menu.classList.contains('open')

    iconX.classList = close
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}

let typed = new Typed('.text', {
    strings : ["Frontend Developer", "Graphic Designer", "Web Developer", "Mobile Developer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000, 
    loop : true
})

// Read More
const clickMore = document.getElementById('paragraph-click')
const paragraph = document.querySelector('.paragraph');

clickMore.addEventListener('click', addClick)

function addClick(){
    paragraph.classList.toggle('reduce')
    clickMore.textContent = 'Reduce About Me'
}

