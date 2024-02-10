// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural
function setTrackHeights() {
  $(".horizontal-height.is-01").each(function (index) {
    let trackWidth = $(this).find(".horizontal-track.is-01").outerWidth();
    $(this).height(trackWidth);
  });
}
setTrackHeights();
window.addEventListener("resize", function () {
  setTrackHeights();
});

// Horizontal scroll
let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".horizontal-height.is-01",
      start: "top top",
      end: "98% bottom",
      scrub: 1
    }
  })
  .to(".horizontal-track.is-01", {
    xPercent: -100,
    ease: "none"
  });

  
// innovation panel
  gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-wrap",
      containerAnimation: tlMain,
      start: "left left",
      end: "right right",
      scrub: true
    }
  })
  .to(".clip-wrap", { xPercent: 400, ease: "none" })
  .fromTo(
    ".trust_section",
    {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    },
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
    0
  );
