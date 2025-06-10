// body-setting

 $('body').smoothScroll({
    speed: 300, // Control speed (lower = faster)
    offset: -50
  });

// navbar-setting

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector('.navbar__area');

  if (prevScrollPos > currentScrollPos) {

    navbar.style.top = "0";
  } else {

    navbar.style.top = "-60px"; 
  }

  prevScrollPos = currentScrollPos;
});

// accordion-btn-setting

$('.accordion-button').on('click', function () {
    const icon = $(this).find('.icon-toggle');
    icon.addClass('spin');
    setTimeout(() => icon.removeClass('spin'), 400);
});

// owl-carousel

 $('.testimonial-section__carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
});


//scroll-to-top

document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.querySelector(".scrollToTop");
  const rootElement = document.documentElement;
  const bodyElement = document.body;
  const progressBar = document.getElementById("progress-bar");
  const pathLength = document
    .querySelector("#progress-bar > svg > path")
    .getTotalLength();

  scrollToTopBtn.addEventListener("click", () => {
    rootElement.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("scroll", () => {
    const scrollAmount = pathLength / 100;
    const scrollPosition = Math.round(
      ((rootElement.scrollTop || bodyElement.scrollTop) /
        ((rootElement.scrollHeight || bodyElement.scrollHeight) -
          innerHeight)) *
        100 *
        scrollAmount
    );

    if (scrollPosition > 5) {
      scrollToTopBtn.classList.add("showBtn");
      progressBar.style.setProperty("--scrollAmount", scrollPosition + "px");
    } else {
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
});

// slide-navbar

$(".navbar__area-menu-bar").click(function(){
  $(".slide-navbar").addClass("slide-toggle")
});

$(".dismiss-btn").click(function(){
  $(".slide-navbar").removeClass("slide-toggle")
});
