document.addEventListener("DOMContentLoaded", function () {
    const sidebarButton = document.querySelector("[data-drawer-toggle='default-sidebar']");
    const sidebar = document.getElementById("default-sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const footer = document.querySelector('footer');
    //Open
    sidebarButton.addEventListener("click", function () {
        sidebar.classList.toggle("translate-x-0");
        sidebarOverlay.classList.toggle("opacity-50");
    });
    //Close
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !sidebarButton.contains(event.target)) {
            if (sidebarOverlay.classList.contains("opacity-50")) {
                footer.classList.toggle('hidden');
            }
            sidebar.classList.remove("translate-x-0");
            sidebar.classList.remove("border-r");
            sidebarOverlay.classList.remove("opacity-50");
        }
    });
    //Hide mobileFooter
    window.addEventListener('resize', adjustSidebarHeight);
    window.addEventListener('load', adjustSidebarHeight);

    sidebarButton.addEventListener('click', () => {
        footer.classList.toggle('hidden');

        if (footer.classList.contains('hidden')) {
            sidebar.classList.add('h-full');
        } else {
            sidebar.classList.remove('h-full');
        }
    });
});
function adjustSidebarHeight() {
    if (window.innerWidth >= 768) {
        var windowHeight = window.innerHeight;
        var footerHeight = document.querySelector('footer').offsetHeight;
        var adjustedHeight = windowHeight - footerHeight;

        document.getElementById('default-sidebar').style.height = adjustedHeight + 'px';
    }
}