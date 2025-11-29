<template>
  <section class="closing-section" id="closing">
    <div ref="closingContainer" class="closing-container">
      <p class="closing-text">
        Merupakan kebahagiaan bagi kami apabila<br />
        Saudara/Saudari berkenan hadir dan memberikan<br />
        doa baik dalam pernikahan kami.<br /><br />
        Sampai bertemu di hari bahagia kami,
      </p>

      <p class="closing-hashtag">#FromIndahpendentToMrsAji</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const closingContainer = ref(null);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (closingContainer.value) observer.observe(closingContainer.value);
});

onBeforeUnmount(() => {
  if (closingContainer.value && observer) observer.unobserve(closingContainer.value);
});
</script>

<style scoped>
.closing-section {
  background: url('/img/bg-white.jpg') center/cover no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'cambria', serif;
  color: #1c1b1a;
  position: relative;
}

/* Animasi scroll */
.closing-container {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  /* animasi */
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.closing-container.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Text */
.closing-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #2c2c2c;
  margin-bottom: 2rem;
}

.closing-hashtag {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #2f5480;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Responsif */
@media (max-width: 600px) {
  .closing-text {
    font-size: 1rem;
  }
  .closing-hashtag {
    font-size: 0.95rem;
  }
}
</style>
