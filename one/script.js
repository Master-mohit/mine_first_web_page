const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var chacha = gsap.timeline()
chacha.to("#page1" ,{
    y: "100vh",
    scale: 0.5,
    duration: 0,
    delay: 1,
})
chacha.to("#page1" ,{
    y: "-25",
    duration: 1,
    delay: 1,
})
chacha.to("#page1" ,{
    rotate: 360,
    scale: 1,
    duration: 1,
    delay: 1,
})

