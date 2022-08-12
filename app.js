$(document).ready(function () {
	//For the Navbar to appear on Scroll
	$(window).scroll(function () {
		if (this.scrollY > 200) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}
	});

	//For interactive typing of "Im Developer"
	var typed = new Typed('.typing-1', {
		strings: ['Developer', 'Freelancer', 'RockClimber'],

		typeSpeed: 80,
		backSpeed: 60,
		loop: true,
	});

	var typed = new Typed('.typing-2', {
		strings: ['Developer', 'Freelancer', 'RockClimber'],

		typeSpeed: 80,
		backSpeed: 60,
		loop: true,
	});
});
