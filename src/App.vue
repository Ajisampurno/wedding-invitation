<template>
  <div>
    <!-- Cover -->
    <div v-if="showCover" class="cover">
      <!-- Kiri -->
      <div
        class="cover-half left"
        :class="{ open: isOpened }"
        @transitionend="afterOpen"
      >
      </div>

      <!-- Kanan -->
      <div class="cover-half right" :class="{ open: isOpened }">
      </div>

      <!-- Tombol -->
      <button v-if="!isOpened" @click="openInvitation" class="btn-open">
        Buka Undangan
      </button>
    </div>

    <!-- Audio -->
    <audio ref="audioRef" loop>
      <source src="/music/wedding.mp3" type="audio/mpeg" />
    </audio>

    <!-- Tombol Musik -->
    <button v-if="!showCover" @click="toggleMusic" class="btn-music">
      {{ isPlaying ? '🔊' : '🔇' }}
    </button>

    <!-- Navigasi Section -->
    <div v-if="!showCover" class="nav-sections">
      <button
        v-for="(section, i) in sections"
        :key="i"
        @click="scrollTo(section.id)"
      >
        {{ section.label }}
      </button>
    </div>

    <!-- Konten -->
    <div v-if="!showCover">
      <HeroSection id="hero" />
      <SambutanSection id="sambutan" />
      <ProfileMempelaiSection id="profil" />
      <EventSection id="event" />
      <MapSection id="map" />
      <GalerySection id="galery" />
      <UcapanSection id="ucapan" />
      <KonfirmasiSection id="konfirmasi" />
      <FooterSection id="footer" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

import HeroSection from "./components/HeroSection.vue"
import SambutanSection from "./components/SambutanSection.vue"
import ProfileMempelaiSection from "./components/ProfileMempelaiSection.vue"
import EventSection from "./components/EventSection.vue"
import MapSection from "./components/MapSection.vue"
import GalerySection from "./components/GalerySection.vue"
import UcapanSection from "./components/UcapanSection.vue"
import FooterSection from "./components/FooterSection.vue"
import KonfirmasiSection from "./components/KonfirmasiSection.vue"

const audioRef = ref(null)
const isPlaying = ref(false)
const showCover = ref(true)
const isOpened = ref(false)

const toggleMusic = () => {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
    isPlaying.value = true
  }
}

const openInvitation = () => {
  isOpened.value = true
  toggleMusic()
}

const afterOpen = () => {
  // Sembunyikan cover setelah animasi selesai
  setTimeout(() => {
    showCover.value = false
  }, 800)
}

const sections = [
  { id: "hero", label: "Home" },
  { id: "sambutan", label: "Sambutan" },
  { id: "profil", label: "Mempelai" },
  { id: "event", label: "Acara" },
  { id: "map", label: "Lokasi" },
  { id: "galery", label: "Galeri" },
  { id: "ucapan", label: "Ucapan" },
  { id: "konfirmasi", label: "Konfirmasi" },
  { id: "footer", label: "Akhir" },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<style>
/* Cover */
.cover {
  position: fixed;
  inset: 0;
  display: flex;
  z-index: 2000;
  overflow: hidden;
  background: #000; /* fallback */
}

/* Bagian kiri & kanan */
.cover-half {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.8s ease-in-out;
  position: relative;
  background-size: cover;
  background-position: center;
}

.cover-half.left {
  background-image: url('/img/cover-right.jpeg');
  border-right: 2px solid #c49b63;
}
.cover-half.right {
  background-image: url('/img/cover-left.png');
  border-left: 2px solid #c49b63;
}

/* Overlay lembut agar gambar lebih elegan */
.cover-half::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.25);
}

/* Animasi buka */
.cover-half.left.open {
  transform: translateX(-100%);
}
.cover-half.right.open {
  transform: translateX(100%);
}

/* Tombol Buka */
.btn-open {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: #c49b63;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: all 0.3s;
  z-index: 5;
}
.btn-open:hover {
  background: #8e6b3d;
  transform: translateX(-50%) scale(1.05);
}

/* Tombol Musik */
.btn-music {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: #c49b63;
  color: white;
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background 0.3s, transform 0.2s;
}
.btn-music:hover {
  background: #8e6b3d;
  transform: scale(1.1);
}

/* === Cover Mode Mobile === */
@media (max-width: 768px) {
  .cover {
    flex-direction: column;
  }

  /* Sembunyikan separuh */
  .cover-half.left,
  .cover-half.right {
    flex: none;
    width: 100%;
    height: 100%;
    border: none;
    background-image: url('/img/cover-mobile.png');
    background-size: cover;
    background-position: center;
  }

  /* Matikan animasi slide kiri-kanan, ganti fade out */
  .cover-half.left.open,
  .cover-half.right.open {
    transform: none;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }
}

/* Tombol Musik */
.btn-music {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: #c49b63;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background 0.3s;
}
.btn-music:hover {
  background: #8e6b3d;
}

/* Navigasi */
.nav-sections {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  gap: 10px;
  background: rgba(255,255,255,0.8);
  padding: 8px 12px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.nav-sections button {
  background: #f8f8f8;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s;
}
.nav-sections button:hover {
  background: #c49b63;
}
</style>
