/* JS for Swiper */
const swiper = new Swiper('.swiper', {
    mousewheel: true,
    direction: 'vertical',
    speed: 1700,
    parallax: true
})

/* JS for main title */
document.querySelectorAll('.header-content h1').forEach(e => {
	e.innerHTML = e.textContent.replace(/ (-|#|@){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m => {
		return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
	})
	e.querySelectorAll('.letter').forEach(function(l, i) {
		l.setAttribute('style', `z-index: -${ i }; transition-duration: ${ i/5 + 1 }s`)
	})
})

/* JS for sliderItmes */
swiper.on('slideChange', function() {
	document.querySelectorAll('.header-content__slide').forEach(function(e, i) {
		return swiper.activeIndex == i ? e.classList.add('active') : e.classList.remove('active')
	})
})

/* JS for toggle_menu */
document.addEventListener('DOMContentLoaded', function() {
	const menuButton = document.querySelector('.anim-menu-btn');
	const closeButton = document.querySelector('.close-menu');
	const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

	if (!menuButton) {
		console.error('Menu button not found');
		return;
	}

	if (!closeButton) {
		console.error('Close button not found');
		return;
	}

	if (!mobileMenuOverlay) {
		console.error('Mobile menu overlay not found');
		return;
	}

	menuButton.addEventListener('click', function() {
		mobileMenuOverlay.classList.toggle('show');
	});

	closeButton.addEventListener('click', function() {
		mobileMenuOverlay.classList.remove('show');
	});
});