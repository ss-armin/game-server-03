/*
02 -> sidebar toggle
03 -> search toggle
04 -> Box hover effect Style
05 -> Connect wallet toggle
06 -> chat box height adjust
07 -> input file
08 -> chat list toggle
09 -> notification toggle
10 -> header profile toggle
11 -> hide toggle items
13 -> top player slider
14 -> game swiper
16 -> custom tab list
17 -> custom accordion list
18 -> count down timer
19 -> earning chart (apex line chart)
20 -> Current Year
21 -> preloader
*/

$(document).ready(() => {
  "use strict";

  // 02 -> sidebar toggle
  $(".sidebar-toggle-btn").on("click", function () {
    $(".sidebar").toggleClass("open");
    $(this).toggleClass("open");
  });

  // 03 -> search toggle
  $(".search-toggle-btn").on("click", function () {
    $(".search-bar").toggleClass("open");
  });

  // 04 -> Box hover effect Style 
  const targetBtn = document.querySelectorAll('.box-style')
  if (targetBtn) {
    targetBtn.forEach((element) => {
      element.addEventListener('mousemove', (e) => {
        const x = e.offsetX + 'px';
        const y = e.offsetY + 'px';
        element.style.setProperty('--x', x);
        element.style.setProperty('--y', y);
      })
    })
  }

  // 05 -> Connect wallet toggle
  $(".wallet-btn").on("click", function () {
    $(".connect-wallet-section").toggleClass("active");
  })
  $(".wallet-close-btn").on("click", function () {
    $(".connect-wallet-section").toggleClass("active");
  })

  $(".connect-wallet-overlay").on("click", function (e) {
    console.log(e.target);

    if ($(e.target).hasClass("connect-wallet-overlay")) {
      $(".connect-wallet-section").toggleClass("active");
    }
  })

  // 06 -> chat box height adjust
  $('.chat-body').scrollTop($(document).height());

  // 07 -> input file 
  $(".add-file-btn").on("click", function () {
    $("#add-file-input").click()
  })

  // 08 -> chat list toggle 
  $(".chat-list-toggle-btn").on("click", function () {
    $(".chat-list-area").toggleClass("open");
  })

  // 09 -> notification toggle
  $(".ntf-btn").on("click", function () {
    $(".notification-area").toggleClass("open");
  })

  // 10 -> header profile toggle
  $(".header-profile").on("click", function () {
    $(".user-account-popup").toggleClass("open");
  })

  // 11 -> hide toggle items
  $(document).on("click", function (event) {
    // sidebar hide
    if (!$(event.target).closest(".sidebar, .sidebar-toggle-btn").length) {
      $(".sidebar").removeClass("open");
      $(".sidebar-toggle-btn").removeClass("open");
    }
    // search bar hide
    if (!$(event.target).closest(".search-bar, .search-toggle-btn").length) {
      $(".search-bar").removeClass("open");
    }
    // notification hide
    if (!$(event.target).closest(".notification-area, .ntf-btn").length) {
      $(".notification-area").removeClass("open");
    }
    // profile popup hide
    if (!$(event.target).closest(".user-account-popup, .header-profile").length) {
      $(".user-account-popup").removeClass("open");
    }
    // chat list hide
    if (!$(event.target).closest(".chat-list-area, .chat-list-toggle-btn").length) {
      $(".chat-list-area").removeClass("open");
    }
  })

  // 14 -> game swiper
  var gameSwiper = new Swiper('.game-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".game-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 3
      },
      575: {
        slidesPerView: 2
      },
    }
  });

  var gameSwiper2 = new Swiper('.game-swiper2', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    speed: 5000,
    freeMode: true,
    autoplay: {
      delay: 1,
    },
    pagination: {
      el: ".game-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6
      },
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      575: {
        slidesPerView: 2
      },
    }
  });

  // 15 -> banner swiper
  var bannerSwiper = new Swiper(".banner-swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".banner-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      992: {
        direction: "vertical",

      }
    }
  });

  // 16 -> custom tab list
  $(".tablinks .nav-links").each(function () {
    var targetTab = $(this).closest(".singletab");
    targetTab.find(".tablinks .nav-links").each(function () {
      var navBtn = targetTab.find(".tablinks .nav-links");
      navBtn.click(function () {
        navBtn.removeClass('active');
        $(this).addClass('active');
        var indexNum = $(this).closest("li").index();
        var tabcontent = targetTab.find(".tabcontents .tabitem");
        $(tabcontent).removeClass('active');
        $(tabcontent).eq(indexNum).addClass('active');
      });
    });
  });

  // 17 -> custom accordion list
  $(".accordion-single .acc-header-area").click(function () {
    if ($(this).closest(".accordion-single").hasClass("active")) {
      $(this).closest(".accordion-single").removeClass("active");
      $(this).next(".acc-content-area").slideUp();
    } else {
      $(".accordion-single").removeClass("active");
      $(this).closest(".accordion-single").addClass("active");
      $(".acc-content-area").not($(this).next(".acc-content-area")).slideUp();
      $(this).next(".acc-content-area").slideToggle();
    }
  });

  // 18 -> count down timer
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      // nextYear = yyyy + 1,
      setDate = "12/31/", // month/date/year
      endingDate = setDate + yyyy;
    //endingDate = "12/01/" + yyyy; // month/date/year

    today = mm + "/" + dd + "/" + yyyy;
    if (today > endingDate) {
      endingDate = new Date(endingDate).getTime();
    }
    //end
    const countDown = new Date(endingDate).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;
        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");
        if (days && hours && minutes && seconds) {
          days.innerText = Math.floor(distance / (day)),
            hours.innerText = Math.floor((distance % (day)) / (hour)),
            minutes.innerText = Math.floor((distance % (hour)) / (minute)),
            seconds.innerText = Math.floor((distance % (minute)) / second);
        }
        if (distance < 0) {
          clearInterval(x);
        }
      }, 0)
  }());

  // 19 -> earning chart (apex line chart)
  var options = {
    colors: ['#F62F1A', '#F6471C'],
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          return "$" + val
        },
        title: {
          show: false,
        },
      },
      x: {
        show: false,
      }
    },
    series: [{
      name: "Earnings",
      data: [0, 0, 150, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0]
    }],
    chart: {
      height: 150,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true,
        height: 100,
        width: '100%',
        colors: ['#F62F1A', '#F6471C'],
      }
    },
    grid: {
      show: false,
    },
    xaxis: {
      // show: false,
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    markers: {
      colors: ['#F76D1F'],
    },

  };
  if (document.querySelector("#earning-chart")) {
    var chart = new ApexCharts(document.querySelector("#earning-chart"), options);
    chart.render();
  }

  // 20 -> Current Year
  $(".currentYear").text(new Date().getFullYear());

  // 21 -> preloader
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});
