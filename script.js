// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural
function setTrackHeights() {
  $(".section-height").each(function (index) {
    let trackWidth = $(this).find(".section-track").outerWidth();
    $(this).height(trackWidth);
  });
}
setTrackHeights();
window.addEventListener("resize", function () {
  setTrackHeights();
});

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// Horizontal scroll
let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-height",
      start: "top top",
      end: "98% bottom",
      scrub: 1
    }
  })
  .to(".section-track", {
    xPercent: -100,
    ease: "none"
  });
  
  // Hero image
  gsap
  .timeline({
    scrollTrigger: {
      trigger: ".empty-panel",
      containerAnimation: tlMain,
      start: "left left",
      end: "right left",
      scrub: true
    }
  }).fromTo(".img-wrap.is-hero",
  	{ xPercent: -33.33, transform: 'translate3d(0,0,0)', },
  	{ xPercent: 15, transform: 'translate3d(0,0,0)', ease: "none" }
  );
  
  // values panel
  gsap
  .timeline({
    scrollTrigger: {
      trigger: ".value-panel",
      containerAnimation: tlMain,
      start: "left left",
      end: "right right",
      scrub: true
    }
  })
  .to(".value-container", { xPercent: 300, ease: "none" } )
  .fromTo(".dutoit-history",
  	{ yPercent: 100 },
  	{ yPercent: -100, ease: "none" },
    0
  )
  .fromTo(".old-farm-photo",
  	{ yPercent: 350 },
  	{ yPercent: -100, ease: "none" },
    0
  );
  
// innovation panel
  gsap
  .timeline({
    scrollTrigger: {
      trigger: ".clip-wrap",
      containerAnimation: tlMain,
      start: "left left",
      end: "right right",
      scrub: true
    }
  })
  .to(".clip-content", { xPercent: 300, ease: "none" })
  .fromTo(
    ".trust-container",
    { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
    0
  );
  
  // community
  gsap
  .timeline({
    scrollTrigger: {
      trigger: ".temp.is-01",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  }).fromTo(
    ".community-seg.is-02",
    { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
    0
  );
  
	gsap
  .timeline({
    scrollTrigger: {
      trigger: ".temp.is-02",
      start: "bottom bottom",
      end: "bottom top",
      scrub: true
    }
  }).fromTo(
    ".community-seg.is-03",
    { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
    0
  );
  
	gsap
  .timeline({
    scrollTrigger: {
      trigger: ".temp.is-03",
      start: "bottom bottom",
      end: "bottom top",
      scrub: true
    }
  }).fromTo(
    ".community-seg.is-04",
    { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
    0
  );

  const elem = document.getElementById('hover-box');
  // Attach mousemove event 
  elem.addEventListener('mousemove', function(event){

     // Get the target
     const target = event.target;

     // Get the bounding client
     const rect = target.getBoundingClientRect();

     // Get X & Y coordinates 
     let xPos = ((event.clientX - rect.left) / rect.width) * 100;
     let yPos = ((event.clientY - rect.top) / rect.height) * 100;
     	
     var pos = `${xPos}% ${yPos}%`;

     // Print the XY-coordinates
     // console.log(pos); 
     
     // foreground pattern
     var foreground = document.getElementById("clip-foreground")
     
     // change the clip path position
     foreground.setAttribute("style", `clip-path: circle(10rem at ${pos});`)
  });
