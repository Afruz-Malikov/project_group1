import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
const swiper = new Swiper('.swiper', {
	modules: [Navigation, Pagination],
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.products-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.products-btn-next',
		prevEl: '.products-btn-prev',
	},
})

export default swiper
