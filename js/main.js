let landingPage = document.querySelector(".home");
let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];
landingPage.style.backgroundImage = 'url("img/home1.jpg)';
let randomNumber = Math.floor(Math.random() * imageArray.length );
let randomOption = true;
let homeTitle = document.getElementById("homeTitle");

let header = document.querySelector("header");
let navbar = document.querySelector(".navbar");
const menuIcons = document.querySelectorAll('.menu-icon');

//change home background img
  //set initail values
  landingPage.style.backgroundImage = 'url("img/home3.jpg")';
  homeTitle.innerText="Spider-Man";
function randomizeImgs(){
  if( randomOption === true){
    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imageArray.length );
      landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
      if(randomNumber === 0)
        homeTitle.innerText="Venom";
      else if(randomNumber === 1)
        homeTitle.innerText="Avengers";
      else
        homeTitle.innerText="Spider-Man";
    
    }, 4000);
  }
}
randomizeImgs();

//change active navbar tab
menuIcons.forEach((menuIcon) => {
  menuIcon.addEventListener('click', () => {
    menuIcons.forEach((m)=> m.classList.remove('active'));
    menuIcon.classList.add('active'); // Toggle the 'active' class
  });
});

//change navbar style while scrolling
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  navbar.classList.toggle("top", window.scrollY < 50);
});

