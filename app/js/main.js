// Hamburger Menu
const btnHamburger = document.querySelector('#hamuburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function () {

    if (header.classList.contains('open')) { // Close hamburger
        body.classList.remove('noscroll');
        header.classList.remove('open');

        fadeElems.forEach(function (element) {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
            element.classList.add('has-fade');

        });

    } else { // Open hamburger
        body.classList.add('noscroll');
        header.classList.add('open');

        fadeElems.forEach(function (element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
            element.classList.remove('has-fade');

        });
    }
});





//footer current year with this following
//document.getElementById("year").innerHTML = new Date().getFullYear();