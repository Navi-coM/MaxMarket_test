$(function(){
	$('#openModal1').click(function(){
		$('#modalWindow1').css('display','flex');
	});
	$('.formModalBlockWindow__close').click(function(){
		$('#modalWindow1').css('display','none');
	});
});


$(function(){
	$('#openModal2').click(function(){
		$('#modalWindow2').css('display','flex');
	});
	$('.formModalBlockWindow__close').click(function(){
		$('#modalWindow2').css('display','none');
	});
});
