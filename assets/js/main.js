/* Responsive Natigation Menu */
var header = document.querySelector('header');
var navMenu = header.querySelector('.nav-header-menu');
var hamburberMenu = header.querySelector('.hamburger-icon')
var menuLibraryItem=navMenu.querySelector('.nav-library-item');

hamburberMenu.addEventListener('click', (event) => {
    header.classList.toggle('open');
});

menuLibraryItem.addEventListener('click',(event)=>{
    event.currentTarget.classList.toggle('active');
})


