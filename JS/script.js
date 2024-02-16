const menu = document.getElementById('menu-mobile');
const close_btn = document.getElementById('close-btn');
let navbar = document.getElementById('navbar-mobile');
menu.onclick = function abrirMenu() {
    if(navbar.style.display == 'flex'){
        navbar.style.display = 'none'
    }else{
        navbar.style.display = 'flex';
    }
    
}

close_btn.onclick = function fecharMeny() {
    navbar.style.display = 'none'
}