$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });


  $('.product-slider__inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

  });

  $('.slider__inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,

  });















  if ($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  }


});