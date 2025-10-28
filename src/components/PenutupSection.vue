<template>
  <section class="closing-section" id="closing">
    <div class="closing-container fade-up">
      <p class="closing-text">
        Merupakan kebahagiaan bagi kami apabila<br />
        Saudara/Saudari berkenan hadir dan memberikan<br />
        doa baik dalam pernikahan kami.<br />
        <br />
        Sampai bertemu di hari bahagia kami,
      </p>

      <p class="closing-hashtag">#FromIndahpendentToMrsAji</p>
    </div>
  </section>
</template>

<script setup>
// Tidak ada logic dinamis di sini
</script>

<style scoped>
.closing-section {
  background: url('/img/bg-gapura.jpg') center top / cover no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  position: relative;
  color: #1a1a1a;
  font-family: 'Cormorant Garamond', serif;
}

/* Overlay lembut agar teks kontras */
.closing-section::before {
  content: '';
  position: absolute;
  inset: 0;
  /* background: rgba(255, 255, 255, 0.75); */
  /* backdrop-filter: blur(4px); */
  z-index: 0;
}

.closing-container {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.closing-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #2c2c2c;
  font-style: italic;
  margin-bottom: 2rem;
}

.closing-hashtag {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #2f5480;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Responsif */
@media (max-width: 600px) {
  .closing-container {
    padding: 2rem 1.2rem;
  }
  .closing-text {
    font-size: 1rem;
  }
  .closing-hashtag {
    font-size: 0.95rem;
  }
}
</style>
