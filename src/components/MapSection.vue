<template>
  <section class="map-section">
    <div class="container">
      <h2 class="judul fade-up" v-scroll>Lokasi Acara</h2>
      <p class="deskripsi fade-up delay" v-scroll>
        Dengan penuh hormat, kami mengundang Anda untuk hadir di lokasi berikut:
      </p>

      <div class="map-wrapper fade-up delay-2" v-scroll>
        <iframe
          class="map-frame"
          :src="`https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="btn-group fade-up delay-3" v-scroll>
        <a
          :href="`https://www.google.com/maps?q=${latitude},${longitude}`"
          target="_blank"
          class="btn"
          rel="noopener noreferrer"
        >
          📍 Lihat di Google Maps
        </a>
        <a
          :href="`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`"
          target="_blank"
          class="btn"
          rel="noopener noreferrer"
        >
          🧭 Petunjuk Arah
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'

const latitude = ref(-7.665723)
const longitude = ref(111.308055)

const vScroll = {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
  }
}

const app = getCurrentInstance().appContext.app
app.directive('scroll', vScroll)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inter&display=swap');

.map-section {
  background: url('/img/bg-batik-biru.jpeg') center/cover no-repeat;
  padding: 4rem 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #4c2f1d;
  position: relative;
  overflow: hidden;
}

.map-section::before {
  content: '';
  position: absolute;
  top: -50px;
  bottom: -50px;
  left: -25%;
  right: -25%;
  opacity: 0.05;
  z-index: 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
}

.judul {
  font-family: 'Cinzel', serif;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.deskripsi {
  font-size: 1.05rem;
  margin-bottom: 2rem;
  color: #ffffff;
}

.map-wrapper {
  border: 4px solid #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(201, 161, 92, 0.15);
}

.map-frame {
  width: 100%;
  height: 350px;
  border: none;
  display: block;
  margin: 0 auto;
}

.btn-group {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.btn {
  background-color: #848aff;
  color: #fffdf3;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.25);
}
.btn:hover {
  background-color: #b88c4a;
  transform: translateY(-2px);
}

/* Animasi Scroll */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
.fade-up.delay {
  transition-delay: 0.3s;
}
.fade-up.delay-2 {
  transition-delay: 0.6s;
}
.fade-up.delay-3 {
  transition-delay: 0.9s;
}
.in-view {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Responsiveness */
@media (max-width: 600px) {
  .judul {
    font-size: 1.7rem;
  }

  .map-frame {
    height: 300px;
  }

  .btn {
    padding: 0.7rem 1.4rem;
    font-size: 0.95rem;
  }
}
</style>
