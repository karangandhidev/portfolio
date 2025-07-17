<template>
  <section class="blogs section" id="blogs">
    <div class="featured-blogs">
      <h2>My Blogs</h2>
      <div class="blog-grid">
        <div
          v-for="(blog, idx) in featuredBlogs"
          :key="idx"
          class="blog-card"
        >
          <h3>{{ blog.name }}</h3>
          <p>{{ blog.desc }}</p>
          <a
            :href="blog.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Blog
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '@/styles/components/blogs.scss'

const featuredBlogs = [
  {
    name: 'Migration of a legacy project from Vue 2 to Vue 3: A Deep Dive',
    desc:
      'A developer’s journey migrating a 15+ year-old Vue 2 project to Vue 3 — tackling legacy code, refactoring patterns, and lessons learned along the way.',
    link: 'https://medium.com/@karangandhi.dev/1951d0f15167',
  },
  {
    name: 'The Art of Deleting Code',
    desc: 'How I Cleaned Up A Legacy Project Without Breaking it',
    link: 'https://medium.com/@karangandhi.dev/c883e3fcd851',
  },
]
</script>
