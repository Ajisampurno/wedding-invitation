<template>
  <section class="invitation-section" ref="invitationSection">
    <div class="invitation-content reveal-item">
      <p class="intro-text reveal-item">
        Dengan segala kerendahan hati dan rasa syukur kepada-Nya, kami bermaksud mengundang Saudara/Saudari untuk hadir di hari bahagia kami:
      </p>

      <div class="event-block reveal-item">
        <h3>AKAD NIKAH</h3>
        <p class="date">
          <i class="fa fa-clock"></i> Senin, 29 Desember 2025 (08.00 WIB)
        </p>
        <p class="location">
          <i class="fa fa-map-pin"></i> Kediaman mempelai wanita <br />
          Ds. Ringinagung, Kec. Magetan, Kab. Magetan
        </p>
      </div>

      <div class="event-block reveal-item">
        <h3>RESEPSI PERNIKAHAN</h3>
        <p class="date">
          <i class="fa fa-clock"></i> Senin, 29 Desember 2025 (10.00 WIB)
        </p>
        <p class="location">
          <i class="fa fa-map-pin"></i> Kediaman mempelai wanita <br />
          Ds. Ringinagung, Kec. Magetan, Kab. Magetan
        </p>
      </div>

      <div style="text-align: center;">
        <a
          href="https://www.google.com/maps/place/7%C2%B039'56.6%22S+111%C2%B018'29.0%22E/@-7.665723,111.3054801,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.665723!4d111.308055?hl=id"
          target="_blank"
          class="map-button reveal-item"
        >
          <i class="fa fa-map-pin"></i> Lokasi acara
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const invitationSection = ref(null)

const addScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          entry.target.classList.remove('active') // Hapus baris ini jika ingin animasi TIDAK hilang saat discroll ke atas
        }
      })
    },
    { threshold: 0.2 }
  )

  const elements = invitationSection.value.querySelectorAll('.reveal-item')
  elements.forEach((el) => observer.observe(el))
}

onMounted(() => {
  addScrollAnimation()
})
</script>

<style scoped>
.invitation-section {
  background: transparent;
  height: 85vh;
  display: flex;
  color: #2f5480;
  position: relative;
  overflow: hidden;
  padding: 3rem 1.5rem;
}

.invitation-content {
  position: relative;
  z-index: 1;
  margin: auto;
}

/* ✅ SCROLL REVEAL ANIMATION */
.reveal-item {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.reveal-item.active {
  opacity: 1;
  transform: translateY(0);
}

/* ============================ */

.intro-text {
  text-align: center;
  font-family: 'cambria', serif;
  font-size: 1rem;
  color: #2c2c2c;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.event-block {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.event-block h3 {
  font-family: 'Cinzel', serif;
  color: #2f5480;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-bottom: 0.6rem;
}

.date {
  font-size: 0.95rem;
  font-family: 'cambria', serif;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.location {
  font-size: 0.9rem;
  font-family: 'cambria', serif;
  line-height: 1.5;
  color: #2c2c2c;
}

.map-button {
  background: #446fa4;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  transition: 0.3s ease;
  margin-top: 1rem;
}

.map-button:hover {
  background: #2f5480;
}

/* Responsif HP */
@media (max-width: 600px) {
  .intro-text {
    font-size: 0.95rem;
  }
  .event-block {
    padding: 1rem;
  }
  .map-button {
    font-size: 0.85rem;
  }
}
</style>
