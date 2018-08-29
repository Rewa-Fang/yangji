(function () {
    
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