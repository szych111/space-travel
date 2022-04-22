const navBtn = document.querySelector('.mobile-nav-toggle')
const navBar = document.querySelector('.primary-navigation')

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('open')
    navBtn.classList.toggle('open')
}
)