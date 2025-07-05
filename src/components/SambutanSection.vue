<template>
  <section class="sambutan mewah">
    <div class="container">
      <p class="arab fade-up" v-scroll>
        السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
      </p>
      <p class="salam fade-up" v-scroll>
        Assalamu’alaikum Warahmatullahi Wabarakatuh
      </p>
      <p class="paragraf fade-up" v-scroll>
        Dengan penuh rasa syukur dan cinta, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri hari bahagia dalam pernikahan kami:
      </p>
      <p class="paragraf fade-up" v-scroll>
        Kehadiran dan doa restu Anda merupakan kehormatan serta kebahagiaan bagi kami.
      </p>
    </div>
  </section>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const vScroll = {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
  }
}

const app = getCurrentInstance().appContext.app
app.directive('scroll', vScroll)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap');

.sambutan.mewah {
  background-color: #f5eee6;
  padding: 3.5rem 1.5rem;
  text-align: center;
  color: #5c3d2e;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

.sambutan.mewah::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -25%;
  right: -25%;
  background: url('/images/batik-border-light.svg') center/cover no-repeat;
  opacity: 0.06;
  z-index: 0;
}

.sambutan .container {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  z-index: 1;
}

.arab {
  font-size: 2rem;
  font-weight: 500;
  color: #c9a15c;
  font-family: 'Scheherazade New', serif;
  line-height: 2.4rem;
  margin-bottom: 0.5rem;
}

.salam {
  font-family: 'Cinzel', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #b98b4e;
  margin-bottom: 1rem;
  animation: glow 2s ease-in-out infinite alternate;
}

.paragraf {
  font-size: 1.05rem;
  line-height: 1.85;
  color: #4c2f1d;
  margin-bottom: 1rem;
  font-weight: 400;
}

@media (max-width: 600px) {
  .salam {
    font-size: 1.3rem;
  }
  .paragraf {
    font-size: 1rem;
  }
  .arab {
    font-size: 1.7rem;
  }
}

/* Scroll animation */
.fade-up {
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.8s ease-out;
}

.in-view {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Glowing Salam */
@keyframes glow {
  0% {
    text-shadow: 0 0 5px #d4ae74, 0 0 10px #c9a15c;
  }
  100% {
    text-shadow: 0 0 15px #ffebb2, 0 0 25px #d7b87c;
  }
}
</style>
