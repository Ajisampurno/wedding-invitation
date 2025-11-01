<template>
  <div>
    <!-- cover -->
    <transition name="fade-cover">
      <div v-if="showCover" class="cover floral-cover">
        <div class="cover-content">
          <h2 class="wedding-title">THE WEDDING OF</h2>
          <h1 class="couple-names">AJI & INDAH</h1>

          <p class="dear">
            Dear:<br />
            <span>{{ guestName || '(nama undangan)' }}</span>
          </p>

          <button @click="openInvitation" class="btn-click">
            CLICK HERE!
          </button>
        </div>
      </div>
    </transition>

    <!-- audio -->
    <audio ref="audioRef" loop>
      <source src="/music/wedding.mp3" type="audio/mpeg" />
    </audio>

    <!-- tombol musik -->
    <button v-if="!showCover" @click="toggleMusic" class="btn-music">
      {{ isPlaying ? '🔊' : '🔇' }}
    </button>

    <!-- navigasi -->
    <div v-if="!showCover && showNav" class="nav-sections">
      <button
        v-for="(section, i) in sections"
        :key="i"
        @click="scrollTo(section.id)"
      >
        <i :class="['fa-solid', section.icon]" style="font-size: 18px;"></i>
      </button>
    </div>

    <!-- konten -->
    <div v-if="!showCover">
      <HeroSection id="hero" />
      <SambutanSection id="sambutan" />
      <!-- <ProfileMempelaiSection id="profil" /> -->
      <MempelaiPria id="profil-pria" />
      <MempelaiWanita id="profil-wanita" />
      <HitungMundur id="countdown" />
      <EventSection id="event" />
      <!-- <MapSection id="map" /> -->
      <GalerySection id="galery" />
      <WeggingGiftSection id="wedding-gift" />
      <UcapanSection id="ucapan" />
      <KonfirmasiSection id="konfirmasi" />
      <PenutupSection id="penutup" />
      <FooterSection id="footer" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

import HeroSection from "./components/HeroSection.vue"
import SambutanSection from "./components/SambutanSection.vue"
// import ProfileMempelaiSection from "./components/ProfileMempelaiSection.vue"
import MempelaiPria from "./components/MempelaiPria.vue"
import MempelaiWanita from "./components/MempelaiWanita.vue"
import HitungMundur from "./components/HitungMundur.vue"
import EventSection from "./components/EventSection.vue"
// import MapSection from "./components/MapSection.vue"
import GalerySection from "./components/GalerySection.vue"
import WeggingGiftSection from "./components/WeddingGiftSection.vue"
import UcapanSection from "./components/UcapanSection.vue"
import PenutupSection from "./components/PenutupSection.vue"
import FooterSection from "./components/FooterSection.vue"
import KonfirmasiSection from "./components/KonfirmasiSection.vue"

const audioRef = ref(null)
const isPlaying = ref(false)
const showCover = ref(true)
const showNav = ref(false)
const guestName = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  guestName.value = params.get('to')
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

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
  toggleMusic()
  setTimeout(() => {
    showCover.value = false
  }, 600)
}

const handleScroll = () => {
  const scrollY = window.scrollY
  const viewportHeight = window.innerHeight
  const fullHeight = document.body.scrollHeight
  showNav.value = scrollY + viewportHeight >= fullHeight - 200
}

const sections = [
  { id: "hero", icon: "fa-house" },
  { id: "sambutan", icon: "fa-handshake" },
  // { id: "profil", icon: "fa-heart" },
  { id: "profil-pria", icon: "fa-male" },
  { id: "profil-wanita", icon: "fa-female" },
  { id: "event", icon: "fa-calendar-days" },
  {id: "countdown", icon: "fa-hourglass-half" },
  // { id: "map", icon: "fa-map-location-dot" },
  { id: "galery", icon: "fa-images" },
  { id: "wedding-gift ", icon: "fa-envelope-open-text" },
  { id: "ucapan", icon: "fa-comment-dots" },
  { id: "konfirmasi", icon: "fa-check-circle" },
  { id: "footer", icon: "fa-star" },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}
</script>

<style scoped>
/* === Animasi Fade Cover === */
.fade-cover-enter-active,
.fade-cover-leave-active {
  transition: opacity 0.8s ease;
}
.fade-cover-enter-from,
.fade-cover-leave-to {
  opacity: 0;
}

/* === Floral Cover === */
.floral-cover {
  background-image: url('/img/floral-blue-bg.jpg');
  background-size: cover;
  background-position: center;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  text-align: center;
  color: white;
  font-family: 'Poppins', sans-serif;
}

.floral-cover::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 30, 0.45);
  z-index: 0;
}

.cover-content {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 30px 40px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  backdrop-filter: blur(6px);
}

.wedding-title {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.couple-names {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.dear {
  font-size: 18px;
  margin-bottom: 25px;
}

.dear span {
  display: block;
  font-weight: 600;
  font-size: 20px;
  margin-top: 5px;
}

/* Tombol Click Here */
.btn-click {
  background: #fff;
  color: #1a3b6e;
  border: none;
  border-radius: 50px;
  padding: 12px 28px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.btn-click:hover {
  background: #1a3b6e;
  color: #fff;
  transform: scale(1.05);
}

/* Musik & Navigasi */
.btn-music {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: #2f5480;
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
  background: #9caeff;
  transform: scale(1.1);
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

/* Responsif */
@media (max-width: 768px) {
  .couple-names {
    font-size: 28px;
  }
  .cover-content {
    padding: 24px 28px;
  }
}
</style>
