$(document).ready(function(){
	$(".fmc-nav-toggle").click(function(){
		$(".fmc-nav-toggle").toggleClass("fmc-nav-toggle-active");
		$(".fmc-nav-container").toggleClass("fmc-pull");
		$(".fmc-content").toggleClass("fmc-pull");
		$(".fmc-nav-link").toggle();
	});
	$(".fmc-toggle-back").click(function(){
		$(".fmc-nav-toggle").toggleClass("fmc-nav-toggle-active");
		$(".fmc-nav-container").toggleClass("fmc-pull");
		$(".fmc-content").toggleClass("fmc-pull");
		$(".fmc-nav-link").toggle();
	});
});