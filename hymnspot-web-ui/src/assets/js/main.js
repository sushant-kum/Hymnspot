// document.onreadystatechange = function (e) {
//     console.log(document.readyState);
//     if (document.readyState == "interactive") {
//         document.getElementById("loader-img").style.display = "block";
//         var bar1 = new ProgressBar.Path('#animated-path1', {
//             easing: 'easeOut',
//             duration: 1400
//         });
//         bar1.set(0);
//         bar1.animate(1.0);

//         var bar2 = new ProgressBar.Path('#animated-path2', {
//             easing: 'easeInOut',
//             duration: 1400
//         });
//         bar2.set(0);
//         bar2.animate(1.0);
//     }
// }
$(document).ready(function () {
    if (document.readyState == "interactive") {
    document.getElementById("loader-img").style.display = "block";
    var bar1 = new ProgressBar.Path('#animated-path1', {
        easing: 'easeOut',
        duration: 1400
    });
    bar1.set(0);
    bar1.animate(1.0);

    var bar2 = new ProgressBar.Path('#animated-path2', {
        easing: 'easeInOut',
        duration: 1400
    });
    bar2.set(0);
    bar2.animate(1.0);
}
});

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