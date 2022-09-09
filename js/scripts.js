/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
    /*adding an introductive loading screen, that contains the audio for this style*/
  });
/*$(document).ready(function(){
    $(".content").addClass("d-none");
    $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen" style="background-color: white;"><p style="opacity:0.33;">Click anywhere to start cycling</p><video id="videohomepage" alt="Work music video about bicycle illustration for Palgou Monster by PANICMONK" loop autoplay playsinline="true" muted ><source src="PALGOU - MONSTER (estratto).mp4"></video><h1>BikeOntology</h1></div></div><div class="col-lg-8 align-self-baseline"> </div>');


    timeout = setTimeout(function(){
        document.getElementById('loadingscreen').style.opacity=0;
      }, 12000);
    /*clearing the loadingscreen by a click of the user
    $(".loadingscreen").click(function(){
      clearTimeout(timeout);
      document.getElementById('loadingscreen').style.opacity=0;
      $(".content").removeClass("d-none");
      $("#loadingscreen").remove();
    });
}); */


//ScrollMagic attivation
$(document).ready(function(){

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// build a scene for textual part
var oursScene = new ScrollMagic.Scene({
    triggerElement: '.paragraph'})
.setClassToggle('.paragraph', 'fade-in') //add class to paragraph
.addTo(controller);

// build a scene for About
var oursScene = new ScrollMagic.Scene({
    triggerElement: '.about'})
.setClassToggle('.about', 'fade-in') //add class to about section
.addTo(controller);

// build a scene for Documentation
var oursScene = new ScrollMagic.Scene({
    triggerElement: '.documentation'})
.setClassToggle('.documentation', 'fade-in') //add class to documentation section
.addTo(controller);

// build a scene for Editing with Protegé
var oursScene = new ScrollMagic.Scene({
    triggerElement: '.editing'})
.setClassToggle('.editing', 'fade-in') //add class to editing section
.addTo(controller);

// build a scene for Ontology
var oursScene = new ScrollMagic.Scene({
    triggerElement: '.ontology'})
.setClassToggle('.ontology', 'fade-in') //add class to ontology section
.addTo(controller);

// build a scene for future developments
var oursScene = new ScrollMagic.Scene({
    triggerElement: '.future'})
.setClassToggle('.future', 'fade-in') //add class to future developments section
.addTo(controller);
})

//CQ with SPARQL Results
$(document).ready(function(){

	$('.element-card').on('click', function(){

		if ( $(this).hasClass('open') ) {
			$(this).removeClass('open');
		} else {
			$('.element-card').removeClass('open');
			$(this).addClass('open');
		}

	});

});

//INGRANDIMENTO MAPPE
$('.zoom').click(function() {

   var imageUrl = $(this).attr('src');
   var imageHeight = $(this).prop('naturalHeight');
   var windowHeight = $(window).height();

   if (imageHeight > windowHeight) {
     var optionalProperty = '; background-size: contain';
   } else {
     var optionalProperty = '';
   }
$('body').prepend('<div class="zoomOpen"><div style="background-image: url(' + imageUrl + ')' + optionalProperty + '"></div></div>');
$('html').css('overflow', 'hidden');
$('.zoomOpen').animate({
      opacity: 1,
      zoom: 1
      }, 100, function() {
         $(this).click(function() {
            $(this).animate({
               opacity: 0,
               zoom: .85
            }, 250, function() {
            $(this).remove();
         })
      })
   })
})
