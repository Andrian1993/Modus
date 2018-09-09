$(() => {
  $('nav ul li').hover(
    function () {
      $('ul', this).stop().slideDown(400);
    },
    function () {
      $('ul', this).stop().slideUp(400);
    },
  );


  $(function () {
    for (let i = 1; i <= 16; i++) {
      const imgName = `img/portfolio/${i}.jpg`;
      const imgHolder = $('<div class="col-3 portfolio-image"></div>');
      const img = $('<img>');
      img.attr('src', imgName);
      imgHolder.append(img);
      $('.image-holder').append(imgHolder);
      console.log('hello');
    }
  }());

  const purple = $('.site-color-purple').click(
    () => {
      $('nav, .footer').css('background-color', '#B47796');
    },
  );

  const aqua = $('.site-color-aqua').click(
    () => {
      $('nav, .footer').css('background-color', '#76c7c0');
    },
  );

  const green = $('.site-color-green').click(
    () => {
      $('nav, .footer').css('background-color', '#70c570');
    },
  );


  // let button = document.getElementsByClassName('top-menu');
  // console.log(button);
  // let arr = Array.from(button);
  // console.log(arr[0]);


  // function GetText() {
  //   let innerText = $('.blog-button').text();
  //   // let symbolArray = innerText;
  //   // console.log(symbolArray);
  // }
  // console.log(GetText());




  let pageName = (window.location.pathname).replace('/', '').replace('.html', '').toUpperCase();

  let getClass = $('.home');

  getClass.each(function () {
    let innerText = $(this).text();


    if (innerText === pageName) {
      $(this).addClass('active');
    }
  })

  if (pageName === "") {
    $('.home:first').addClass('active');
  }


  var swiper = new Swiper('.swiper-container-features', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



});




// const path = window.location.pathname;
// console.log(path);


// let button = document.getElementsByTagName('blog-button');
// console.log(button);

// let buttonName = button.childNodes.length;
// console.log('button-name'+ buttonName);

// let elements = [];
// for (let i = 0; i < buttonName.length; i++) {
//   elements.push(i);
//   console.log(elements);

// }

// if (buttonName === 'BLOG') {
//     button.classList.add('active');
// }else if (buttonName === '/') {
//     button.classList.add('active');
// }
$(document).ready(() => {
  // initialize swiper when document ready
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



});




// $(document).ready(() => {
//   // Activate Carousel
//   $('.carousel #Carousel').carousel();

//   // Enable Carousel Indicators
//   $('.item').click(() => {
//     $('.carousel #Carousel').carousel(1);
//   });

//   // Enable Carousel Controls
//   $('.carousel-control-prev').click(() => {
//     $('.carousel #Carousel').carousel('prev');
//   });

//   $('.carousel-control-next').click(() => {
//     $('.carousel #Carousel').carousel('next');
//   });
// });


//------------------------------------------FEATURES PAGE SWIPER------------------------------------