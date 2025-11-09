<template>
  <section class="mempelai">
    <div class="mempelai-overlay"></div>
    <h2 class="judul fade-up" v-scroll>Mempelai Wanita</h2>
    <div class="pasangan-wrapper">
        <div class="pasangan fade-up delay" v-scroll>
            <div class="frame">
                <img src="/img/indah.jpeg" class="foto" alt="Foto Indah" />
            </div>
            <h3 class="nama">Indah Larasati, S.T.</h3>
            <p class="orangtua">
              Putri dari Bapak Sukarno (Alm) & Ibu Rijem (Almh) 
              <br>
              (Ds. Ringinagung, Kec. Magetan, Kab. Magetan)
            </p>
        </div>
    </div>
  </section>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const vScroll = {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('in-view')
        else el.classList.remove('in-view')
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
  }
}

const app = getCurrentInstance().appContext.app
app.directive('scroll', vScroll)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@500;700&family=Inter&display=swap');

.mempelai {
  background: url('/img/bg-white.jpg') center/cover no-repeat;
  padding: 4rem 1.5rem;
  color: #4a2d1f;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.judul {
  font-family: 'Cinzel', serif;
  color: #2f5480;
  margin-top: 0px;
  margin-bottom: 0px;
}

.pasangan-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.pasangan:hover {
  transform: translateY(-5px);
}

/* === FRAME FOTO === */
.frame {
  position: relative;
  width: 240px;  /* diperbesar */
  height: 240px;
  margin: 0 auto 1.5rem;
}

.frame::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('/img/frame-bunga.png') center/contain no-repeat;
  background-size: contain;
  z-index: 2;
  pointer-events: none;
}

.foto {
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: 0 0 10px rgba(255,255,255,0.3);
  transition: transform 0.4s ease;
}

/* .pasangan:hover .foto {
  transform: translate(-50%, -50%) scale(1.05);
} */

/* === TEKS === */
.nama {
  color: #2f5480;
  font-family: 'Great Vibes', cursive;
  margin-bottom: 0px;
  font-size: 2.5rem;
  /* text-shadow: 2px 2px 8px rgba(56, 71, 131, 0.5); */
}

.orangtua {
  font-size: 0.85rem;
  line-height: 1.85;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 400;
}

/* === Animasi Scroll === */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.fade-up.delay {
  transition-delay: 0.3s;
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Responsif */
@media (max-width: 768px) {
  .pasangan-wrapper {
    flex-direction: column;
  }

  .judul {
    font-size: 2rem;
  }

  .frame {
    width: 350px;
    height: 350px;
  }

  .foto {
    width: 70%;
    height: 70%;
  }
}
</style>
