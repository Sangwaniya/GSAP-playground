// gsap.to(".box", {
//     y: 200,
//     duration: 0.6,
    
//     stagger: {
//         amount: 0.5,
//         each: 0.1,
//         from: "center",
//     yoyo: true,
//     }
// })

tl = gsap.timeline({
    // repeat: -1
})

tl.to(".box1", {
    y: 200,
    duration: 1,
})

tl.to(".box2", {
    y: 200,
}, "-=0.5")

tl.to(".box3", {
    y: 200,
}, "+=0.5")