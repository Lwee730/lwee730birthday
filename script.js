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

const openBtn = document.getElementById("openMessage");
const closeBtn = document.getElementById("closeMessage");
const messageBox = document.getElementById("messageBox");
const submitBtn = document.getElementById("submitMessage");
const messageInput = document.getElementById("messageInput");
const messageList = document.getElementById("messageList");

// 载入本地留言
window.onload = function () {
  const saved = JSON.parse(localStorage.getItem("messages")) || [];
  saved.forEach(msg => addMessage(msg));
};

function addMessage(msg) {
  const p = document.createElement("p");
  p.textContent = `匿名留言：${msg}`;
  messageList.prepend(p);
}

openBtn.onclick = () => messageBox.style.display = "block";
closeBtn.onclick = () => messageBox.style.display = "none";

submitBtn.onclick = () => {
  const msg = messageInput.value.trim();
  if (msg) {
    addMessage(msg);

    // 保存到 localStorage
    const existing = JSON.parse(localStorage.getItem("messages")) || [];
    existing.unshift(msg);
    localStorage.setItem("messages", JSON.stringify(existing));

    messageInput.value = "";

    // 显示提示动画
    showSuccessAnimation();
  }
};

// 动画提示
function showSuccessAnimation() {
  const success = document.createElement("div");
  success.textContent = "🎉 祝福发送成功！";
  success.style.position = "fixed";
  success.style.top = "50%";
  success.style.left = "50%";
  success.style.transform = "translate(-50%, -50%)";
  success.style.background = "#222";
  success.style.color = "#fff";
  success.style.padding = "14px 20px";
  success.style.borderRadius = "10px";
  success.style.zIndex = "2000";
  success.style.fontSize = "18px";
  success.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
  document.body.appendChild(success);

  setTimeout(() => {
    success.remove();
  }, 2000);
}

// 歌曲列表（替换为你自己的）
const songs = [
  {
    name: "LWE25730生日主题曲-Suffocating",
    file: "assets/bg-music.mp3"
  },
  {
    name: "未弄",
    file: "assets/.mp3"
  }
  {
    name: "未弄",
    file: "assets/favorite.mp3"
  }
];

let currentSong = 0;
let audio = new Audio(songs[currentSong].file);

// 控件元素
const musicToggle = document.getElementById("music-toggle");
const musicPlayer = document.getElementById("music-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextBtn = document.getElementById("next-btn");
const songTitle = document.getElementById("song-title");

// 显示/隐藏播放器
musicToggle.onclick = () => {
  musicPlayer.style.display = musicPlayer.style.display === "none" ? "block" : "none";
};

// 播放按钮
playBtn.onclick = () => {
  audio.play();
  songTitle.innerText = "当前曲目：" + songs[currentSong].name;
};

// 暂停按钮
pauseBtn.onclick = () => {
  audio.pause();
};

// 下一首按钮
nextBtn.onclick = () => {
  audio.pause();
  currentSong = (currentSong + 1) % songs.length;
  audio = new Audio(songs[currentSong].file);
  audio.play();
  songTitle.innerText = "当前曲目：" + songs[currentSong].name;
};
