<template>
  <section class="experience section" id="experience">
    <h2>Experience</h2>
    <div v-for="(exp, idx) in experiences" :key="idx" class="exp-entry">
      <h3>{{ exp.role }} - {{ exp.company }}</h3>
      <span>{{ exp.duration }}</span>
      <p v-html="exp.summary"></p>
    </div>
  </section>
</template>

<script setup>
import "@/styles/components/experience.scss";

const experiences = [
  {
    company: "Dentsu Global Services",
    role: "Software Engineer",
    duration: "Sep 2023 - present",
    summary:
      "Migrated 5+ live projects by upgrading dependencies and modernizing the tech stack, improving performance by 20% and reducing maintenance costs.<br /><br />" +
      "Streamlined 12k+ lines across 160+ files, reducing technical debt by 30% and accelerating development cycles.<br /><br />" +
      "Built scalable RESTful APIs using Node.js (Express) and MySQL, leveraging modular architecture and Redis caching for 15% faster response times.<br /><br />" +
      "Integrated frontend with backend via JWT-authenticated REST APIs, with error boundaries and fallback states for improved user experience.<br /><br />" +
      "Led debugging and performance profiling sessions using Chrome DevTools and Lighthouse, identifying and resolving bottlenecks.",
  },
  {
    company: "Dentsu Global Services",
    role: "Analyst",
    duration: "Jan 2022 - Sep 2023",
    summary:
      "Developed an email standardization framework, decoupling 50+ tightly coupled conditions and reducing code complexity by 30%.<br /><br />" +
      "Delivered responsive websites using Vue.js, JavaScript, and SCSS, improving UI/UX and reducing load times by 20%.<br /><br />" +
      "Built a frontend interface for a Python-based backend, enabling seamless data exchange and bridging critical functionality gaps.",
  },
];
</script>
```
