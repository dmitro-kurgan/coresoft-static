import '../components/scss/style.scss';

import '../components/js/bootstrap.min'

import 'slick-carousel';

var slickBanner = $('.slick-banner')

slickBanner.slick({
	autoplay: 1500,
	fade: true,
	arrows: false,
	dots: true
});

if(document.getElementById('year')) {
	$(function showYear() {
		var date = new Date();
		var year = date.getFullYear();
		var yearNow = document.getElementById('year')
		yearNow.innerHTML = (year)
	});
}

$(function accordionHeader() {
	var acc = document.getElementsByClassName("header__menu-click");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  });
	}
});

$(function accordionFooter() {
	var acc = document.getElementsByClassName("footer__menu-click");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  });
	}
});