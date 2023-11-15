// NAV BAR RESPONSE
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// MEET THE TEAM IMAGE CAROUSEL
 var element5 = document.getElementById('team-carousel');
 if (element5 !== null){
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const imageCount = images.length;
  const imageWidth = 180; // set this to the desired image width
  const padding = 20; // adjust this value as needed
  const visibleWidth = window.innerWidth; // subtract the slider margins from the viewport width
  const sliderMargins = visibleWidth*0.2;
  const totalWidth = (imageWidth + padding) * images.length; // calculate the total width of all the images in a slider
  const translate = (imageWidth + padding*2); // calculate how much each time the images move to the left
  const maxSlides = Math.floor((totalWidth-(visibleWidth-sliderMargins))/translate); // calculate the number of times the images need to move to the left to show all
  let counter = 0;

  
  function slide() {
    if (counter === maxSlides) { // check if the max slides have been reached
      counter = 0;
    } else {
      counter++;
    }
    const translateX = -counter * translate; // calculate the translateX value based on the current slide
    slider.style.transform = `translateX(${translateX}px)`; // apply the translateX value to the slider
  }
  
  setInterval(slide, 3000); //Every 3 seconds the images will move

  //console.log(images)
  //console.log((imageWidth + padding*2)*imageCount)
  //console.log(visibleWidth + " visibleWidth")
  //console.log(sliderMargins+  " sliderMargins")
  //console.log(images.length + " image legnth")
  //console.log(maxSlides +"Maximum slides")
 }

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });