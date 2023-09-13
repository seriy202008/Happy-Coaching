
export function accordion() {
    let accordionItems = document.querySelectorAll('.accordion--item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function (e) {
            let target = e.target.closest('.accordion--btn');
            if (target) {
                accordionItems.forEach(element => {
                    element.classList.remove('_open');
                })
                item.classList.add('_open');

            }
        });
    })
}


