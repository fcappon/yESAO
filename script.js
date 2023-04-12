/* NAV BAR RESPONSE*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  /* MEET THE TEAM IMAGE CAROUSEL*/

  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  
  const imageCount = images.length;
  console.log(images)
  

  const imageWidth = 180; // set this to the desired image width
  const padding = 20; // adjust this value as needed

  console.log((imageWidth + padding*2)*imageCount)
  const sliderMargins = parseInt(getComputedStyle(slider).marginLeft) + parseInt(getComputedStyle(slider).marginRight); // get the sum of the left and right margins of the slider container
  const visibleWidth = window.innerWidth - sliderMargins; // subtract the slider margins from the viewport width
  console.log(visibleWidth)

  const totalWidth =  (imageWidth + padding*2) * images.length; // calculate the total width of all the images in a slider
  const translate = (imageWidth + padding*2); // calculate how much each time the images move to the left
 
  const maxSlides = Math.floor((totalWidth-1.25*visibleWidth)/translate); // calculate the number of times the images need to move to the left to show all
  console.log(maxSlides)

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


 