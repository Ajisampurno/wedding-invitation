<template>
  <section class="event-section">
    <div class="container">
      <h2 class="judul fade-up" v-scroll>Jadwal Acara</h2>

      <div class="event-grid">
        <div class="event-card fade-up" v-scroll>
          <div class="icon-wrap akad">
            <span class="icon">💍</span>
          </div>
          <div class="info">
            <h3 class="event-title">Akad Nikah</h3>
            <p class="event-time">Sabtu, 29 Desember 2025<br />Pukul 10.00 WIB</p>
            <p class="event-lokasi">Rumah Indah Larasati</p>
          </div>
        </div>

        <div class="event-card fade-up delay" v-scroll>
          <div class="icon-wrap resepsi">
            <span class="icon">🎉</span>
          </div>
          <div class="info">
            <h3 class="event-title">Resepsi</h3>
            <p class="event-time">Sabtu, 29 Desember 2025<br />Pukul 12.00 WIB - selesai</p>
            <p class="event-lokasi">Rumah Indah Larasati</p>
          </div>
        </div>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inter&display=swap');

.event-section {
  background: url('/img/bg-batik-biru.jpeg') center/cover no-repeat;
  padding: 4rem 1.5rem;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  color: #5a3a2c;
}

.event-section::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -20%;
  right: -20%;
  opacity: 0.05;
  z-index: 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.judul {
  font-family: 'Cinzel', serif;
  font-size: 2.3rem;
  color: #ffffff;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
}

.event-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.event-card {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

.icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fcefd7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #ffffff;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
}

.icon-wrap.resepsi {
  background: #fff2e0;
}

.info {
  text-align: left;
}

.event-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.3rem;
}

.event-time {
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
  color: #ffffff;
  line-height: 1.6;
}

.event-lokasi {
  font-size: 0.95rem;
  color: #ffffff;
  font-style: italic;
}

/* Scroll Animation */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
.fade-up.delay {
  transition-delay: 0.3s;
}
.in-view {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Responsiveness */
@media (max-width: 768px) {
  .event-grid {
    grid-template-columns: 1fr;
  }

  .judul {
    font-size: 2rem;
  }

  .icon-wrap {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }

  .event-title {
    font-size: 1.2rem;
  }

  .event-time,
  .event-lokasi {
    font-size: 0.95rem;
  }
}
</style>
