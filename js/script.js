function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("cornerBtn").style.display = "block";
    } else {
        document.getElementById("cornerBtn").style.display = "none";
    }
}

// Set the date we're counting from (change this to the start date of your count-up)
var countUpDate = new Date("Nov 3, 2014 07:00:00").getTime();

// Update the count up every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the elapsed time since the count-up date
  var elapsedTime = now - countUpDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  // Output the result in an html element
  document.getElementById("displaytimer").innerHTML = days + " days, " + hours + " hours, "
  + minutes + " minutes, " + seconds + " and seconds ";

}, 1000);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let intIndex = 0

function showImage(i) {
    intIndex += i;

    let images = document.getElementsByClassName('image');
    let dot = document.getElementsByClassName('dot');

    for (n = 0; n < images.length; n++) {
        images [n].style.display = "none";
        dot[n].className = dot[n].className.replace(" active", "");
    }

    if (intIndex > images.length -1) {
        intIndex = 0;
    }
    if (intIndex < 0) {
        intIndex = images.length -1;
    }

    images[intIndex].style.display = "block";
    dot[intIndex].className += " active";
}

// slide show code 
var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);


function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  


  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
  dots[slideshow.currentSlideIndex-1].className += " active";
}
