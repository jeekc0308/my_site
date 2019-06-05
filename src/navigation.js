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
})();

export default nav;