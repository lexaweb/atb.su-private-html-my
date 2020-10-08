$(document).ready(function () {
	if ($('.footer-top-other-links-item .mail').length > 0) {
		$(document).on( "click", ".footer-top-other-links-item .mail", function(e) {
			e.preventDefault();
			$.ajax({
				type: "POST",
				url: "/local/templates/main/inc/add_reviews.php",
				success: function(a){
					$.fancybox(a, {
						fitToView : false,
						closeBtn : false,
						padding : 0
					});
				}
			});
			return false;
		});
	}
	$(document).on("submit", "#add_reviews", function() {
		var mist=0;
		var name=$('input[name=name_popup]').val();
		var mail=$('input[name=mail_popup]').val();
		var link=$('input[name=link_popup]').val();
		var text=$('textarea[name=text_popup]').val();


		var utm_source=$('input[name=utm_source]').val();
		var utm_medium=$('input[name=utm_medium]').val();
		var utm_campaign=$('input[name=utm_campaign]').val();
		var utm_term=$('input[name=utm_term]').val();
		var utm_content=$('input[name=utm_content]').val();


		var agree='';
		agree=$('input[name=agree_in]:checked').val();
		if (agree!='y') {
			mist=mist+1;

		} else {

		}

		if(name!=''){
			$('input[name=name_popup]').removeClass("error");
		}else{
			$('input[name=name_popup]').addClass("error");
			mist=mist+1;
		}
		if (isValidEmail(mail)){
			$('input[name=mail_popup]').removeClass("error");
		}else{
			$('input[name=mail_popup]').addClass("error");
			mist=mist+1;
		}
		if(link!=''){
			$('input[name=link_popup]').removeClass("error");
		}else{
			$('input[name=link_popup]').addClass("error");
			mist=mist+1;
		}
		if(text!=''){
			$('textarea[name=text_popup]').removeClass("error");
		}else{
			$('textarea[name=text_popup]').addClass("error");
			mist=mist+1;
		}
		if(mist==0){
			$.ajax({
				type: "POST",
				url: "/local/templates/main/ajax/add_reviews.php",
				data: ( {
					"utm_source" : utm_source,
					"utm_medium" : utm_medium,
					"utm_campaign" : utm_campaign,
					"utm_term" : utm_term,
					"utm_content" : utm_content,

					"name" : name,
					"mail" : mail,
					"link" : link,
					"text" : text
				} ) ,
				success: function(msg){
					$('#err_msg').html(msg);
				}
			});
			setTimeout("$.fancybox.close()", 2000);
		}
		return false;
	});
});

function isValidEmail (email, strict)
{
	if ( !strict ) email = email.replace(/^\s+|\s+$/g, '');
	return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]+[a-z]/i).test(email);
}