$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 },
    },
  });
});


//  document.getElementById("sidebarToggle").addEventListener("click", function () {
//     document.getElementById("sidebar").classList.toggle("active");
//   });
