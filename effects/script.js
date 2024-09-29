gsap.registerEffect({
    name: "flip",
    effect: (target, config) => {
        return gsap.to(target, {
            duration: config.duration,
            rotationY: 360,
            y: config.y,
            repeat: config.repeat,
            yoyo: config.yoyo
        });
    },
        defaults: { duration: 2},
        extendTimeline: true,
})

// gsap.effects.flip(".box", {
//     repeat: -1,
// yoyo: true});

document.querySelectorAll(".box").forEach(function(box){
  box.addEventListener("mouseenter", function(){
    gsap.effects.flip(this, {duration: 1, y: "+=100", repeat: 1, yoyo: true, overwrite: false})
  })
})