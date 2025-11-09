<template>
  <section class="konfirmasi-section" id="konfirmasi">
    <div class="container">
      <div class="header">
        <h2 class="judul fade-up" v-scroll>Konfirmasi Kehadiran</h2>
        <p class="deskripsi fade-up delay" v-scroll>
          Silakan tinggalkan ucapan dan doa terbaik untuk kami.
        </p>
      </div>

      <form class="form-konfirmasi fade-up" v-scroll @submit.prevent="submitKonfirmasi">
        <input
          v-model="nama"
          type="text"
          placeholder="Nama Anda"
          required
          readonly
        />

        <select v-model="status" required>
          <option value="" disabled>Pilih Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>

        <input
          v-if="status === 'Hadir'"
          v-model.number="jumlahTamu"
          type="number"
          min="1"
          placeholder="Jumlah Tamu"
          required
        />

        <button type="submit" class="btn-kirim">Kirim</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const nama = ref("");
const status = ref("");
const jumlahTamu = ref(1);
const konfirmasiList = ref([]);

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby8j-Bhx89ucdPuh_GWEfzWepjSopvzNY4a-2X7FGydW3sEp2vAm6mnwVKzkNOpUOGq0g/exec";

const submitKonfirmasi = async () => {
  const data = {
    nama: nama.value,
    status: status.value,
    jumlahTamu: status.value === "Hadir" ? jumlahTamu.value : 0,
  };

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    konfirmasiList.value.push(data);
    status.value = "";
    jumlahTamu.value = 1;
    alert("Konfirmasi berhasil disimpan!");
  } catch (err) {
    console.error(err);
    alert("Gagal menyimpan konfirmasi, coba lagi.");
  }
};

// Ambil nama dari URL (contoh: ?to=Aji+Sampurno)
onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to");
  if (to) nama.value = decodeURIComponent(to.replace(/\+/g, " "));
});
</script>

<script>
export default {
  directives: {
    scroll: {
      mounted(el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.classList.add("visible");
              } else {
                el.classList.remove("visible");
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(el);
      },
    },
  },
};
</script>

<style scoped>
.konfirmasi-section {
  background: url('/img/bg-white.jpg') center/cover no-repeat;
  padding: 4rem 1rem;
  min-height: 100vh;
  color: #3e2a18;
  font-family: 'Inter', sans-serif;
  text-align: center;
  position: relative;
}

.judul {
  font-family: 'Cinzel', serif;
  color: #2f5480;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.deskripsi {
  font-size: 0.85rem;
  line-height: 1.85;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 400;
}

/* ============================= */
/* ✨ ANIMASI FADE + ZOOM SCROLL */
/* ============================= */
.fade-up {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: all 0.9s ease;
  will-change: opacity, transform;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-up.delay {
  transition-delay: 0.2s;
}

/* ============================= */

.form-konfirmasi {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-konfirmasi input,
.form-konfirmasi select {
  width: 100%;
  padding: 0.9rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.form-konfirmasi input:focus,
.form-konfirmasi select:focus {
  border-color: #2f5480;
  outline: none;
  box-shadow: 0 0 5px rgba(47, 84, 128, 0.3);
}

.btn-kirim {
  background: #2f5480;
  color: #fff;
  border: none;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-kirim:hover {
  background: #3a6bb3;
  transform: scale(1.03);
}

/* Responsif */
@media (max-width: 600px) {
  .judul {
    font-size: 2rem;
  }

  .form-konfirmasi input,
  .form-konfirmasi select {
    padding: 0.8rem;
  }
}
</style>