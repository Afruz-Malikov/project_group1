import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const certificatesSwiper = new Swiper('.certificates-swiper', {
	modules: [Navigation],
	loop: true,

	spaceBetween: 32,
	slidesPerView: 4,
	centeredSlidesBounds: true,
	navigation: {
		prevEl: '.certificates-btn-prev',
		nextEl: '.certificates-btn-next',
	},
})
export default certificatesSwiper
