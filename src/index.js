import 'swiper/css'
import './styles/index.scss'
import Swiper, { Navigation } from 'swiper'

// STICKY ----------
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    console.log('OK fixed')
    header.classList.add('is-fixed')
  } else {
    header.classList.remove('is-fixed')
  }
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

// APPARITION
const blocks = document.querySelectorAll('[js-scroll-animation]')

// Menu
const menuButton = document.querySelector('[js-menu-button]')
const menu = document.querySelector('[js-menu]')
