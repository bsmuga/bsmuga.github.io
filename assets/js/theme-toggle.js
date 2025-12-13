window.onload = function() {
    console.log("Window fully loaded");
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        console.log("Theme toggle button found");
        themeToggle.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default action
            console.log("Theme toggle button clicked");
            if (document.body.className.includes("dark")) {
                document.body.classList.remove('dark');
                localStorage.setItem("pref-theme", 'light');
            } else {
                document.body.classList.add('dark');
                localStorage.setItem("pref-theme", 'dark');
            }
        });
    } else {
        console.log("Theme toggle button not found");
    }
};
