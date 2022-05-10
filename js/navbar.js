// Show and Hide Menu bar
let navLinks = document.getElementById('navLinks')
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener("click",function(){
  // linksContainer.classList.toggle("show-links") this is not a dynamic way
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height
  // containerHeight = 0 to check whether it's working correctly
  // linksHeight so that the nav bar will open dynamically
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0;
  }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector(".top-link")
window.addEventListener("scroll",function(){
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav")
  } else {
    navbar.classList.remove("fixed-nav")
  }

  if (scrollHeight>500){
    topLink.classList.add("show-link")
  } else {
    topLink.classList.remove("show-link")
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link")
scrollLinks.forEach(function(link){
  link.addEventListener("click",function(e){
    //prevent default
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1)
    // we can get the #id for the href we press
    // if we slice it, we remove the #
    const element = document.getElementById(id)
    // get the position of that element by using offsetTop
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains("fixed-nav") //Either true or false
    let position = element.offsetTop - navHeight
    if(!fixedNav){
      position = position - navHeight
    }
    // While in smaller screen, container height has to be subtracted too
    if (navHeight>82){
      position = position + containerHeight
    }

    // if we console log position, we can get the pixels
    window.scrollTo({
      left:0, top:position
    })
    linksContainer.style.height=0;
  })
})