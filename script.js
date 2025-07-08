gsap.registerPlugin(ScrollTrigger);

// 触发播放
button.addEventListener("click", async () => {
  try {
    await video.play();
    await music.play();
    console.log("音乐播放成功");
  } catch (e) {
    console.warn("音乐播放失败", e);
  }
  button.style.display = "none";
});
button.addEventListener("click", () => {
  video.play().catch(() => {});
  music.play().catch(() => {});
  button.style.display = "none";
});

// 滚动动画
gsap.to("#main-title", {
  opacity: 0,
  y: -50,
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to("#sub-title", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.from(".panel.image p", {
  opacity: 0,
  y: 40,
  scrollTrigger: {
    trigger: ".panel.image",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".panel.video p", {
  opacity: 0,
  y: 40,
  scrollTrigger: {
    trigger: ".panel.video",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from("#scroll-video", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".panel.video",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
