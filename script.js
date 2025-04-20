const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelectorAll('.nav-links');


menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}


//   Link btn  //

function redirectTo(url) {
    window.location.href = url;
}
