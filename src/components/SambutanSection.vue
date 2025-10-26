<template>
  <section class="sambutan">
    <div class="sambutan-overlay"></div>
    <div class="container">
      <br><br><br>
      <p class="paragraf fade-up" v-scroll>
        “Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).”
      </p>
      <p class="salam fade-up" v-scroll>
        (QS. Adz-Dzariyat: 49)
      </p>
      <br>
      <p class="paragraf fade-up" v-scroll>
        Marriage is the proper way to establishing correct and permissible relationships between men and women.
      </p>
      <br><br><br><br><br><br><br>
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
          // Jika elemen terlihat, tambahkan class animasi
          el.classList.add('in-view')
        } else {
          // Jika keluar dari viewport, hilangkan lagi agar bisa animasi ulang
          el.classList.remove('in-view')
        }
      },
      { threshold: 0.1 } // sensitivitas 10%
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

.sambutan {
  position: relative;
  height: 100vh;
  background: url('/img/bg-flower.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #2f5480;
  text-align: center;
}

.sambutan .container {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  z-index: 1;
}

.sambutan-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  z-index: 1;
}

.arab {
  font-size: 2rem;
  font-weight: 500;
  color: #000000;
  font-family: 'Scheherazade New', serif;
  line-height: 2.4rem;
  margin-bottom: 0.5rem;
}

.salam {
  font-family: 'Cinzel', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  animation: glow 2s ease-in-out infinite alternate;
}

.paragraf {
  font-size: 1.05rem;
  line-height: 1.85;
  color: #000000;
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
</style>
