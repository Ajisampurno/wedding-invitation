<template>
  <section class="wedding-gift-section" id="wedding-gift" ref="giftSection">
    <div class="gift-container reveal-item">
      <h2 class="gift-title reveal-item">WEDDING GIFT</h2>

      <p class="gift-text reveal-typing">
        Doa baik dan kebahagiaan adalah karunia yang sangat berarti bagi kami.
        Namun, apabila memberi materi merupakan ungkapan kebahagiaan bersama,
        Anda dapat mengirimkannya kepada kami melalui media di bawah ini.
      </p>

      <button class="btn-togle" @click="togle_btn">
        <i class="fa fa-gift"></i> {{ title_btn }}
      </button>

      <transition name="fade">
        <div v-if="giftBox">
          <div v-if="giftBox">
            <div class="gift-box">
              <p>
                <i class="fa fa-gift"></i> Kado: ke alamat mempelai wanita<br />
                <span class="gift-detail" id="alamatKado">
                  (Ds. Ringinagung RT 03 RW 02, Kecamatan Magetan, Kabupaten
                  Magetan, Jawa Timur)
                </span>
                <button
                  class="copy-btn-alamat"
                  @click="copyAlamat"
                  :aria-label="'Copy Mandiri number'"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <rect x="1" y="1" width="13" height="13" rx="2" ry="2"></rect>
                  </svg>
                </button>
                <span v-if="copied.alamat" class="copied-badge">Copied!</span>
              </p>

            </div>
          </div>

          <!-- Kartu ATM-style Mandiri -->
          <div class="atm-card">
            <div class="atm-chip"></div>
            <p class="atm-bank"><i class="fa fa-bank"></i> Bank Mandiri</p>

            <div class="atm-row">
              <p class="atm-number">1710 0175 1449 1</p>

              <button
                class="copy-btn"
                @click="copyToClipboard('1710017514491', 'mandiri')"
                :aria-label="'Copy Mandiri number'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <rect x="1" y="1" width="13" height="13" rx="2" ry="2"></rect>
                </svg>
              </button>

              <span v-if="copied.mandiri" class="copied-badge">Copied!</span>
            </div>

            <p class="atm-name">Indah Larasati</p>
          </div>

          <!-- Kartu ATM-style BNI -->
          <div class="atm-card bni">
            <div class="atm-chip"></div>
            <p class="atm-bank"><i class="fa fa-bank"></i> Bank BNI</p>

            <div class="atm-row">
              <p class="atm-number">1633 6468 52</p>

              <button
                class="copy-btn"
                @click="copyToClipboard('1633646852', 'bni')"
                :aria-label="'Copy BNI number'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <rect x="1" y="1" width="13" height="13" rx="2" ry="2"></rect>
                </svg>
              </button>

              <span v-if="copied.bni" class="copied-badge">Copied!</span>
            </div>

            <p class="atm-name">Indah Larasati</p>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const giftBox = ref(false)
const title_btn = ref('Tampilkan Detail')

// object untuk men-track state copied per rekening
const copied = ref({
  mandiri: false,
  bni: false,
  alamat: false
})

const togle_btn = () => {
  giftBox.value = !giftBox.value
  title_btn.value = giftBox.value ? 'Sembunyikan Detail' : 'Tampilkan Detail'
}

const copyAlamat = () => {
  const alamat = document.getElementById("alamatKado").innerText;
  navigator.clipboard
    .writeText(alamat)
    .then(() => {
      copied.value.alamat = true;
      setTimeout(() => {
        copied.value.alamat = false;
      }, 1800);
    })
    .catch(() => {
      alert("Gagal menyalin alamat!");
    });
};

// fungsi copy dengan fallback (textarea) untuk kompatibilitas
const copyToClipboard = async (text, key) => {
  try {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'absolute'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }

    // beri feedback singkat
    copied.value[key] = true
    setTimeout(() => {
      copied.value[key] = false
    }, 1800)
  } catch (err) {
    console.error('copy failed', err)
    // jika gagal, tetap berikan notifikasi visual singkat
    copied.value[key] = true
    setTimeout(() => {
      copied.value[key] = false
    }, 1800)
  }
}

onMounted(() => {
  const revealElements = document.querySelectorAll('.reveal-item, .reveal-typing')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        } else {
          entry.target.classList.remove('reveal-visible') // reset animasi
        }
      })
    },
    { threshold: 0.15 }
  )

  revealElements.forEach((el) => observer.observe(el))
})
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
}

.gift-container {
  max-width: 600px;
  padding: 2rem 2.5rem;
  /* text-align: center; */
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.gift-title {
  font-size: 1.6rem;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 600;
  color: #2f2e2d;
  margin-bottom: 1.5rem;
}

.gift-text {
  font-size: 1.05rem;
  font-family: 'cambria', serif;
  line-height: 1.6;
  text-align: justify;
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
  background: rgba(47, 84, 128, 0.08);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  margin: 1rem 0;
  text-align: left;
  border-left: 4px solid #4a6ea9;
}

.gift-box p {
  margin: 0;
  font-family: 'cambria', serif;
  font-size: 0.95rem;
  color: #333;
}

.gift-detail {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* === Kartu ATM Style === */
.atm-card {
  position: relative;
  background: linear-gradient(135deg, #2f5480, #4a6ea9);
  color: white;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  margin: 1rem 0;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  text-align: left;
  overflow: hidden;
}

.atm-card::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -20%;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  pointer-events: none;
}

.atm-chip {
  width: 45px;
  height: 35px;
  background: linear-gradient(180deg, #d6c894, #a89e63);
  border-radius: 6px;
  margin-bottom: 0.8rem;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
}

.atm-bank {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.atm-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.atm-number {
  font-size: 1.18rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 0.4rem;
  user-select: text;
}

.atm-name {
  font-size: 0.95rem;
  text-transform: uppercase;
  font-weight: 400;
  opacity: 0.95;
}

/* copy button */
.copy-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.12);
  border: none;
  border-radius: 8px;
  padding: 0.45rem;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.12s ease;
  width: 38px;
  height: 34px;
  color: white;
}
.copy-btn-alamat:hover { transform: translateY(-2px); background: rgba(255,255,255,0.18); }
.copy-btn-alamat:active { transform: translateY(0); }

.copy-btn-alamat {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(4, 4, 4, 0.12);
  border: none;
  border-radius: 8px;
  padding: 0.45rem;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.12s ease;
  width: 38px;
  height: 34px;
  color: rgb(94, 94, 94);
}
.copy-btn-alamat:hover { transform: translateY(-2px); background: rgba(255,255,255,0.18); }
.copy-btn-alamat:active { transform: translateY(0); }

.icon { width: 18px; height: 18px; }

/* kecil 'Copied!' badge */
.copied-badge {
  background: rgba(0,0,0,0.25);
  padding: 0.25rem 0.45rem;
  border-radius: 12px;
  font-size: 0.78rem;
  margin-left: 6px;
  color: #fff;
  opacity: 0.95;
}

/* Variasi BNI */
.atm-card.bni {
  background: linear-gradient(135deg, #e97824, #b04a07);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animasi muncul dari bawah */
.reveal-item {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s ease;
}

.reveal-item.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Animasi mengetik untuk paragraf */
.reveal-typing {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.reveal-typing.reveal-visible {
  opacity: 1;
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
  .atm-number {
    font-size: 1.05rem;
  }
  .copy-btn { width: 34px; height: 30px; padding: 0.35rem; }
}
</style>
