$(document).ready(function(){
  $('.list').slick({
    centerMode: true,
    slidesToShow: 1,
    arrows: false,
    centerPadding: '244px',
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '100px',
        swipeToSlide: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '40px',
        swipeToSlide: true,
      }
    }
  ]

  });
});
