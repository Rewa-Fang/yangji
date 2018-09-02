(function () {
    case_gallery();
})();
function signIn() {
    document.getElementById("mask").style.display = "block";
    document.getElementById("signinForm").style.display = "block";
}
function signUp() {
    document.getElementById("mask").style.display = "block";
    document.getElementById("signupForm").style.display = "block";
}
function closeForm(){
    document.getElementById("mask").style.display = "none";
    document.getElementById("signinForm").style.display = "none";
    document.getElementById("signupForm").style.display = "none";
}

function case_gallery(){
    
	$('#small_img .small_img_list .bd').delegate('span', 'click', function(){
		var img=$(this).attr('pic');
		// $('#bigimg_src').attr('src', img).parent().attr('href', img);
        $('#bigimg_src').attr('src', img);
		$(this).addClass('on').siblings('span').removeClass('on');
	});
}

function showMessage(){
    $('#mask').show();
    if(localStorage.userInfo){
        $('#messageForm').show();
    }else{
        $('#messageFormNoLogin').show();
    }
}