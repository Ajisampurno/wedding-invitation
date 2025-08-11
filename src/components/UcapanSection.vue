<template>
  <section class="ucapan-section">
    <div class="container">
      <h2 class="judul fade-up" v-scroll>Ucapan & Doa</h2>
      <p class="deskripsi fade-up delay" v-scroll>
        Silakan tinggalkan ucapan dan doa terbaik untuk kami.
      </p>

      <form class="form-ucapan fade-up" @submit.prevent="submitUcapan" v-scroll>
        <input v-model="nama" type="text" placeholder="Nama Anda" required />
        <textarea v-model="pesan" placeholder="Tulis ucapan..." required></textarea>
        <button type="submit">Kirim</button>
      </form>

      <div class="list-ucapan">
        <div class="ucapan-card fade-up" v-scroll v-for="(item, index) in ucapanList" :key="index">
          <h4>{{ item.nama }}</h4>
          <p>{{ item.pesan }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const nama = ref('')
const pesan = ref('')
const ucapanList = ref([
  { nama: 'Budi', pesan: 'Selamat menempuh hidup baru, semoga bahagia selalu!' },
  { nama: 'Siti', pesan: 'Barakallahu lakuma! Langgeng sampai surga ya.' }
])

// function submitUcapan() {
//   ucapanList.value.unshift({
//     nama: nama.value,
//     pesan: pesan.value
//   })
//   nama.value = ''
//   pesan.value = ''
// }

async function submitUcapan() {
    if (!nama.value || !pesan.value) return;

    const newUcapan = {
        nama: nama.value,
        pesan: pesan.value
    }

    ucapanList.value.unshift(newUcapan);
    await fetch('https://script.google.com/macros/s/AKfycbywEdDxgU8tzzIrsMEEw7__ReAfGVctmzcB4UcAtzdHMpCggB6Rw9YPlmkWC0uclEDy/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `nama=${encodeURIComponent(nama.value)}&pesan=${encodeURIComponent(pesan.value)}`
    })
    .then(r => r.json())
    .then(data => console.log('Sukses:', data))
    .catch(err => console.error('Error:', err));

    nama.value = ''
    pesan.value = ''
}


// Scroll animation
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
  document.querySelectorAll('[v-scroll], [v-scroll="true"]').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Cinzel:wght@600&display=swap');

.ucapan-section {
  background-color: #fffaf3;
  padding: 4rem 1.5rem;
  color: #4a2d1f;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.ucapan-section::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -25%;
  right: -25%;
  background: url('/img/bg-batik.jpg') center/cover no-repeat;
  opacity: 0.04;
  z-index: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.judul {
  font-family: 'Cinzel', serif;
  font-size: 2.2rem;
  color: #b88c4a;
  margin-bottom: 1rem;
}

.deskripsi {
  font-size: 1.05rem;
  margin-bottom: 2rem;
  color: #5c3d2e;
}

.form-ucapan {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.form-ucapan input,
.form-ucapan textarea {
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #decaa2;
  font-family: inherit;
  font-size: 1rem;
  background: #fff;
}
.form-ucapan textarea {
  resize: vertical;
  min-height: 100px;
}
.form-ucapan button {
  background: #b88c4a;
  color: #fffaf3;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}
.form-ucapan button:hover {
  background: #a37638;
}

.list-ucapan {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.ucapan-card {
  text-align: left;
  background: #fffaf3;
  border: 1px solid #ead9bd;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.ucapan-card h4 {
  font-size: 1rem;
  font-weight: bold;
  color: #b88c4a;
}
.ucapan-card p {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Animasi Scroll */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}
.in-view {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.delay {
  transition-delay: 0.3s;
}

/* Responsif */
@media (max-width: 600px) {
  .judul {
    font-size: 1.8rem;
  }
  .form-ucapan input,
  .form-ucapan textarea {
    font-size: 0.95rem;
  }
}
</style>
