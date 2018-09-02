(function () {
    case_gallery();
})();
function signIn() {
    $('#messageFormNoLogin').hide();
    $('#mask').show();
    $('#signinForm').show();
    $('#signupForm').hide();
}
function signUp() {
    $('#mask').show();
    $('#signupForm').show();
    $('#signinForm').hide();
}
function closeForm(){
    $('#mask').hide();
    $('#signupForm').hide();
    $('#signinForm').hide();
}

function case_gallery(){
	$('#small_img .small_img_list .bd').delegate('span', 'click', function(){
		var img=$(this).attr('pic');
		// $('#bigimg_src').attr('src', img).parent().attr('href', img);
        $('#bigimg_src').attr('src', img);
		$(this).addClass('on').siblings('span').removeClass('on');
	});
}
$('.category').on('click',function(){
    $(this).addClass('cur').siblings('li').removeClass('cur');
})
function showMessage(){
    $('#mask').show();
    if(localStorage.userInfo){
        $('#messageForm').show();
    }else{
        $('#messageFormNoLogin').show();
    }
}