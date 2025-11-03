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

// active header underline

document.addEventListener("DOMContentLoaded", function () {
  // Get current path (excluding domain/query/hash)
  var path = window.location.pathname.replace(/\/$/, "");
  // Get all nav links
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(function (link) {
    // Build a normalized href to compare (strip trailing slash)
    var href = link.getAttribute("href");
    if (!href) return;

    // If href is relative, make it absolute for comparison
    var linkPath = href.split("?")[0].replace(/\/$/, "");
    // Compare the file/route to activate the link
    if (linkPath === "" && path === "/pure_fuel") {
      link.classList.add("active");
    } else if (path.endsWith(linkPath) && linkPath !== "") {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// show-more

$(".tab-pane").each(function () {
  $(this).find(".tab-row").hide().first().show();
});

$(".show-more").click(function (event) {
  event.preventDefault();
  var $this = $(this);
  var tabPane = $this.closest(".tab-pane");
  var rows = tabPane.find(".tab-row");

  if ($this.text() === "Show More") {
    rows.slideDown();
    $this.text("Show Less");
  } else {
    rows.hide().first().show();
    $this.text("Show More");
  }
});
