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
$(document).ready(function(){
    $(".content").addClass("d-none");
    $("body").prepend('<div class="container loadingscreen d-block" id="loadingscreen"><p style="opacity:0.33;">(Click anywhere to skip this sequence)</p><video id="videohomepage" alt="Work music video about bicycle illustration for Palgou Monster by PANICMONK" loop autoplay playsinline="true" muted ><source src="PALGOU - MONSTER (estratto).mp4"></video><h2>BikeOntology</h2></div></div><div class="col-lg-8 align-self-baseline"><a id="startcycling" class="btn btn-primary btn-xl" href="#about">Start cycling</a>div>');

    /*opening sequence, pen by Sebastian Schepis on CodePen https://codepen.io/sschepis/pen/uiHmr*/
    $("#videohomepage > h2")
    .css('opacity', 1).lettering( 'words' );
    timeout = setTimeout(function(){
        document.getElementById('loadingscreen').style.opacity=0;
      }, 12000);
    /*clearing the loadingscreen by a click of the user*/
    $(".loadingscreen").click(function(){
      clearTimeout(timeout);
      document.getElementById('loadingscreen').style.opacity=0;
      $(".content").removeClass("d-none");
    });
});
    
// to know le lenght of a drawing
// var myPath = document.getElementById("cacciavite");
// var length = myPath.getTotalLength();
// console.log("Result " + length);
