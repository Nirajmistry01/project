/* navbar */
window.addEventListener("scroll",()=> {
    const header = document.body.getBoundingClientRect().top;
    if (this.scrollY > 400) {
        document.getElementsByClassName("header-one")[0].classList.add("header-fixed")
    } else {
        document.getElementsByClassName("header-one")[0].classList.remove("header-fixed")
    }
    setTimeout(3000);
})
/* slider-2 */
jQuery(document).ready(function($) {
"use strict";
$('#customers-testimonials').owlCarousel( {
		loop: true,
		center: true,
		items: 3,
		margin: 3,
		autoplay: true,
    nav:true,
		autoplayTimeout: 1600,
    autoplayHoverPause:true,
    stopOnHover:true,
		smartSpeed: 850,
	});
});
