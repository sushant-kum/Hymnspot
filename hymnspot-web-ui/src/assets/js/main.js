sidebar = document.getElementById("sidebar");
overlay = document.getElementsByClassName("w3-overlay")[0];
hamburger = document.getElementsByClassName("hamburger")[0];

function sidebar_toggle() {
    if (sidebar.style.display == "block")
        sidebar_close();
    else
        sidebar_open();
}

function sidebar_close() {
    hamburger.classList.remove("is-active");
    sidebar.style.display = "none";
    overlay.style.display = "none";
    hamburger.style.left = "10px";
}

function sidebar_open() {
    hamburger.classList.add("is-active");
    sidebar.style.display = "block";
    overlay.style.display = "block";
    hamburger.style.left = "260px";
}