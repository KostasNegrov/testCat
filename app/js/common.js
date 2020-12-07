jQuery(document).ready(function ($) {
  
   /* Кнопка burger. Добавляет убирает класс */
  $('.burger, .overlay ').click(function(event){
    $('.burger, .header__nav').toggleClass('active-burger');
    $('.overlay').toggleClass('show');
  });
  
  /* этот код скрывает меню при клике на ссылку */
  if( $(window).width() < 1024) {
    $('.header__menu li a').click(function(e) {
      e.preventDefault();
      $('.header__nav').toggleClass('active-burger');
      $('.overlay').toggleClass('show');
    });
  };

  /* button upstairs */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 800);
	});


 
  
 

});



