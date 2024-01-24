/*=============== EXPANDIR MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
        });
    }
}

showMenu('header-toggle', 'nav-menu');

/*=============== ACTIVE AND REMOVE SUB-MENU ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    /* if (this.classList.contains('dropdown__link')) {
        console.log(this.parentElement);
        //navLink.forEach(n => n.addEventListener('click', linkAction));
        //this.nextElementSibling.style.display="block";
    } */

    if (this.parentElement.classList.contains('nav__item')) {
        console.log(this.parentElement);
        this.classList.add('active');
    }

}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*
function linkAction() {
    //navLink.forEach(n => n.classList.remove('active'));
    closeAllSubMenu;
    this.classList.add('active');

    if (this.classList.contains('dropdown__link')) {
        console.log(this.parentElement);
        navLink.forEach(n => n.addEventListener('click', linkAction));
        this.nextElementSibling.style.display="block";
    }
}

navLink.forEach(n => n.addEventListener('click', linkAction));
*/
