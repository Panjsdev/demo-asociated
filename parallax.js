/*Scroll*/

let animada = document.querySelectorAll(".animada");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animada.length; i++) {
        let alturaAnimada = animada[i].offsetTop;
        if (alturaAnimada - 300 < scrollTop){
            animada[i].style.opacity = 1;
            animada[i].classList.add("mostrarArriba");
        }
    }

}

window.addEventListener('scroll', mostrarScroll);

/*Parallax*/

let parallax = document.querySelector(".parallax");
let titulo = document.querySelector(".titulo");

function Scroll() {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.2 + 'px)';
    titulo.style.transform = 'translateY(' + scrollTop * 0.05 + 'px)';
}

window.addEventListener('scroll', Scroll);

/*Menú fijo*/

var menu = document.getElementById('menu');
var altura = menu.offsetTop;

window.addEventListener('scroll', function(){
    if(window.pageYOffset > altura){
        menu.classList.add('menu-fixed');
    }else{
        menu.classList.remove('menu-fixed');
    }

});

/*Sidebar*/

function toggleSideBar(){
    document.getElementById("sidebar").classList.toggle('active');
}