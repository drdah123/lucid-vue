<template>
  <div class="banner" id="home">
    <video loop autoPlay muted class="banner-video-bg">
      <source
        src="https://www.lucidmotors.com/s3fs-public/2022-08/sapphire-web-hero.webm"
        type="video/mp4"
      />
    </video>
    <div />
    <div class="banner-air">
      <h1>Lucid Air</h1>
      <div class="banner-air-links">
        <a href="##">
          <span class="text-area">Discover Air</span>
        </a>
        <a href="##" alt=""> Reserve now </a>
      </div>
    </div>
    <div class="banner-details">
      <div>
        <h4>Official EPA range up to<span>¹</span></h4>
        <p>520 mi</p>
      </div>
      <div>
        <h4>Starting from<span>²</span></h4>
        <p>$87,400</p>
      </div>
      <div>
        <h4>Max power<span>³</span></h4>
        <p>1,200+ hp</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-video-bg {
  height: 100vh;
  width: 100vw;
  right: 0;
  z-index: -15;
  object-fit: cover;
  position: absolute;
  opacity: 0.8;
}

.banner {
  color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
}

.banner-air {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.banner-air-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.banner-air a {
  color: #fff;
}
.banner-air h1 {
  font-size: 4rem;
  margin: 3% 5%;
  font-family: SchnyderSDemi, Georgia, Times, Times New Roman, serif,
    Apple Color Emoji, Segoe UI Emoji;
  font-weight: 400;
}
.banner-air-links a:nth-child(1) {
  border: 0;
  background: #fff;
  color: #000;
  padding: 1.4rem 2.75rem;
  position: relative;
  overflow: hidden;
}

.banner-air-links a:nth-child(1)::before {
  content: "";
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgb(157, 133, 127);
  z-index: 2;
  transition: 0.5s;
}
.banner-air .text-area {
  transition: 0.5s;
  position: sticky;
  z-index: 3;
}
.banner-air-links a:nth-child(1):hover {
  color: rgb(242, 242, 242);
}
.banner-air-links a:nth-child(2) {
  border-bottom: 1px solid #fff;
}
.banner-air-links a:nth-child(2):hover {
  border: 0;
}
.banner-air-links a:nth-child(1):hover::before {
  left: 0;
}

.banner-details {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.banner-details p {
  font-size: 2.25rem;
  line-height: 2.875rem;
  margin-top: -0.7rem;
  font-weight: 700;
  font-family: SchnyderSDemi, Georgia, Times, Times New Roman, serif,
    Apple Color Emoji, Segoe UI Emoji;
}
@media (max-width: 768px) {
  .banner-air-links {
    flex-direction: column;
  }
}
</style>
