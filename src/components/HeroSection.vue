<template>
  <section class="hero">
    <div class="overlay">
      <h1 class="title fade-in">Undangan Pernikahan</h1>
      <h2 class="names fade-in">Aji & Indah</h2>
      <p class="invitation fade-in">Kepada Yth. Bapak/Ibu/Saudara/i <strong>{{ guestName }}</strong></p>
      <p class="date fade-in">Sabtu, 29 Desember 2025</p>

      <div class="countdown-wrapper fade-in">
        <div
          class="countdown-box"
          v-for="(value, label, index) in countdown"
          :key="label"
          :style="{ animationDelay: `${index * 0.3}s` }"
        >
          <div class="time">{{ value }}</div>
          <div class="label">{{ label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const urlParams = new URLSearchParams(window.location.search)
const guestName = decodeURIComponent(urlParams.get('to') || 'Tamu Undangan')

const countdown = ref({
  Hari: '00',
  Jam: '00',
  Menit: '00',
  Detik: '00',
})

let intervalId

const updateCountdown = () => {
  const target = new Date('2025-12-29T00:00:00')
  const now = new Date()
  const diff = target - now

  if (diff <= 0) {
    clearInterval(intervalId)
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  countdown.value = {
    Hari: String(days).padStart(2, '0'),
    Jam: String(hours).padStart(2, '0'),
    Menit: String(minutes).padStart(2, '0'),
    Detik: String(seconds).padStart(2, '0'),
  }
}

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel&display=swap');

.hero {
  position: relative;
  height: 100vh;
  background: url('/img/hero-aji-indah.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

@media (max-width: 768px) {
  .hero {
    background-position: center top;
  }
}

.overlay {
  background-color: rgba(0, 0, 0, 0.45);
  padding: 2rem;
  border-radius: 1rem;
  max-width: 800px;
  width: 90%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
}

.title {
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #ffe9b6;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.names {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: #ffdd99;
  margin-bottom: 1rem;
  animation: glow 2s ease-in-out infinite alternate;
}

.invitation,
.date {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #ffe8cc;
}

/* Countdown */
.countdown-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.countdown-box {
  background-color: rgba(255, 248, 225, 0.15);
  border: 2px solid #ffdd99;
  padding: 1rem;
  border-radius: 0.75rem;
  width: 80px;
  backdrop-filter: blur(4px);
  color: #fff3d0;
  box-shadow: inset 0 0 10px rgba(255, 221, 153, 0.3);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s forwards;
}

.time {
  font-size: 1.5rem;
  font-weight: bold;
}
.label {
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeIn 1s forwards;
}
.fade-in:nth-child(1) { animation-delay: 0.2s; }
.fade-in:nth-child(2) { animation-delay: 0.5s; }
.fade-in:nth-child(3) { animation-delay: 0.8s; }
.fade-in:nth-child(4) { animation-delay: 1.1s; }

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glow {
  0% {
    text-shadow: 0 0 5px #ffdd99, 0 0 10px #ffcc66;
  }
  100% {
    text-shadow: 0 0 15px #ffe9b6, 0 0 25px #ffcc66;
  }
}

/* Responsiveness */
@media (max-width: 600px) {
  .names {
    font-size: 2.2rem;
  }
  .title {
    font-size: 1.5rem;
  }
  .countdown-box {
    width: 70px;
  }
}
</style>
