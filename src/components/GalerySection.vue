<template>
  <section class="galeri-section">
    <div class="container">
      <h2 class="judul fade-up" v-scroll>Our Gallery</h2>
      <p class="deskripsi fade-up delay" v-scroll>
        Beberapa momen kebersamaan kami yang penuh kenangan.
      </p>

      <!-- Foto utama -->
      <div class="foto-utama fade-up" v-scroll @click="openModal(mainPhoto)">
        <img :src="mainPhoto" class="foto-utama-img" alt="Foto Utama" />
      </div>

      <!-- Galeri kecil swipe -->
      <div class="galeri-swipe">
        <div
          class="foto-small fade-up"
          v-scroll
          v-for="(foto, index) in photos"
          :key="index"
          @click="setMainPhoto(foto)"
        >
          <img :src="foto" class="foto-small-img" />
        </div>
      </div>
    </div>

    <!-- Modal Popup -->
    <div v-if="selectedPhoto" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        <img :src="selectedPhoto" alt="Preview" class="modal-img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const photos = [
  '/img/gallery-1.jpg',
  '/img/gallery-11.jpg',
  '/img/gallery-2.jpg',
  '/img/gallery-3.jpg',
  '/img/gallery-4.jpg',
  '/img/gallery-5.jpg',
  '/img/gallery-6.jpg',
  '/img/gallery-7.jpg',
  '/img/gallery-8.jpg',
  '/img/gallery-9.jpg',
  '/img/gallery-10.jpg',
]

const mainPhoto = ref(photos[0])

const setMainPhoto = (foto) => {
  mainPhoto.value = foto
}

// Modal logic
const selectedPhoto = ref(null)
const openModal = (foto) => {
  selectedPhoto.value = foto
}
const closeModal = () => {
  selectedPhoto.value = null
}

// Scroll reveal
onMounted(() => {
  const revealElements = document.querySelectorAll('.reveal-item, .reveal-typing')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        } else {
          entry.target.classList.remove('reveal-visible')
        }
      })
    },
    { threshold: 0.15 }
  )

  revealElements.forEach((el) => observer.observe(el))
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inter&display=swap');

.galeri-section {
  background: url('/img/bg-white.jpg') center/cover no-repeat;
  padding: 4rem 1.5rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  color: #5c3d2e;
  font-family: 'Inter', sans-serif;
}

/* .galeri-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(3px);
  z-index: 0;
} */

.container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.judul {
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2f5480;
}

.deskripsi {
  font-size: 0.85rem;
  font-family: 'cambria', serif;
  line-height: 1.85;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 400;
}

/* Foto utama */
.foto-utama {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  cursor: pointer;
}

.foto-utama-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

/* Swipe bar kecil */
.galeri-swipe {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding-bottom: 8px;
  scroll-snap-type: x mandatory;
}

.galeri-swipe::-webkit-scrollbar {
  height: 6px;
}
.galeri-swipe::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

/* Foto kecil berbentuk card */
.foto-small {
  flex: 0 0 120px;
  scroll-snap-align: start;
  border-radius: 0.8rem;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.12);
}

.foto-small-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

/* Mobile khusus */
@media (max-width: 500px) {
  .foto-utama-img {
    height: 240px;
  }

  .foto-small {
    flex: 0 0 100px;
  }

  .foto-small-img {
    height: 100px;
  }
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fffaf3;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  animation: fadeIn 0.3s ease-out;
}

.modal-img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 0.5rem;
}

.close-btn {
  position: absolute;
  top: 0.3rem;
  right: 1rem;
  font-size: 2rem;
  color: #b88c4a;
  background: none;
  border: none;
  cursor: pointer;
}

/* Animasi */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}
.fade-up.delay {
  transition-delay: 0.3s;
}
.in-view {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
