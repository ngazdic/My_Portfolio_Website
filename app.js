$(document).ready(function () {
	//For the Navbar to appear on Scroll
	$(window).scroll(function () {
		if (this.scrollY > 200) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}
	});
});
