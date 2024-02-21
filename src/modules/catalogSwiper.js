import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const catalogSwiper = new Swiper('.catalog-swiper', {
	modules: [Navigation],
	loop: true,
	spaceBetween: 16,
	slidesPerView: 5,
	navigation: {
		prevEl: '.catalog-btn-prev',
		nextEl: '.catalog-btn-next',
	},
})
export default catalogSwiper
