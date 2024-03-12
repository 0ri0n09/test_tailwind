document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(containerId, componentUrl, callback) {
        const container = document.getElementById(containerId);
        fetch(componentUrl)
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
                if (typeof callback === 'function') {
                    callback();
                }
            });
    }

    function loadScript(scriptUrl, callback) {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptUrl;
        script.onload = callback;
        document.head.appendChild(script);
    }

    loadComponent("sidebar-container", "./components/Sidebar.html", function() {
        });
    loadScript("./Sidebar.js", function () {

    });
});
