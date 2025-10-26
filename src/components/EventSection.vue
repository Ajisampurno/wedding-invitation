<template>
  <section class="invitation-section">
    <div class="invitation-content">
      <p>
        Dengan segala kerendahan hati dan rasa syukur kepada-Nya, kami bermaksud mengundang
        <br />
        Saudara/Saudari untuk hadir di hari bahagia kami:
      </p>
      <div class="event-block">
        <h3>AKAD NIKAH</h3>
        <p class="date">
          <i class="fa fa-clock"></i> Senin, 29 Desember 2025 (07.30 WIB)
        </p>
        <p class="location">
          <i class="fa fa-map-pin"></i> Kediaman mempelai wanita <br />
          Ds. Ringinagung, Kec. Magetan, Kab. Magetan
        </p>
      </div>

      <div class="event-block">
        <h3>RESEPSI PERNIKAHAN</h3>
        <p class="date">
          <i class="fa fa-clock"></i> Senin, 29 Desember 2025 (10.00 WIB)
        </p>
        <p class="location">
          <i class="fa fa-map-pin"></i> Kediaman mempelai wanita <br />
          Ds. Ringinagung, Kec. Magetan, Kab. Magetan
        </p>
      </div>

      <a
        href="https://www.google.com/maps/place/7%C2%B039'56.6%22S+111%C2%B018'29.0%22E/@-7.665723,111.3054801,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.665723!4d111.308055?hl=id&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        class="map-button"
      >
        <i class="fa fa-map-pin"></i> Lokasi acara (g-maps link)
      </a>
    </div>
  </section>
</template>

<script setup>
// Tidak ada script tambahan, semua statis
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Great+Vibes&family=Inter&display=swap');

.invitation-section {
  background: url('/img/bg-event.jpg') center/cover no-repeat;
  min-height: 100vh;
  display: flex;
  color: #2d2d2d;
  position: relative;
  overflow: hidden;
  padding: 3rem 1.5rem;
}



.invitation-content {
  position: relative;
  z-index: 1;
  margin: auto;
}

.intro-text {
  text-align: center;
  font-size: 1rem;
  color: #000000;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
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
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: #1d1d1d;
  margin-bottom: 0.6rem;
}

.date {
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.location {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #444;
}

.map-button {
  display: inline-block;
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
