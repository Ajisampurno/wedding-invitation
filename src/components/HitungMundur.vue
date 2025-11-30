<template>
  <section class="event-section reveal" ref="eventSection">
    <h2 class="judul reveal-item">Menuju Hari Bahagia</h2>

    <div class="countdown-container reveal-item">
      <div
        class="time-box reveal-item"
        v-for="(value, label) in timeLeft"
        :key="label"
      >
        <div class="time-value">{{ value.toString().padStart(2, '0') }}</div>
        <div class="time-label">{{ label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const targetDate = new Date('2025-12-29T00:00:00')
const timeLeft = ref({ DAYS: 0, HRS: 0, MINS: 0, SECS: 0 })

let timer

const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate - now

  if (diff <= 0) {
    clearInterval(timer)
    timeLeft.value = { DAYS: 0, HRS: 0, MINS: 0, SECS: 0 }
    return
  }

  timeLeft.value = {
    DAYS: Math.floor(diff / (1000 * 60 * 60 * 24)),
    HRS: Math.floor((diff / (1000 * 60 * 60)) % 24),
    MINS: Math.floor((diff / (1000 * 60)) % 60),
    SECS: Math.floor((diff / 1000) % 60),
  }
}

const eventSection = ref(null)

const addScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          entry.target.classList.remove('active')
        }
      })
    },
    { threshold: 0.2 }
  )

  const elements = eventSection.value.querySelectorAll('.reveal-item')
  elements.forEach((el) => observer.observe(el))
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
  addScrollAnimation()
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.event-section {
  background: transparent;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  /* backdrop-filter: blur(3px); */
}

/* ============================= */
/*      SCROLL REVEAL EFFECT     */
/* ============================= */
.reveal-item {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease-out;
}

.reveal-item.active {
  opacity: 1;
  transform: translateY(0);
}

.countdown-container {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  /* background: rgba(255, 255, 255, 0.18); */
  padding: 1rem 1.7rem;
  /* border-radius: 14px; */
  /* backdrop-filter: blur(6px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.25); */
}

.judul {
  font-family: 'Cinzel', serif;
  text-align: center;
  font-size: 2rem;
  color: #2f5480;
  margin-bottom: 18px;
  text-shadow: 0 2px 6px rgba(0,0,0,0.25);
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(17, 17, 17, 0.85);
  color: #fff;
  border-radius: 8px;
  width: 62px;
  padding: 12px 0;
  box-shadow: inset 0 -2px 0 rgba(255,255,255,0.1),
              0 4px 10px rgba(0,0,0,0.4);
  backdrop-filter: blur(5px);
}

.time-value {
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.time-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-top: 4px;
  opacity: 0.7;
}

/* HP / Mobile */
@media (max-width: 600px) {
  .judul { font-size: 2.2rem; }
  .time-box { width: 50px; padding: 8px 0; }
  .time-value { font-size: 1.3rem; }
  .countdown-container { gap: 0.5rem; }
}
</style>
