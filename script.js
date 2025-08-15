let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*Type typed js in google, open mattboldt one, scroll down
you will get CDN, below that there is For use directly in the browser via script tag
there copy the script query which was var typed=new Typed till typeSpeed on and change that*/

const typed = new Typed('.multiple-text', {
      strings: ['Web Developer', 'Frontend Developer','SQL Developer', 'Content Creator'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });