const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$("nav ul li").click(function(){
	var xcoord = $(this).data("xcoord");
	
	$("nav div").stop().animate({marginLeft:xcoord}, 500, "easeInOutExpo");
	$(this).addClass("active");
	$("nav ul li").not(this).removeClass("active");
	
  });