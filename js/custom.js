// Show and Hide Menu
$(document).ready(function () {
  "use strict";

  $(window).scroll(function () {
    if ($(window).scrollTop() < 80) {
      $(".navbar").css({
        "margin-top": "-100px",
        opacity: "0",
      });

      $(".navbar-default").css({
        "background-color": "rgba(59, 59, 59, 0)",
      });
    } else {
      $(".navbar").css({
        "margin-top": "0px",
        opacity: "1",
      });

      $(".navbar-default").css({
        "background-color": "rgba(59, 59, 59, 0.7)",
        "border-color": "#444",
      });

      $(".navbar-brand").css({
        height: "35px",
        "padding-top": "0",
      });

      $(".navbar-nav > li > a").css({
        "padding-top": "15px",
      });
    }
  });
});

// Add Smooth Scrolling
$(document).ready(function () {
  "use strict";

  $(".nav-item, #scroll-to-top").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );

        return false;
      }
    }
  });
});
