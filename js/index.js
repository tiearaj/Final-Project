$(function (){

// $('.service').on('click', function(){
// 	$('.package').show();
//
// });


//Tabs for Services
    $('ul.tabs li').click(function () {
            var tabContent=$(this).attr('data-tab').split('tab')[1];
        $(this).removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#tab-content"+tabContent).addClass('current');
		
    });
	$('.service').each(function() {
		$(this).on('click', function() {
			$(this).addClass('underline');
		});
	});
	
//Contact Form
  var text_max = 150;
    $('#textarea_feedback').html(text_max + ' ' + ' characters remaining');

    $('#message').keyup(function() {
        var text_length = $('#message').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + ' ' + 'characters remaining');
        if (text_remaining < 20){
          $('#textarea_feedback').css('color', '#F2D011');
        }

        if (text_remaining == 0){
          $('#textarea_feedback').css('color', 'red');
        }
    });




$('.submit').on('click',function() {
    clearValidation();
    validateFields();
});
function clearValidation(){
    $('.form-error').remove();
}

function validateFields() {
    var inputs = $('.will-validate'),
        errors = [];

    for (var i=0; i<inputs.length; i++) {
        var input = inputs[i],
            error = '',
            validationType = $(input).data('validate');
        var inputValue = $(input).val();
        if(validationType == 'not-blank' && inputValue == ''){
            error = $(input).data('error-message');
        }else if(validationType == 'email') {
            var  validEmail = validateEmail(inputValue);
            if (!validEmail) {
            error = $(input).data('error-message');
            }
        }if(validationType == 'phone') {
           var inputValue = $(input).val();
            var  validPhone = validatePhone(inputValue);
            if (!validPhone) {
            error = $(input).data('error-message');
            }
         }

        errors.push(error);

    }


console.log(errors);
    for (var e=0;e<errors.length; e++){
		var back = $('#return');
        $('.form-errors').append('<li class="form-error">'+errors[e]+'</li>');
	}
		setTimeout(function (){
          $('.form-errors').hide();
        }, 3000);
	
	// if(errors.length = ''){	
		// $('.flip-container').hide();
		// // $('#return').show().on('click', function () {
			// // $(this).hide();
			// // $('.flip-container').removeClass('flip-go').show();
		// // });
	// }
    if (errors.length > 0){
      var name= $('#name').val();
      var email= $('#email').val();
     $('.back').append('Hi' + ' ' + name + '!' + 'Thank you for contacting us. We will review your message and contact you at' + ' ' + email);

        $('.flip-container').addClass('flip-go');
        setTimeout(function (){
          $('.flip-container').removeClass('flip-go');
        }, 3000);
        

    }
	

}
function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePhone(phone) {
    var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/; 
    return re.test(phone);
   
}



});
