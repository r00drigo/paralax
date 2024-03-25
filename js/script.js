let sol = document.getElementById('sol');
let nuven1 = document.getElementById('nuven1');
let nuven2 = document.getElementById('nuven');
let scroll = document.getElementById('scrolldown');
let arbustoT1 = document.getElementById('arbusto-t1');
let arbustoT2 = document.getElementById('arbusto-t2');
let arbustoF1 = document.getElementById('arbusto-f1');
let arbustoF2 = document.getElementById('arbusto-f2');





window.addEventListener('scroll', () => {
    let value = window.scrollY;

    sol.style.top = value *  .6 + 'px';
    nuven1.style.left = value *  - 1.5 + 'px';
    nuven.style.left = value *  .5 + 'px';
    arbustoF1.style.left = value *  - .3 + 'px';
    arbustoF2.style.left = value *   .3 + 'px';
    arbustoT1.style.top = value *   -.1 + 'px';
    arbustoT2.style.top = value *   -.1 + 'px';



    




    scroll.style.bottom = value *  1 + 'px';

});