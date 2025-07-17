<template>
  <section class="experience section" id="experience">
    <h2>Experience</h2>
    <div v-for="(exp, idx) in experiences" :key="idx" class="exp-entry">
      <h3>{{ exp.role }} - {{ exp.company }}</h3>
      <span>{{ exp.duration }}</span>
      <p>{{ exp.summary }}</p>
    </div>
  </section>
</template>

<script setup>
import "@/styles/components/experience.scss";

const experiences = [
  {
    company: "Current Org (Confidential)",
    role: "Full-Stack Developer",
    duration: "2023 - Present",
    summary:
      "Handled full project lifecycle, led Vue 2 to Vue 3 migration, and optimized large-scale legacy systems.",
  },
  {
    company: "Freelance & Open Source",
    role: "Contributor / Developer",
    duration: "2019 - 2023",
    summary:
      "Built and maintained personal projects, REST APIs, and CMS platforms using Django, FastAPI, Node.js.",
  },
];
</script>
