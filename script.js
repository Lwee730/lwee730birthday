gsap.registerPlugin(ScrollTrigger);

// 触发播放
const video = document.getElementById("main-video");
const music = document.getElementById("bg-music");
const button = document.getElementById("playButton");

button.addEventListener("click", () => {
  video.play();
  music.play();
  button.style.display = "none";

  // ⏱️ 延迟 5 秒后触发渐隐动画
  setTimeout(() => {
    document.getElementById("main-title").style.transition = "opacity 1.5s";
    document.getElementById("sub-title").style.transition = "opacity 1.5s";
    document.getElementById("trd-title").style.transition = "opacity 1.5s";
    document.getElementById("main-title").style.opacity = 0;
    document.getElementById("sub-title").style.opacity = 0;
    document.getElementById("trd-title").style.opacity = 0;
  }, 3500); // 5000毫秒 = 5秒
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

gsap.to("#trd-title", {
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

function updateCountdown() {
  const countdownEl = document.getElementById("countdown");

  // 设置目标生日日期（例如：2025年7月30日 07:30）
  const birthday = new Date("2025-07-30T07:30:00");

  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    countdownEl.textContent = "🎉 生日快乐！";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `距离生日还有 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
}

// 每秒更新一次
setInterval(updateCountdown, 1000);
updateCountdown();
