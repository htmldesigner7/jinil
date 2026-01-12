//    HERO IMAGE SEQUENCE ANIMATION WITH SCROLLTRIGGER AND SCROLLSMOOTHER

gsap.registerPlugin(ScrollTrigger);

// hero text animations

gsap.from("#hero-title", {
  scrollTrigger: {
    trigger: ".sequence_section",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
  y: 100,
  ease: "power3.out",
});

gsap.from(".subtitle", {
  scrollTrigger: {
    trigger: ".sequence_section",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
  y: 50,
  scale: 0.8,
  ease: "power3.out",
});

const frameCount = 142;

const urls = Array.from(
  { length: frameCount },
  (_, i) => `images/hero/parallax_${(i + 1).toString().padStart(4, "0")}.jpg`
);

imageSequence({
  urls,
  img: "#image_sequence",
  scrollTrigger: {
    trigger: ".sequence_section",
    start: "top top",
    end: "+=2000", // 🔥 scroll distance for animation
    scrub: true,
    pin: true, // 🔥 THIS IS THE MAGIC
  },
});

function imageSequence(config) {
  let playhead = { frame: 0 };
  let imgElement = document.querySelector(config.img);
  let images = [];
  let curFrame = -1;

  function updateImage() {
    let frame = Math.round(playhead.frame);
    frame = Math.max(0, Math.min(frame, images.length - 1));

    if (frame !== curFrame) {
      imgElement.src = images[frame].src;
      curFrame = frame;
    }
  }

  config.urls.forEach((url, i) => {
    const img = new Image();
    img.src = url;
    if (i === 0) img.onload = updateImage;
    images.push(img);
  });

  return gsap.to(playhead, {
    frame: images.length - 1,
    ease: "none",
    onUpdate: updateImage,
    scrollTrigger: config.scrollTrigger,
  });
}

