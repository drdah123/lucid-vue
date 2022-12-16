<template>
  <div class="banner" id="home">
    <video loop autoPlay muted class="banner-video-bg">
      <source
        src="https://www.lucidmotors.com/s3fs-public/2022-08/sapphire-web-hero.webm"
        type="video/mp4"
      />
    </video>
    <div class="banner-center">
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
  </div>
</template>

<style scoped>
.banner-video-bg {
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: -15;
  object-fit: cover;
  opacity: 0.8;
}
.banner {
  position: relative;
  color: #fff;
}

.banner-air {
  position: absolute;
  top: -50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.banner-air-links {
  width: 100%;
  margin-left: 25%;
  flex-wrap: nowrap;
}

.banner-air a {
  margin: 0 2.5%;
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
  text-align: center;

  position: relative;
  overflow: hidden;
  display: inline-flex;
}
@media (max-width: 1020px) {
  .banner-air h1 {
    font-size: 2.125rem;
  }
  .banner-air-links a:nth-child(2) {
    margin: 5% 15%;
    display: grid;
    width: fit-content;
  }
  .banner-details p {
    font-size: 1rem !important;
  }
}
@media (max-width: 620px) {
  .banner-air-links a:nth-child(1) {
    margin: 0 -20%;
  }
  .banner-air h1 {
    font-size: 3rem;
    margin: 5% -10%;
  }
}
.banner-air-links a:nth-child(1)::before {
  content: "";
  text-align: center;
  align-content: center;
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;

  background: rgb(157, 133, 127);
  z-index: 2;
  transition: 0.5s;
}
.banner-air .text-area {
  position: relative;
  transition: 0.5s;

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
  justify-content: space-around;
  position: absolute;
  bottom: 20px;
  left: 15%;
  width: 80%;
}
.banner-details p {
  font-size: 2.25rem;
  line-height: 2.875rem;
  margin-top: -0.7rem;
  font-weight: 700;
  font-family: SchnyderSDemi, Georgia, Times, Times New Roman, serif,
    Apple Color Emoji, Segoe UI Emoji;
}
.banner-details div {
  width: 100% !important;
}
</style>
