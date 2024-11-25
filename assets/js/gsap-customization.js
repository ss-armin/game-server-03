/*
01 -> lenis smooth scroll
02 -> cursor effect
03 -> title animation
04 -> content animation
05 -> card tilt animation
06 -> Images parallax
07 -> footer banner animation
08 -> sword animation
09 -> diamond animation
10 -> game console animation
*/
$(document).ready(() => {
    "use strict";

    // 01 -> lenis smooth scroll
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        // lenis.raf(time * 4000)
        lenis.raf(time * 400)
    })
    gsap.ticker.lagSmoothing(0)

    // 02 -> cursor effect
    const cursor = document.querySelector(".cursor");
    const cursorScale = document.querySelectorAll(".cursor-scale");
    let mouseX = 0;
    let mouseY = 0;
    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: () => {
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    })

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })

    cursorScale.forEach(el => {
        el.addEventListener("mousemove", () => {
            if (el.classList.contains('growUp')) {
                cursor.classList.add("big-cursor");
            } else if (el.classList.contains('growDown')) {
                cursor.classList.add("small-cursor");
            } else if (el.classList.contains('growDown2')) {
                cursor.classList.add("small-cursor2");
            }
        })
        el.addEventListener("mouseleave", () => {
            if (el.classList.contains('growUp')) {
                cursor.classList.remove("big-cursor");
            } else if (el.classList.contains('growDown')) {
                cursor.classList.remove("small-cursor");
            } else if (el.classList.contains('growDown2')) {
                cursor.classList.remove("small-cursor2");
            }
        })
    })

    // 05 -> card tilt animation
    let cardtilt = document.querySelectorAll(".card-tilt");

    if (cardtilt) {
        VanillaTilt.init(document.querySelectorAll(".card-tilt"), {
            max: 5,
            speed: 3000,
        });
    }

    let cardtilt2 = document.querySelectorAll(".card-tilt2");

    if (cardtilt2) {
        VanillaTilt.init(document.querySelectorAll(".card-tilt2"), {
            max: 30,
            speed: 300,
            glare: true,
            "max-glare": 0.5,
            "glare-prerender": false,
            axis: "x",
            scale: 2.1,
            startY: 0
        });
    }
    // 06 -> Images parallax
    gsap.utils.toArray('.parallax-container').forEach(container => {
        const img = container.querySelector('.parallax-img');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                scrub: true,
                pin: false,
            }
        });

        tl.fromTo(img, {
            yPercent: -40,
            ease: 'none'
        }, {
            yPercent: 40,
            ease: 'none'
        });
    });
    // 07 -> footer banner animation
    if ($(".footer-banner-img").length > 0) {
        let footerController = new ScrollMagic.Controller();
        let footerScene = new ScrollMagic.Scene({
            triggerElement: "#cta",
        }).setTween(".footer-banner-img", {
            right: "unset",
            left: "0%",
            bottom: "0%",
            opacity: 1,
            scale: 1,
        }).addTo(footerController);
    }
    // 08 -> sword animation
    if ($(".sword-area").length > 0) {
        let swordController = new ScrollMagic.Controller();
        let swordScene = new ScrollMagic.Scene({
            triggerElement: "#swiper-3d",
            duration: 1000,
        }).setTween(".sword-area", {
            right: "0%",
            left: "unset",
            bottom: "0%",
            opacity: 1,
            scale: 1,
        }).addTo(swordController);

        let swordScene2 = new ScrollMagic.Scene({
            triggerElement: "#top-player",
            duration: 100,
        }).setTween(".sword-area", {
            rotate: "-180deg",
        }).addTo(swordController);
    }
    // 09 -> diamond animation
    if ($(".diamond-area").length > 0) {
        let diamondController = new ScrollMagic.Controller();
        let diamondScene = new ScrollMagic.Scene({
            triggerElement: "#tournament-hero",
            duration: 1000,
        }).setTween(".diamond-area", {
            top: "80%",
            opacity: 1,
        }).addTo(diamondController);
    }
    // 10 -> game console animation
    if ($(".game-console-area").length > 0) {
        let gameController = new ScrollMagic.Controller();
        let gameScene = new ScrollMagic.Scene({
            triggerElement: "#tournament-hero",
            duration: 1000,
        }).setTween(".game-console-area", {
            top: "80%",
            left: "0%",
            right: "unset",
            opacity: 1,
        }).addTo(gameController);
    }

})