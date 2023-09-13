function init() {
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

init();

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#eh1",
        scroller: "#main",
        // markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3
    }
})
tl.to("#eh1", {
    x: -100,
    color: "transparent",
    textShadow: '0 0 5px rgba(0,0,0,0.5)'
}, "kuchbhi")

tl.to('#eh2', {
    x: 100,
    color: "transparent",
    textShadow: '0 0 5px rgba(0,0,0,0.5)'
}, "kuchbhi")

tl.to('#p1', {
    color: "transparent",
    textShadow: '0 0 5px rgba(0,0,0,0.5)'
}, "kuchbhi")

tl.to('#vd1', {
    width: "90%",
    transition: "ease-in-out"
}, "kuchbhi")

let row1 = document.getElementById('row1')
let row2 = document.getElementById('row2')
let row3 = document.getElementById('row3')

let im1 = document.querySelector('.im1');

row1.addEventListener("mouseover", () => {
    im1.style.backgroundImage = "url(./images/img1.webp)"
    im1.style.transition = "background-image 2s ease-in-out";
});

row2.addEventListener("mouseover", () => {
    im1.style.backgroundImage = "url(./images/img2.webp)"
    im1.style.transition = "background-image 2s ease-in-out";
});

row3.addEventListener("mouseover", () => {
    im1.style.backgroundImage = "url(./images/img3.webp)"
    im1.style.transition = "background-image 2s ease-in-out";
});

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#vd1",
        scroller: "#main",
        // markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3
    }
})

tl2.to('#page2', {
    backgroundColor: "#fff",
    transition: "ease-in-out",
    color: "black"
}, "bhai")

tl2.to('#main', {
    backgroundColor: "#fff",
    transition: "ease-in-out"
}, "bhai")

// Code for Cursor changes

let cursor = document.querySelector('#cursor')
let main = document.querySelector("#main")
main.addEventListener("mousemove", function (dets) {
    // console.log("x:",dets.x); ---> just for checking coordinates
    // console.log("y:",dets.y);
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})

let vd1 = document.querySelector("#vd1");
let soundon = document.querySelector('.soundon');
vd1.addEventListener("mouseenter", (dets) => {
    // soundon = document.querySelector('.soundon');
    soundon.style.display = 'inline-block';
    cursor.style.display = 'none';
    // if (soundon !== null) {
    //     soundon.style.left = dets.x + "px";
    //     soundon.style.top = dets.y + "px"
    // }
    // console.log('hix:', dets.x)
    // console.log('hiy:', dets.y)
})

vd1.addEventListener('mouseleave', (dets) => {
    // soundon = document.querySelector('.soundon');
    soundon.style.display = 'none';
    cursor.style.display = 'inline-block';
})

vd1.addEventListener("mousemove", function (dets) {
    soundon.style.left = dets.x + "px"
    soundon.style.top = dets.y + "px"
})

vd1.addEventListener('click',()=>{
    vd1.play();
})

let video1 = document.querySelector('#vd_1');
let image1 = document.querySelector('#img_1');
let image2 = document.querySelector('#img_2');
let video2 = document.querySelector('#vd_2');
let viewbtn = document.querySelector('.viewbtn');

const arr = [video1, image1, image2, video2];

arr.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        // viewbtn = document.querySelector('.viewbtn');
        viewbtn.style.display = 'inline-block';
        cursor.style.display = 'none';
        console.log('mouseenter-->', 1);
    })
});

arr.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        // viewbtn = document.querySelector('.viewbtn');
        viewbtn.style.display = 'none';
        cursor.style.display = 'inline-block';
        console.log('mouseleave-->', 2);
    })
});

arr.forEach((item) => {
    item.addEventListener('mousemove', (dets) => {
        // viewbtn = document.querySelector('.viewbtn')
        viewbtn.style.left = dets.x + 'px';
        viewbtn.style.top = dets.y + 'px';
        console.log('x:', dets.x);
        console.log('y:', dets.y);
    })
});

