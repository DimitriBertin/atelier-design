import 'swiper/css'
import './styles/index.scss'
import Swiper, { Navigation } from 'swiper'

const swiper = new Swiper('[js-slider]', {
  slidesPerView: 1,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '[js-btn-next]',
    prevEl: '[js-btn-prev]',
  },
})