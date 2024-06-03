document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.9,
      });
    });
    
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        // top: diff-150,
        // left: dets.clientX-170,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
    
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#header",{
        y: '-10',
        opacity: 0,
        duration: 0.7,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay:-0.65,
        stagger: 0.25 
    })
    .from("#footer",{
        y: '-10',
        opacity: 0,
        duration: 0.85,
        delay: -0.45,
        ease: Expo.easeInOut
    })

}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {

      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) `;
    });
}

circleMouseFollower();
firstPageAnim();

