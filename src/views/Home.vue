<!-- src/views/Home.vue -->
<template>
  <main id="home">
    <NavBar />
    <div class="portfolio">
      <Intro />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  </main>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Intro from "@/views/Intro.vue";
import Experience from "@/views/Experience.vue";
import Projects from "@/views/Projects.vue";
import Blogs from "@/views/Blogs.vue";
import Contact from "@/views/Contact.vue";
</script>
