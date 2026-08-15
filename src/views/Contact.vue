<template>
  <section class="contact section" id="contact">
    <h2>Contact Me</h2>

    <ul class="contact-list">
      <li>
        <strong>Email:</strong>
        <a href="mailto:karangandhi.dev@gmail.com">karangandhi.dev@gmail.com</a>
      </li>
      <li>
        <strong>GitHub:</strong>
        <a
          href="https://github.com/karangandhidev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @karangandhidev
        </a>
      </li>
      <li>
        <strong>LinkedIn:</strong>
        <a
          href="https://www.linkedin.com/in/karangandhidev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          karangandhidev
        </a>
      </li>
    </ul>

    <form class="contact-form" @submit.prevent>
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Your email" required />
      <textarea rows="5" placeholder="Your message" required></textarea>
      <button type="submit" disabled>Send Message (Coming Soon)</button>
    </form>
  </section>
</template>

<script setup>
import "@/styles/components/contact.scss";
</script>