<template>
  <section class="cover" @click="$emit('openInvitation')">
    <div class="cover-content">
      <p class="subtitle">Welcome to our forever</p>
      <h1 class="title">THE WEDDING<br />OF AJI & INDAH</h1>
      <p class="date">29.12.2025</p>
      <button class="save-btn">Save the date</button>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel&display=swap');

/* === BASE COVER === */
.cover {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url('/img/cover-hero.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  overflow: hidden;
}

/* === TEXT PANEL === */
.cover-content {
  text-align: center;
  padding: 3rem 2rem;
  color: #fff;
  width: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  font-family: 'Cinzel', serif;
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.title {
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.date {
  font-family: 'Great Vibes', cursive;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.save-btn {
  background: #fff;
  color: #91a7c7;
  border: none;
  padding: 0.6rem 1.8rem;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.save-btn:hover {
  background: #f1f5f9;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .cover {
    background-position: center;
    justify-content: center;
  }

  .cover-content {
    width: 90%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    backdrop-filter: blur(3px);
  }

  .title {
    font-size: 1.5rem;
  }

  .date {
    font-size: 1.8rem;
  }
}
</style>
