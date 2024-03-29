document.addEventListener("DOMContentLoaded", function () {
  const sidebarButton = document.querySelector("[data-drawer-toggle='default-sidebar']");
  const sidebar = document.getElementById("default-sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const footer = document.querySelector('footer');
  const closeSidebar = document.getElementById('close-sidebar');
  const modalPromo = document.getElementById('modalPromo');
   const modalInfo = document.getElementById('modalPhInfo');

  closeSidebar.addEventListener("click", toggleSidebar);
  sidebarButton.addEventListener("click", toggleSidebar);

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !sidebarButton.contains(event.target) && !modalPromo.contains(event.target) && !modalInfo.contains(event.target)) {
      if (sidebar.classList.contains("translate-x-0")) {
          toggleSidebar();
      }
    }
  });

  sidebarButton.addEventListener('click', toggleFooter);

  window.addEventListener('resize', adjustSidebarHeight);
  window.addEventListener('load', adjustSidebarHeight);

  function toggleSidebar() {
    sidebar.classList.toggle("translate-x-0");
    sidebarOverlay.classList.toggle("opacity-50");
    footer.classList.remove("hidden");
  }

  function toggleFooter() {
    footer.classList.toggle('hidden');
    sidebar.classList.toggle('h-full', footer.classList.contains('hidden'));
  }

  function adjustSidebarHeight() {
    if (window.innerWidth >= 768) {
      var windowHeight = window.innerHeight;
      var footerHeight = footer.offsetHeight;
      var adjustedHeight = windowHeight - footerHeight;

      sidebar.style.height = adjustedHeight + 'px';
    }
  }
});
