import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const reviewSwiper = new Swiper('.review-swiper', {
	modules: [Navigation],
	loop: true,
	spaceBetween: 32,
	slidesPerView: 4,
	navigation: {
		prevEl: '.review-btn-prev',
		nextEl: '.review-btn-next',
	},
})
export default reviewSwiper
