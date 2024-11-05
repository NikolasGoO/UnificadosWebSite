let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 
window.addEventListener('resize', animateOnScroll);
var countDownDate = new Date("Nov 23, 2024 17:00:00").getTime();


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.top <= windowHeight * 0.9 &&  
        rect.left >= 0 &&
        rect.bottom >= windowHeight * 0.1 && 
        rect.right <= windowWidth
    );
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animate');
            el.classList.remove('hidden');
        }
    });
}