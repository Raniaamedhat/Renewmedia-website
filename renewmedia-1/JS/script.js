//////////////////////////////////////////////////////////////////////////////////////////////////////
// Simulate content loading (replace setTimeout with your actual loading process)
window.addEventListener('load', function () {
  setTimeout(function () {
    // Hide the loader and show the content
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 1000); // Simulating a 2-second loading time
});






//////////////////////navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    navbar.classList.add('black');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('black');
  }
});


//////////////////////////////////////////////////////////////////////////////////////////////////////
// Get the video element
const video = document.getElementById('myVideo');

// Play the video
function playVideo() {
  video.play();
}

// Pause the video
function pauseVideo() {
  video.pause();
}

// Stop the video (and reset to the beginning)
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}
////////////////////////////////////////////////////////OWL-CARSOUL-services page////////////////////////////////////
$(document).ready(function(){
  $('[data-carousel-id="1"]').owlCarousel({
      items:4 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
      }
  });
});
////////////////////////////////////////////////////////OWL-CARSOUL-al pages////////////////////////////////////
$(document).ready(function(){
  $('[data-carousel-id="all"]').owlCarousel({
      items:4 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
      },
  });
});
/////////////////////////////////////////////OWL-CARSOUL{ graphic - event - web - production } pages /////////////////////
$(document).ready(function(){
  $('[data-carousel-id="2"]').owlCarousel({
      items:1 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
  });
});
/////////////////////////////////////////////OWL-CARSOUL (digital marketing) pages /////////////////////
$(document).ready(function(){
  $('[data-carousel-id="3"]').owlCarousel({
      items:3,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        
    },
  });
});