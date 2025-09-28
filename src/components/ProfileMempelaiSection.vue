<template>
  <section class="mempelai">
    <h2 class="judul fade-up" v-scroll>Calon Pengantin</h2>
    <div class="pasangan-wrapper">
      <div class="pasangan fade-up" v-scroll>
        <img src="/img/aji.jpeg" class="foto" alt="Foto Aji" />
        <h3 class="nama">Muhammad Aji Sampurno, S.Kom</h3>
        <p class="orangtua">Putra dari Bapak Witaqwin & Ibu Sri Sayekti</p>
      </div>
      <div class="pasangan fade-up delay" v-scroll>
        <img src="/img/indah.jpeg" class="foto" alt="Foto Indah" />
        <h3 class="nama">Indah Larasati, S.T.</h3>
        <p class="orangtua">Putri dari Bapak Sukarno Alm & Ibu Rijem Alm</p>
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
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@500;700&family=Inter&display=swap');

.mempelai {
  background-color: #fffaf3;
  padding: 4rem 1.5rem;
  color: #4a2d1f;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.mempelai::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -25%;
  right: -25%;
  background: url('/img/bg-batik.jpg') center/cover no-repeat;
  opacity: 0.04;
  z-index: 0;
}

.judul {
  font-family: 'Cinzel', serif;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #b88c4a;
  position: relative;
  z-index: 1;
}

.pasangan-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.pasangan {
  background-color: #fffaf3;
  border: 1px solid #f0e0c8;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 280px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pasangan:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

.foto {
  width: 160px;
  height: 200px;
  object-fit: cover;
  border-radius: 50% / 60%;
  border: 4px solid #c9a15c;
  padding: 4px;
  background-color: #fffaf3;
  box-shadow: 0 0 15px rgba(201, 161, 92, 0.25);
  transition: transform 0.4s ease;
  animation: scaleIn 1.2s ease-out both;
}

.pasangan:hover .foto {
  transform: scale(1.05);
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.nama {
  font-family: 'Great Vibes', cursive;
  font-size: 1.9rem;
  color: #b88c4a;
  margin: 0.5rem 0;
}

.orangtua {
  font-size: 0.95rem;
  color: #5c3d2e;
  font-weight: 400;
}

/* Animasi saat scroll */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
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
  .pasangan-wrapper {
    flex-direction: column;
    gap: 2rem;
  }

  .judul {
    font-size: 1.8rem;
  }

  .foto {
    width: 130px;
    height: 170px;
  }
}
</style>
