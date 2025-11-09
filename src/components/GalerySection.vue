<template>
  <section class="galeri-section">
    <div class="container">
      <h2 class="judul fade-up" v-scroll>Our Gallery</h2>
      <p class="deskripsi fade-up delay" v-scroll>
        Beberapa momen kebersamaan kami yang penuh kenangan.
      </p>

      <div class="galeri-grid">
        <div
          class="foto-wrapper fade-up"
          v-scroll
          v-for="(foto, index) in photos"
          :key="index"
          @click="openModal(foto)"
        >
          <img :src="foto" alt="Foto Galeri" class="foto" />
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

// Data foto galeri
const photos = [
  '/img/gallery-1.jpg',
  '/img/gallery-2.jpg',
  '/img/gallery-3.jpg',
  '/img/gallery-4.jpg',
  '/img/gallery-5.jpg',
  '/img/gallery-6.jpg',
  '/img/gallery-7.jpg',
  '/img/gallery-8.jpg',
  '/img/gallery-9.jpg',
  '/img/gallery-10.jpg',
  '/img/gallery-11.jpg',
  '/img/gallery-12.jpg',
]

// Modal logic
const selectedPhoto = ref(null)
const openModal = (foto) => {
  selectedPhoto.value = foto
}
const closeModal = () => {
  selectedPhoto.value = null
}

// Scroll animation directive
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('[v-scroll], [v-scroll="true"]').forEach((el) => {
    observer.observe(el)
  })
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
  line-height: 1.85;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 400;
}

.galeri-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* fix 2 kolom */
  gap: 1rem;
  padding: 0 1rem;
  justify-items: center;
}

.foto-wrapper {
  overflow: hidden;
  border-radius: 1rem;
  border: 4px solid #ffffff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.foto-wrapper:hover {
  transform: scale(1.03);
}

.foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive (HP tetap 2 kolom tapi lebih rapat) */
@media (max-width: 600px) {
  .galeri-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }

  .foto-wrapper {
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 0.7rem;
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
