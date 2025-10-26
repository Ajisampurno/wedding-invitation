<template>
  <section class="cover">
    <div class="cover-overlay"></div>
    <div class="cover-content">
      <p class="subtitle fade-up" v-scroll>Welcome to our forever</p>
      <h1 class="title fade-up" v-scroll>THE WEDDING<br />OF AJI & INDAH</h1>
      <p class="date fade-up" v-scroll>29.12.2025</p>
      <button class="save-btn fade-scale" v-scroll>Save the date</button>
    </div>
  </section>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

// Directive untuk animasi saat scroll
const vScroll = {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
        } else {
          el.classList.remove('in-view')
        }
      },
      { threshold: 0.2 } // 20% terlihat baru animasi aktif
    )
    observer.observe(el)
  }
}

const app = getCurrentInstance().appContext.app
app.directive('scroll', vScroll)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel&display=swap');

/* === BASE COVER === */
.cover {
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

/* Overlay lembut */
.cover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  z-index: 1;
}

/* === TEXT PANEL === */
.cover-content {
  z-index: 2;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  font-family: 'Cinzel', serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.title {
  font-family: 'Cinzel', serif;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.date {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.save-btn {
  background: #fff;
  color: #91a7c7;
  border: none;
  padding: 0.6rem 1.8rem;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.25);
}

.save-btn:hover {
  background: #f1f5f9;
  transform: scale(1.05);
}

/* === ANIMASI === */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.fade-scale {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.8s ease-out;
}

.in-view.fade-up {
  opacity: 1;
  transform: translateY(0);
}

.in-view.fade-scale {
  opacity: 1;
  transform: scale(1);
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .title {
    font-size: 1.7rem;
  }
  .date {
    font-size: 2rem;
  }
}
</style>
