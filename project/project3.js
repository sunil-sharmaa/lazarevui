function locomotivejs() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(100%)",
        borderRadius: "50px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
function navAnimation() {

    let nav = document.querySelector('nav');
    nav.addEventListener("mouseenter", () => {
        var tl = gsap.timeline()
        tl.to("#navbottom", {
            height: "21vh"
        })
        tl.to("nav h5", {
            display: "block"
        })
        tl.to("#navpart2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave", () => {
        var tl = gsap.timeline()
        tl.to("#navpart2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to("nav h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#navbottom", {
            height: "0",
            duration: 0.2
        })
    })
}
function page2Animation() {
    var rightelem = document.querySelectorAll('.rightelem')
    rightelem.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", (dets) => {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 100,
                y: dets.y - elem.getBoundingClientRect().y - 150
            })

        })

    })
}
function page3VideoAnimation() {
    let page3center = document.querySelector(".page3center");
    //
    let video = document.querySelector("#page3 video");

    page3center.addEventListener("click", () => {
        //
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
        })
    })
    video.addEventListener('click', () => {
        video.pause();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(0)",
            opacity: 0,
            borderRadius: "50%"
        })
    })
}
function page4videoAnimation() {
    let sections = document.querySelectorAll(".secright")
    sections.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", () => {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}

function page6Animation() {
    gsap.from(".btm6parts h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".btm6parts",
            scroller: "#main",
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    });

}
locomotivejs();
loadingAnimation();
navAnimation();
page2Animation();
page3VideoAnimation();
page4videoAnimation();
page6Animation();
