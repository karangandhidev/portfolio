<template>
  <div
    class="navbar-wrapper"
    :class="{ visible: isIntroInView, hidden: !isIntroInView }"
  >
    <nav class="navbar">
      <a href="#intro" class="navbar-items">Introduction</a>
      <a href="#experience" class="navbar-items">Experience</a>
      <a href="#projects" class="navbar-items">Projects</a>
      <a href="#blogs" class="navbar-items">Blogs</a>
      <a href="#contact" class="navbar-items">Contact</a>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const isIntroInView = ref(true);
const introRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isIntroInView.value = entry.isIntersecting;
    },
    { threshold: 0.5 }
  );

  const introSection = document.getElementById("intro");
  if (introSection) {
    introRef.value = introSection;
    observer.observe(introSection);
  }

  onBeforeUnmount(() => {
    if (introRef.value) {
      observer.unobserve(introRef.value);
    }
  });
});
</script>

<style scoped>
/* Optional: Scoped styling if needed. Otherwise handled in SCSS file */
</style>
