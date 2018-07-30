
$(function() {
    $('.carousel').carousel({
        interval: 5000
      })
});

$(window).scroll(function(){
    if ($(this).scrollTop() > $(this).height()){
        $('.topButton').addClass('active');
    }
    else{
        $('.topButton').removeClass('active');
    }
});
$('.topButton').click(function(){
    $('html,body').stop().animate({scrollTop:0}, 'slow','swing');
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form.call").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

})
