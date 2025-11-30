<template>
  <section class="cover">
    <div class="cover-overlay"></div>
    <div class="cover-content">
      <p class="subtitle fade-up" v-scroll>Welcome to our forever</p>
      <h1 class="title fade-up" v-scroll>THE WEDDING<br />OF AJI & INDAH</h1>
      <p class="date fade-up" v-scroll>29.12.2025</p>
      <button class="save-btn fade-scale" v-scroll @click="saveTheDate">Save the date</button>
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
      { threshold: 0.2 }
    )
    observer.observe(el)
  }
}

const saveTheDate = () => {
  // Format waktu Google Calendar: YYYYMMDDTHHmmssZ (UTC)
  // Acara: 29 Des 2025, 07:30–15:00 WIB
  // WIB = UTC+7 → maka UTC = WIB - 7 jam
  const startDate = '20251229T003000Z'; // 07:30 WIB
  const endDate = '20251229T080000Z';   // 15:00 WIB

  const title = encodeURIComponent('The Wedding of Aji & Indah');
  const details = encodeURIComponent('Join us to celebrate our wedding day! 💍');
  const location = encodeURIComponent(`7°39'56.6"S 111°18'29.0"E`);

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;
  window.open(googleCalendarUrl, '_blank');
};

const app = getCurrentInstance().appContext.app
app.directive('scroll', vScroll)
</script>

<style scoped>
/* === BASE COVER === */
.cover {
  position: relative;
  height: 85vh;
  background: transparent;
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
  /* background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px); */
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
  background: #2f5480;
  color: #fff;
  border: none;
  padding: 0.6rem 1.8rem;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.25);
}

.save-btn:hover {
  background: #8bc5ff;
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
