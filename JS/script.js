const menu = document.getElementById('menu-mobile');
let navbar = document.getElementById('navbar-mobile');

function animation(url, display) {
    menu.classList.add('rotate-scale-up');
    menu.addEventListener('animationend', () => {
        menu.classList.remove('rotate-scale-up');
        navbar.style.display = display;
        if(display != "none") {
            navbar.classList.add("scale-up-center");
            navbar.addEventListener('animationend', () => {
                navbar.classList.remove("scale-up-center")
                menu.querySelector('img').setAttribute('src', url);
            })
        }else {
            menu.querySelector('img').setAttribute('src', url);
        }
    })
}

menu.onclick = function abrirMenu() {
    if(navbar.style.display == 'flex'){
        animation("./img/menu.svg", "none",);
    }else{
        animation("./img/close.svg", "flex");
    }
    
}
