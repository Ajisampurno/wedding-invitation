<template>
  <section class="konfirmasi-section" id="konfirmasi">
    <div class="container">
      <h2 class="judul fade-up">Konfirmasi Kehadiran</h2>
      <p class="deskripsi fade-up delay">
        Mohon konfirmasi kehadiran Anda agar kami dapat mempersiapkan dengan baik.
      </p>

      <form class="form-konfirmasi fade-up" @submit.prevent="submitKonfirmasi">
        <input v-model="nama" type="text" placeholder="Nama Anda" required readonly/>

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

        <button type="submit">Kirim</button>
      </form>

      <!-- Daftar Konfirmasi -->
      <div class="list-konfirmasi">
        <div
          class="konfirmasi-card fade-up"
          v-for="(item, index) in konfirmasiList"
          :key="index"
        >
          <h4>{{ item.nama }}</h4>
          <p>Status: {{ item.status }}</p>
          <p v-if="item.status === 'Hadir'">Jumlah tamu: {{ item.jumlahTamu }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    import { ref, onMounted } from "vue"

    const nama = ref("")
    const status = ref("")
    const jumlahTamu = ref(1)
    const konfirmasiList = ref([])

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8j-Bhx89ucdPuh_GWEfzWepjSopvzNY4a-2X7FGydW3sEp2vAm6mnwVKzkNOpUOGq0g/exec"

    const submitKonfirmasi = async () => {
    const data = {
        nama: nama.value,
        status: status.value,
        jumlahTamu: status.value === "Hadir" ? jumlahTamu.value : 0,
    }

    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })

        konfirmasiList.value.push(data)

        // nama.value = ""
        status.value = ""
        jumlahTamu.value = 1
        alert("Konfirmasi berhasil disimpan!")
    } catch (err) {
        console.error(err)
        alert("Gagal menyimpan konfirmasi, coba lagi.")
    }
    }

    onMounted(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get("to")
    if (to) {
        nama.value = decodeURIComponent(to.replace(/\+/g, " "))
    }
    })
</script>

<style>
    .konfirmasi-section {
    padding: 60px 20px;
    text-align: center;
    }

    .form-konfirmasi {
    margin: 20px auto;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    }

    .form-konfirmasi input,
    .form-konfirmasi select,
    .form-konfirmasi button {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    }

    .form-konfirmasi button {
    background: #4a2d1f;
    color: white;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
    }
    .form-konfirmasi button:hover {
    background: #4a2d1f;
    }

    /* daftar */
    .list-konfirmasi {
    max-height: 250px;
    overflow-y: auto;
    margin-top: 20px;
    }
    .konfirmasi-card {
    background: #fff;
    border: 1px solid #eee;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 8px;
    text-align: left;
    }
</style>
