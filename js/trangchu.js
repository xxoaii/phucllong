var imageno =1;
displayimg(imageno);

function nextimg(n){
  displayimg(imageno += n)
}

function currentSlide(n){
  displayimg(imageno = n)
}

function displayimg(n){
  var i;
  var image = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");

  if(n > image.length){
    imageno = 1;
  }
  if(n < 1){
    imageno = image.length;
   }
  for(i=0; i < image.length; i++){
    image[i].style.display = "none";
   }
  for(i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
    }
  image[imageno - 1].style.display ="block";
   dots[imageno - 1].className += " active";
  }
  setInterval(function() {
  nextimg(1);
  }, 3000);   

  var swiper = new Swiper(".slide-container", {
    slidesPerView: 5,
    spaceBetween: 20,
    sliderPerGroup: 5,
    centerSlide: "true",
    fade: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
      slidesPerView: 1,
      },
      600: {
      slidesPerView: 2,
      },
      800: {
      slidesPerView: 3,
      },
      1000: {
      slidesPerView: 4,
      },
      1240: {
      slidesPerView: 5,
      },
    },
  });

  let preveiwContainer = document.querySelector('.products-details');
  let previewBox = preveiwContainer.querySelectorAll('.preview');

  document.querySelectorAll('.product').forEach(product =>{
  product.onclick = () =>{
      preveiwContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
          preview.classList.add('active');
      }
      });
  };
  });

  previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
  };
  });
 