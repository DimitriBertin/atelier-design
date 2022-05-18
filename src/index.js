import 'swiper/css'
import './styles/index.scss'
import Swiper, { Navigation } from 'swiper'

// STICKY ----------
const header = document.querySelector('header')
const image = document.querySelector('[js-parallax]')

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    header.classList.add('is-fixed')
  } else {
    header.classList.remove('is-fixed')
  }

  // Parallax
  image.style.transform = `translateY(${window.scrollY * 0.05}px)`
})

// SLIDER -------------
const swiper = new Swiper('[js-slider]', {
  slidesPerView: 1,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '[js-btn-next]',
    prevEl: '[js-btn-prev]',
  },
})

// APPARITION --------------------------
const blocks = document.querySelectorAll('[js-scroll-animation]')

var options = {
  root: document,
  rootMargin: '0px',
  threshold: 0.25
}

for (const block of blocks) {
  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      block.classList.add('is-appear')
      observer.disconnect()
    }
  },options)
  observer.observe(block)
}


// Menu ----------------------
const menuButton = document.querySelector('[js-menu-button]')
const menu = document.querySelector('[js-menu]')
let toggleOpen = false
menuButton.addEventListener('click', () => {
  toggleOpen = !toggleOpen
  if (toggleOpen) {
    document.body.style.overflow = 'hidden'
    menu.classList.add('is-open')
  } else {
    document.body.style.overflow = 'auto'
    menu.classList.remove('is-open')
  }
})