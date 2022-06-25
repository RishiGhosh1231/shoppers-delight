// Wishlist Icon
const wishlistIcon = document.querySelectorAll('.featured-products .product-wishlist');

for(let i = 0; i < wishlistIcon.length; i++){
  wishlistIcon[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}

const dotdWishlistIcon = document.querySelectorAll('.deal-otd-item .product-wishlist');

for(let i = 0; i < dotdWishlistIcon.length; i++){
    dotdWishlistIcon[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}

// OFFER COUNTDOWN

// Set the date we're counting down to
var countDownDate = new Date("July 10, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".offer-text:last-child h4").innerHTML = "EXPIRED";
  }
}, 1000);

// Carousel Control
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const customNextBtn = document.getElementById('right-arrow');
const customPrevBtn = document.getElementById('left-arrow');

customNextBtn.addEventListener('click',function(){
  nextBtn.click();
});
customPrevBtn.addEventListener('click',function(){
  prevBtn.click();
});

// Toggle Nav
const toggleSearchBtn = document.getElementById('toggle-search');
const toggleSearchField = document.querySelector('.toggle-search');
const toggleSearchInput = document.querySelector('.toggle-search input');

const toggleBtn = document.querySelector('.toggle-btn');
const toggleNav = document.querySelector('.toggle-nav');

toggleSearchBtn.addEventListener('click',function(){
  toggleSearchInput.classList.toggle('active');
  setTimeout(() => {
    toggleSearchField.classList.toggle('active');
  }, 700);
});

toggleBtn.addEventListener('click',function(){
  toggleNav.classList.toggle('active');
});

// Featured Products
const featuredNav = document.querySelectorAll('.featured-nav ul li');
const featuredProducts = document.querySelectorAll('.featured-products .my-row');

for(let i = 0; i < featuredNav.length; i++){
  featuredNav[i].addEventListener('click', function(){
    for(let j = 0; j < featuredProducts.length; j++){
      featuredProducts[j].classList.remove('active');
    }
    const id = this.getAttribute('data-id');
    featuredProducts[id].classList.add('active');
    
    for(let u = 0; u < featuredNav.length; u++){
      featuredNav[u].classList.remove('active');
    }
    this.classList.add('active');
  });
}
