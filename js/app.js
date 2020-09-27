// Fader

var controller = new ScrollMagic.Controller();

$(".container-fluid").each(function() {
  var tl = new TimelineMax();
  var child = $(this).find(".gsap-fader");
  tl.to(child, 1, { opacity: 1, ease: Linear.easeNone });

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.8,
    duration: "80%"
  })
    .setTween(tl)
    .addTo(controller);
});