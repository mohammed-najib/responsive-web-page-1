const showMenu = (toggleID, navId) => {
    const toggle = document.getElementById(toggleID);
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('menu-toggle', 'nav-menu');