

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll(".child")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;

//showing or hiding icons according to carousel scroll Left value
const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;//getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    //observe this section
let firstImgWidth = firstImg.clientWidth + 1; 
    icon.addEventListener("click", () => {
        //if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
        setTimeout(() => showHideIcons(), 60); //calling show or hide after 60ms
    })
})

const dragStart = (e) => {
    //updating global variables value on mouse down event
     isDragStart = true;
     prevPageX = e.pageX || e.touches[0].pageX;
     prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //scroll images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
   carousel.scrollLeft = prevScrollLeft - positionDiff;
   showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);



/*let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function(){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        })

        
}); */


// Function to check if element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to start animation
  function startAnimation() {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 5000;
  
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      });
    });
  }
  
  // Attach scroll event listener
  window.addEventListener("scroll", function () {
    // Set the desired scroll position to trigger the animation
    var scrollPosition = 500; // Adjust this value according to your needs
  
    // Check if the scroll position is reached
    if (window.scrollY >= scrollPosition) {
      // Start the animation
      startAnimation();
  
      // Remove the event listener to prevent multiple trigger
      window.removeEventListener("scroll", arguments.callee);
    }
  });
  

 // Wait for the document to fully load

