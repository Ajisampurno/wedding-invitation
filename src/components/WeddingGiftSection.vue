<template>
  <section class="wedding-gift-section" id="wedding-gift">
    <div class="gift-container fade-up">
      <h2 class="gift-title">WEDDING GIFT</h2>

      <p class="gift-text">
        Doa baik dan kebahagiaan adalah karunia yang sangat berarti bagi kami.
        Namun, apabila memberi materi merupakan ungkapan kebahagiaan bersama,
        Anda dapat mengirimkannya kepada kami melalui media di bawah ini.
      </p>

      <div class="gift-box">
        <p class="gift-label">
          🎁 Kado: ke alamat mempelai wanita<br />
          <span class="gift-detail">
            (Ds. Ringinagung RT 03 RW 02, Kecamatan Magetan, Kabupaten Magetan,
            Jawa Timur)
          </span>
        </p>
      </div>

      <div class="gift-box">
        <p class="gift-label">🏦 Rekening Bank:</p>
        <p class="gift-detail">
          Mandiri: <strong>1710017514491 (Indah Larasati)</strong><br />
          BNI: <strong>1633646852 (Indah Larasati)</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak ada logic dinamis di sini, jadi kosong
</script>

<style scoped>
.wedding-gift-section {
  background: url('/img/bg-event.jpg') center/cover no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  font-family: 'Cormorant Garamond', serif;
  color: #1c1b1a;
  position: relative;
}

/* efek lembut di atas background */
.wedding-gift-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  z-index: 0;
}

.gift-container {
  position: relative;
  z-index: 1;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.75);
  padding: 2rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.gift-title {
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: 600;
  color: #2f2e2d;
  margin-bottom: 1.5rem;
}

.gift-text {
  font-size: 1.05rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 2rem;
  color: #333;
}

.gift-box {
  background: rgba(47, 84, 128, 0.15);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  text-align: left;
  border-left: 4px solid #4a6ea9;
  transition: all 0.3s ease;
}

.gift-box:hover {
  background: rgba(47, 84, 128, 0.25);
  transform: translateY(-2px);
}

.gift-label {
  font-weight: 600;
  color: #2f5480;
  margin-bottom: 0.4rem;
}

.gift-detail {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.4;
}

@media (max-width: 600px) {
  .gift-container {
    padding: 1.5rem;
  }
  .gift-title {
    font-size: 1.2rem;
  }
  .gift-text {
    font-size: 1rem;
  }
}
</style>
