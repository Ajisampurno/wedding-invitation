<template>
  <section class="event-section">
    <div class="countdown-container">
      <div class="time-box" v-for="(value, label) in timeLeft" :key="label">
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

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');

.event-section {
  background: url('/img/bg-event.jpg') center/cover no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(3px);
}

.countdown-container {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 12px;
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  color: #fff;
  border-radius: 6px;
  width: 60px;
  padding: 10px 0;
  box-shadow: inset 0 -2px 0 rgba(255, 255, 255, 0.1),
              0 4px 8px rgba(0, 0, 0, 0.4);
}

.time-value {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.time-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-top: 4px;
  opacity: 0.8;
}

/* Responsif untuk tampilan HP */
@media (max-width: 600px) {
  .time-box {
    width: 50px;
    padding: 8px 0;
  }
  .time-value {
    font-size: 1.2rem;
  }
  .countdown-container {
    gap: 0.5rem;
  }
}
</style>
