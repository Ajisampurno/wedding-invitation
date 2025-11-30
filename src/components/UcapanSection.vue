<template>
  <section class="ucapan-section">
    <div class="container">
      <div class="header">
        <h2 class="judul fade-up" v-scroll>Ucapan & Doa</h2>
        <p class="deskripsi fade-up delay" v-scroll>
          Silakan tinggalkan ucapan dan doa terbaik untuk kami.
        </p>
      </div>

      <form class="form-ucapan fade-up" @submit.prevent="submitUcapan" v-scroll>
        <input v-model="nama" type="hidden" placeholder="Nama Anda" required />
        <textarea v-model="pesan" placeholder="Tulis ucapan..." required></textarea>
        <button class="btn-kirim" type="submit">Kirim</button>
      </form>

      <div class="list-ucapan">
        <div class="ucapan-card" v-scroll v-for="(item, index) in ucapanList" :key="index">
          <h4>{{ item.nama }}</h4>
          <p>{{ item.pesan }}</p>
          <small v-if="item.created_at" style="color:#555;">
            {{ item.created_at }}
          </small>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const created_at = ref('')
  const nama = ref("");
  const pesan = ref('')
  const ucapanList = ref([])

  const API_URL = 'https://script.google.com/macros/s/AKfycbyKHnS4Wm940VEPvNR7C9rOh5a_Te3HGzRqusORuuL-0T8cwnw69mKyZjtZDJi7ognn/exec'

  async function loadUcapan() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      ucapanList.value = data;
    } catch (err) {
      console.error("Gagal load ucapan:", err);
    }
  }

  async function submitUcapan() {
    const now = new Date();
    const waktu = now.toLocaleString('id-ID', {
      dateStyle: 'long',
      timeStyle: 'short'
    });

    const newUcapan = { created_at: waktu, nama: nama.value, pesan: pesan.value }
    ucapanList.value.unshift(newUcapan)

    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `nama=${encodeURIComponent(nama.value)}&pesan=${encodeURIComponent(pesan.value)}`
      })
    } catch (err) {
      console.error('Error submit:', err)
    }

    nama.value = ''
    pesan.value = ''
  }

  onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get("to");

    if (toParam) {
      nama.value = decodeURIComponent(toParam);
    }
    loadUcapan()
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
  background: transparent;
  padding: 4rem 0rem;
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
  color: #2f5480;
  font-size: 2.2rem;
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.deskripsi {
  font-family: 'cambria', serif;
  font-size: 0.85rem;
  line-height: 1.85;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 400;
}

.form-ucapan {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.form-ucapan input,
.form-ucapan textarea {
  background: rgba(216, 216, 216, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.form-ucapan .btn-kirim {
  background: #2f5480;
}

/* Placeholder lembut */
.form-ucapan input::placeholder,
.form-ucapan textarea::placeholder {
  color: rgba(0, 0, 0, 0.6);
}

.form-ucapan textarea {
  resize: vertical;
  min-height: 100px;
}

/* Fokus dengan aksen emas */
.form-ucapan input:focus,
.form-ucapan textarea:focus {
  outline: none;
  border-color: #2f5480;
  background: rgba(255, 255, 255, 0.55);
}

/* Tombol Transparan */
.form-ucapan button {
  background: rgba(255, 255, 255, 0.15);
  color: #fffaf3;
  border: 1px solid rgba(128, 147, 255, 0.3);
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(6px);
}

/* Hover emas */
.form-ucapan button:hover {
  background: #2f5480;
  color: #fff;
  transform: scale(1.03);
}


.list-ucapan {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.ucapan-card {
  text-align: left;
  margin-top: 10px;
  background: rgba(216, 216, 216, 0.7);
  border: 1px solid rgba(128, 147, 255, 0.3);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  color: #000000;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  /* Tambahan anti-offside */
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap; /* biar line break di text ikut kebaca */
  max-width: 100%;
  box-sizing: border-box;
}

.ucapan-card p {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #222;
  /* biar panjang tapi tetap rapi */
  word-break: break-word;
  overflow-wrap: anywhere;
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

/* list ucapan scroll */
.list-ucapan {
  max-height: 600px;
  overflow-y: auto;
  margin-top: 20px;
  padding-right: 10px;
}
.list-ucapan::-webkit-scrollbar {
  width: 6px;
}
.list-ucapan::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
.list-ucapan::-webkit-scrollbar-track {
  background: transparent;
}

/* Responsif */
@media (max-width: 600px) {
  .judul {
    font-size: 2.2rem;
  }
  .form-ucapan input,
  .form-ucapan textarea {
    font-size: 0.95rem;
  }
}
</style>
