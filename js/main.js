// ================= HAMBURGER MENU =================
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
    });
}

// ================= SLICK SLIDERS =================
$(document).ready(function () {

    if ($(".desire_slider").length) {
        $(".desire_slider").slick({
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: "10%",
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: "40px"
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: "0px"
                    }
                }
            ]
        });
    }

    if ($(".corporate_slider").length) {
        $(".corporate_slider").slick({
            slidesToShow: 3,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2500
        });
    }

    if ($(".cor_kits_slider").length) {
        $(".cor_kits_slider").slick({
            slidesToShow: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2500
        });
    }
});


// set CSS var to header height so fixed header does not overlap content
(function () {
  function updateHeaderHeight() {
    const header = document.querySelector('header');
    if (!header) return;
    const h = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', h + 'px');
  }

  // basic debounce
  function debounce(fn, wait) {
    let t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, wait);
    };
  }

  updateHeaderHeight();
  window.addEventListener('resize', debounce(updateHeaderHeight, 150));
})();


