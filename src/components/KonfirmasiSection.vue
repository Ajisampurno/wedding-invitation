<template>
  <section class="konfirmasi-section" id="konfirmasi">
    <div class="container">
      <div class="header">
        <h2 class="judul fade-up" v-scroll>Konfirmasi Kehadiran</h2>
        <p class="deskripsi fade-up delay" v-scroll>
          Silakan tinggalkan ucapan dan doa terbaik untuk kami.
        </p>
      </div>

      <form class="form-konfirmasi fade-up" @submit.prevent="submitKonfirmasi">
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

      <div class="list-konfirmasi fade-up delay">
        <h3 class="subjudul">Daftar Konfirmasi</h3>
        <div
          class="konfirmasi-card"
          v-for="(item, index) in konfirmasiList"
          :key="index"
        >
          <h4 class="nama">{{ item.nama }}</h4>
          <p class="status">Status: {{ item.status }}</p>
          <p v-if="item.status === 'Hadir'">Jumlah tamu: {{ item.jumlahTamu }}</p>
        </div>
      </div>
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

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to");
  if (to) nama.value = decodeURIComponent(to.replace(/\+/g, " "));
});
</script>

<style scoped>
.konfirmasi-section {
  background: url('/img/bg-white.jpg') center/cover no-repeat;
  padding: 4rem 1rem;
  color: #3e2a18;
  font-family: 'Inter', sans-serif;
  text-align: center;
  position: relative;
}

/* .container {
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px);
} */

.judul {
  font-family: 'Cinzel', serif;
  color: #2f5480;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.deskripsi {
  color: #2c2c2c;
  font-size: 1.05rem;
  margin-bottom: 2rem;
}

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

/* Daftar konfirmasi */
.list-konfirmasi {
  margin-top: 2.5rem;
  text-align: left;
}

.subjudul {
  text-align: center;
  font-size: 1.3rem;
  color: #2f5480;
  font-weight: 600;
  margin-bottom: 1rem;
}

.konfirmasi-card {
  background: rgba(47, 84, 128, 0.15);
  border-left: 4px solid #2f5480;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 0.8rem;
  color: #222;
  transition: all 0.3s ease;
}

.konfirmasi-card:hover {
  background: rgba(47, 84, 128, 0.25);
  transform: translateY(-2px);
}

.konfirmasi-card .nama {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #2f5480;
}

.konfirmasi-card .status {
  font-size: 0.95rem;
  color: #444;
}

/* Scroll rapi */
.list-konfirmasi {
  max-height: 280px;
  overflow-y: auto;
  padding-right: 6px;
}

.list-konfirmasi::-webkit-scrollbar {
  width: 6px;
}

.list-konfirmasi::-webkit-scrollbar-thumb {
  background: rgba(47, 84, 128, 0.4);
  border-radius: 10px;
}

/* Responsif */
@media (max-width: 600px) {
  .judul {
    font-size: 2rem;
    padding: 0.8rem 1.5rem;
  }

  .container {
    padding: 1.5rem;
  }

  .form-konfirmasi input,
  .form-konfirmasi select {
    padding: 0.8rem;
  }
}
</style>
