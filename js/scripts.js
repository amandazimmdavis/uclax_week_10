jQuery(function() {

	//let dog_out = true;

	$('#catbutton').click(function() {
		$('#catdog').addClass('imageinitial');
		$('#catdog').addClass("catimage").attr('src', 'images/nigeluse.png');
		$('#catdog').removeClass('imageinitial');
		$('#fuzzyfriend').removeClass('imageinitial');
		$('#yesno').removeClass('imageinitial');
		$('#youTubeGift').attr('src','https://www.youtube.com/embed/xbs7FT7dXYc');
		$('#exampleModalLabel').html('Cat treat');

	});
	$('#dogbutton').click(function() {
		$('#catdog').addClass('imageinitial');
		$('#catdog').removeClass("catimage").attr('src', 'images/huskyuse2.png');
		$('#catdog').removeClass('imageinitial');
		$('#fuzzyfriend').removeClass('imageinitial');
		$('#yesno').removeClass('imageinitial');
		$('#youTubeGift').attr('src','https://www.youtube.com/embed/TVPAUzoYmyU');
		$('#exampleModalLabel').html('Dog treat');

	});

	$('#yesdog').click(function() {

		$(this).prop('disabled', true);
		$('#nodog').prop('disabled', true);
		$('#giveimage').fadeOut('slow', function() {
			$('#giveimage').attr('src','images/giftopen.png');
		});
		$('#giveimage').fadeIn('slow');
		//$('#getGift').removeClass('imageinitial');
		$('#getGift').slideDown(1000);
	});

	$('#nodog').click(function() {
		$(this).prop('disabled', true);
		$('#yesdog').prop('disabled', true);
		$('#giveimage').fadeOut('slow', function() {
			$('#giveimage').attr('src','images/fire.png');
		});
		$('#giveimage').fadeIn('slow');
	});


});
