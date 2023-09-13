export function burger() {
    let burgerOpen = document.querySelector('.burger--open');
    let burgerList = document.querySelector('.burger--list');
    let burgerItems = document.querySelectorAll('.burger--item');

    burgerOpen.addEventListener('click', function (e) {
        burgerList.classList.toggle('_active');
    });
    window.addEventListener('scroll', function (e) {
        burgerList.classList.remove('_active');
    });
    document.addEventListener('click', function (e) {
        let targetOpen = e.target.closest('.burger--open');
        if (!targetOpen) {
            burgerList.classList.remove('_active');

        }
    });

}