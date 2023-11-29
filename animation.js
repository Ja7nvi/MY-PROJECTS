function init() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });






    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init()
var crc = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function(dets) {
    crc.style.left = dets.x + 20 + "px"
    crc.style.top = dets.y + 20 + "px"
})


gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.heading h1',
        scroller: '.main',
        markers: true,
        start: 'top 27%',
        end: 'top 0',
        scrub: 3
    }
})

tl.to('.heading h1', {
    x: -100,

}, "anim");


tl.to('.heading h2', {
    x: 100,

}, "anim");

tl.to(".heading video", {
    width: "90%"

})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.heading h1',
        scroller: '.main',
        markers: true,
        start: 'top -115%',
        end: 'top -120%',
        scrub: 3
    }
})


tl2.to(".main", {
    backgroundColor: "white"
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.heading h1',
        scroller: '.main',
        markers: true,
        start: 'top -280%',
        end: 'top -300%',
        scrub: 3
    }
})
tl3.to(".main", {
    backgroundColor: "#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        var att = elem.getAttribute("dta-image")
            // console.log(att)
        crc.style.width = "460px"
        crc.style.height = "360px"
        crc.style.borderRadius = "0"
        crc.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function() {
        elem.style.backgroundColor = "trnsparant"
        crc.style.width = "20px"
        crc.style.height = "20px"
        crc.style.borderRadius = "50%"
        crc.style.backgroundImage = `none`
    })

})

// var h4 = document.querySelectorAll(".nav2 .idk")
// var pink = document.querySelectorAll(".nav2")
// h4.forEach(function(elem) {
//     elem.addEventListener("mouseenter", function() {

//         // pink.style.display = "inline"
//         // pink.style.opacity = "1"
//         pink.style.color = "red"
//     })
//     elem.addEventListener("mouseleave", function() {

//         // pink.style.display = "block"
//         // pink.style.opacity = "0"
//     })
// })