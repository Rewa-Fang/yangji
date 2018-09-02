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
    console.log(1111);
    
	$('#small_img .small_img_list .bd').delegate('span', 'click', function(){
		var img=$(this).attr('src');
		// $('#bigimg_src').attr('src', img).parent().attr('href', img);
        $('#bigimg_src').attr('src', img);
        console.log(img);
		$(this).addClass('on').siblings('span').removeClass('on');
	});
}