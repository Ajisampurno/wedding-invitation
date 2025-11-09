<template>
  <section class="wedding-gift-section" id="wedding-gift" ref="giftSection">
    <div class="gift-container reveal-item">
      <h2 class="gift-title reveal-item">WEDDING GIFT</h2>

      <p class="gift-text reveal-item">
        Doa baik dan kebahagiaan adalah karunia yang sangat berarti bagi kami.
        Namun, apabila memberi materi merupakan ungkapan kebahagiaan bersama,
        Anda dapat mengirimkannya kepada kami melalui media di bawah ini.
      </p>

      <button class="btn-togle" @click="togle_btn">
        {{ title_btn }}
      </button>

      <transition name="fade">
        <div v-if="giftBox">
          <div class="gift-box">
            <p>
              🎁 Kado: ke alamat mempelai wanita<br />
              <span class="gift-detail">
                (Ds. Ringinagung RT 03 RW 02, Kecamatan Magetan, Kabupaten
                Magetan, Jawa Timur)
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
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const giftBox = ref(false)
const title_btn = ref('Tampilkan Detail')

const togle_btn = () => {
  giftBox.value = !giftBox.value
  title_btn.value = giftBox.value ? 'Sembunyikan Detail' : 'Tampilkan Detail'
}
</script>

<style scoped>
.wedding-gift-section {
  background: url('/img/bg-white.jpg') center/cover no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  font-family: 'Cormorant Garamond', serif;
  color: #1c1b1a;
  position: relative;
}

.gift-container {
  max-width: 600px;
  padding: 2rem 2.5rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.gift-title {
  font-size: 1.6rem;
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

.btn-togle {
  background: #2f5480;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.4rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.3s ease;
}

.btn-togle:hover {
  background: #3a6bb3;
}

.gift-box {
  background: rgba(47, 84, 128, 0.1);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  margin: 1rem 0;
  text-align: left;
  border-left: 4px solid #4a6ea9;
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

/* Animasi tampil / sembunyi */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
