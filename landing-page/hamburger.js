window.onload = function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        navMenu.classList.toggle("is-active");
        // console.log(",bklbjlj");
    })
}


// window.onload = function () {
//     const menu_btn = document.querySelector('.hamburger');
//     const nav = document.querySelector('.nav');
//     menu_btn.addEventListener('click', function () {
//         menu_btn.classList.toggle('is-active');
//         nav.classList.toggle('is-active');
//     })
// }