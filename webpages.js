
import browser_action from './launch.json' assert { type: json}

console.log(browser_action)


let sortuslink =document.getElementsByClassName("sortus-data-reselling")

sortuslink.addEventListener("onclick", function sortusLink(){
  
})

function reveal (){
  let reveals = document.querySelectorAll(".reveal")
  for(let i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight
    let elementTop = reveals[i].getBoundingClientRect().top
    let elementVisible = 150;
    if(elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    } else {
      reveals[i].classList.remove("active")
    }
  }
}
window.addEventListener("scroll", reveal)
reveal()

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




/*const topNavigationBar = document.getElementById("top-navigation")
const aboutUs = document.getElementById("about")
const notes = document.getElementById("notes")
const vision = document.getElementById("sortus-vision")
const visionNotes = document.getElementById("vision-notes")
const emailUs = document.getElementById("email-us")
const topServices = document.getElementById("top-services")
const dataLink = document.getElementById("data")
const serverLink = document.getElementById("server-link")
const cameraLink = document.getElementById("camera-link")
const technologyLink = document.getElementById("technology-link")
const techLink = document.getElementById("tech-link")
const solarLink = document.getElementById("solar-link")
const callCenterLink = document.getElementById("callCenter-link")
const cloudLink = document.getElementById("cloud-link")
const footerText = document.getElementById("footer-text")
const pay = document.getElementById("payFor")
const cableInternet = document.getElementById("cable-internet")
const headingOne = document.getElementById("heading")
const cableText = document.getElementById("cable-text")



cableText.textContent =  `At Sortus Networks, we offer the best Inernet cable service's. 
We give you the extra benefit of providing maintenance service's that best suit's your budget. 
We offer the best maintenance service's by ensuring you`
headingOne.textContent = `Sortus maintenance Services`
cableInternet.textContent = `Internet cable/Fibre maintenance`
aboutUs.textContent = `About Sortus Technology`
notes.textContent = `Sortus Netorks is an IT/Telecomunications company. We are based in Uganda.
We understand our customer needs and take an extra effort in designing, creating, enhancing and managing and providing IT technology solutions.`
vision.textContent = `Our approach is unique because we deliver end-to-end solutions within complex, fully intergrated multy-vendor environments. 
We take the time to understand the individual business issues of each of our customer's to ensure that their information technology strategy position them to maintain leadership in their respective markets.`
visionNotes.textContent = `Our Vision`
//emailUs.textContent = `Email Us`
topServices.textContent = `Our Services`
dataLink.textContent = `Data Reselling`
serverLink.textContent = `IT Networking`
cameraLink.textContent = `CCTV Camera installation`
technologyLink.textContent = `Network maintanence`
techLink.textContent = `POS System Setup`
solarLink.textContent = `Solar Installation`
callCenterLink.textContent = `Call Center Solution`
cloudLink.textContent = `Web Development`
footerText.textContent = `Get in touch`
pay.textContent = `Pay for your services`




//Top Navigation Bar code//
/*topNavigationBar.addEventlister("click", function topNavigation1(){
    let topNavigation = document.getElementById("top-navigation")
    if (topNavigation.className === "top-navigation"){
        topNavigation.className += "responsive"
    } else {
        topNavigation.className = "top-navigation"
    }
})
//image slider//
let slideIndex = 0
//image = ["sortus images.jpeg","technology.jpg","african-image.jpeg","african-technology.jpeg","technology-2.jpeg"]
function imagesInput(){
  let img = ""
  for(let i = 0; i < images.length; i++ ){
    let images = document.getElementById("image1")
    images[i].style.display = "none";
    slideIndex = 18
  } 
  slideIndex++;
  if(slideIndex > images.length){
    slideIndex = 1
  }
  images[slideIndex - 1].style.display = "block";
        setTimeout(imagesInput, 4000); // Change image every 4 seconds
}
*/
