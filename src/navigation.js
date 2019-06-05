let nav;
(() => {
    nav = document.querySelector("#navigation");
    
    function scrollNavigation() {
        const y = window.scrollY;
        
        if (y >= (window.innerHeight - nav.clientHeight)) {
            nav.classList.add('content');
        } else {
            nav.classList.remove('content');
        }
    }

    scrollNavigation();
    window.addEventListener('scroll', scrollNavigation);

    const menu = document.getElementById('menu');
    const background = document.getElementById('background');

    document.getElementById("menu-opener").addEventListener('click', e => {
        e.preventDefault();
        background.classList.add('show');
        menu.classList.add('show');
    });
    const disappearListener = e => {
        background.classList.remove('show');
        menu.classList.remove('show');
    };
    background.addEventListener('click', disappearListener);
    for (const i of menu.querySelectorAll('a[data-to]')) {
        i.addEventListener('click', disappearListener);
    }
})();

export default nav;