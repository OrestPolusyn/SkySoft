$(function () {

  var trigger = $("#hamburger"),
    isClosed = false;

  trigger.on("click", function () {
    burgerTime();
    $(".menu").toggleClass("menu--open");
    $(".main").toggleClass("overlay");
  });

  function burgerTime() {
    if (isClosed == true) {
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      $('body').css('overflow', 'auto');
      isClosed = false;
    } else {
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      $('body').css('overflow', 'hidden');
      isClosed = true;
    }
  }

  $(".menu__item.dropdown-menu").on("click", function () {
    $(".menu__item.dropdown-menu").children(".dropdown-menu__list.menu__list").removeClass("menu__list--open");
    $(this).children(".dropdown-menu__list.menu__list").addClass("menu__list--open");

  });



  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


  $(".slider__list").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    lazyLoad: "progressive",
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
  });

  $(".timeline__list").slick({
    dots: false,
    slidesToShow: 5,
    nextArrow: '<button type="button" class ="slick-next"><svg class="timeline__icon" width="50" height="50" viewBox="0 0 512 512"><use xlink:href="images/icons/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class ="slick-prev"><svg class="timeline__icon" width="50" height="50" viewBox="0 0 512 512"><use xlink:href="images/icons/sprite.svg#prev"></use></svg></button>',
    responsive: [{
        breakpoint: 1480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });


  $(".clients__list").slick({
    arrows: false,
    dots: true,
    fade: true,
    lazyLoad: "progressive",
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    slidesToShow: 1
  });


  $(".article-box__link").on("click", function () {
    $(".article-box__link, .article-box__content").removeClass("active");
    $(this).siblings(".article-box__content").addClass("active");
    $(this).addClass("active");
  });

  $(".info__block .info__item")
    .on("click", function () {
      $(".info__block .info__item")
        .removeClass("info__item--active")
        .eq($(this).index())
        .addClass("info__item--active");
      $(".info__content-item").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("info__item--active");

  $(".faq__tab").on("click", function () {
    $(this).siblings(".faq__content").slideToggle();
    $(this).children(".faq__icon").toggleClass("open");
  });


});

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 49.22296138724512,
      lng: 31.856264242563697,
    },

    zoom: 13,

    styles: [{
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#444444",
        }, ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
          color: "#f2f2f2",
        }, ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{
          visibility: "off",
        }, ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [{
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{
          visibility: "simplified",
        }, ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{
          visibility: "off",
        }, ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{
          visibility: "off",
        }, ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{
            color: "#46bcec",
          },
          {
            visibility: "on",
          },
        ],
      },
    ],
  });

  var icon = {
    url: "images/icons/map-marker-contact.svg",
    scaledSize: new google.maps.Size(50, 50),
  };

  var marker = new google.maps.Marker({
    position: {
      lat: 49.22296138724512,
      lng: 31.856264242563697,
    },

    map: map,

    title: "Наш маркер: ТОВ 'Скай Софт'",

    icon: icon,

    maxWidth: "50",
    height: "50",
  });

  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">ТОВ "Скай софт"</h3>' +
    '<div id="bodyContent">' +
    "<p>ТОВ 'Скай софт'</p>" +
    '<p><b>Веб-сайт:</b> <a href="https://skysoft.com.ua/" target="_blank">skysoft.com.ua</a>' +
    "</p>" +
    "</div>" +
    "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400,
  });

  // marker.addListener("click", function () {
  infowindow.open(map, marker);
  // });
}