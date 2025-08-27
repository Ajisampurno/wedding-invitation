<template>
  <div>
    <!-- Audio -->
    <audio ref="audioRef" loop>
      <source src="/music/wedding.mp3" type="audio/mpeg" />
    </audio>

    <!-- Tombol Musik (kanan bawah) -->
    <button @click="toggleMusic" class="btn-music">
      {{ isPlaying ? '🔊' : '🔇' }}
    </button>

    <!-- Tombol Navigasi Section (bawah tengah) -->
    <div class="nav-sections">
      <button
        v-for="(section, i) in sections"
        :key="i"
        @click="scrollTo(section.id)"
      >
        {{ section.label }}
      </button>
    </div>

    <!-- Konten -->
    <HeroSection id="hero" />
    <SambutanSection id="sambutan" />
    <ProfileMempelaiSection id="profil" />
    <EventSection id="event" />
    <MapSection id="map" />
    <GalerySection id="galery" />
    <UcapanSection id="ucapan" />
    <FooterSection id="footer" />
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

const audioRef = ref(null)
const isPlaying = ref(false)

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

const sections = [
  { id: "hero", label: "Home" },
  { id: "sambutan", label: "Sambutan" },
  { id: "profil", label: "Mempelai" },
  { id: "event", label: "Acara" },
  { id: "map", label: "Lokasi" },
  { id: "galery", label: "Galeri" },
  { id: "ucapan", label: "Ucapan" },
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
/* Tombol Musik */
.btn-music {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: #e91e63;
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
  background: #c2185b;
}

/* Navigasi Section */
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
  background: #f48fb1;
}
</style>
