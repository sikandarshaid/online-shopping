$('.our-regular-product-wrap').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	slidesToShow: 4,
	slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

// client-textimonils-slider
$('.client-testimonils-slider').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });