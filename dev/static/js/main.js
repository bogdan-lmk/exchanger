$(document).ready(function () {
    svg4everybody({});
});


$('.nav-link').click(function(e) {
    e.preventDefault();
    $(this).addClass('nav-link--active').siblings('.nav-link').removeClass('nav-link--active');
});




$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
      $('.mobile-content-overlay').toggleClass('mobile-content-overlay--active');
      $('body').toggleClass('overflow');
	});
});

$('[data-tab]').on('click', function (e) {
    $(this).addClass('reg-tab-link--active').siblings('.reg-tab-link').removeClass('reg-tab-link--active');
  $(this).closest('.reg-tab-wrap').siblings('[data-content=' + $(this).data('tab') + ']').addClass('reg-tab-content--active').siblings('[data-content]').removeClass('reg-tab-content--active')
  e.preventDefault()
})
