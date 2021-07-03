let menuOpen = false;

const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

menuBtn.addEventListener('click',() =>{

    document.body.classList.toggle('active');

});