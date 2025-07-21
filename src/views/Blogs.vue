<template>
  <section class="blogs section" id="blogs">
    <h2>My Blogs</h2>
    <div class="carousel-wrapper">
      <Carousel
        :items-to-show="itemsToShow"
        :wrap-around="true"
        :transition="500"
        :snap-align="'center'"
      >
        <Slide v-for="blog in initialBlogs" :key="blog.name">
          <div class="blog-card">
            <a :href="blog.link" target="_blank">
              <img :src="blog.image" alt="blog image" />
              <div class="content">
                <h3>{{ blog.name }}</h3>
                <p>{{ blog.desc }}</p>
              </div>
            </a>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import "@/styles/components/blogs.scss";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, onMounted, onUnmounted } from "vue";

const initialBlogs = [
  {
    name: "Migration of a legacy project from Vue 2 to Vue 3: A Deep Dive",
    desc: "Step-by-step breakdown of migrating a live production Vue 2 app to Vue 3, covering strategy, planning, compatibility mode, and key lessons…",
    link: "https://medium.com/@karangandhi.dev/migration-of-a-legacy-project-from-vue-2-to-vue-3-a-deep-dive-1951d0f15167",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*P5fyl7NZksor26iG",
  },
  {
    name: "The Art of Deleting Code: How I Cleaned Up A Legacy Project Without Breaking it",
    desc: "We always talk about writing code. Building features. Shipping fast. But sometimes, the real flex is knowing what to delete.",
    link: "https://medium.com/@karangandhi.dev/the-art-of-deleting-code-how-i-cleaned-up-a-legacy-project-without-breaking-it-c883e3fcd851",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ND3T7e8GC8yqc4_BA3Kawg.png",
  },
  {
    name: "The Cost of Poor Documentation: How Missing Docs Destroy Team Velocity",
    desc: "How one undocumented project taught me the true cost of keeping knowledge in people's heads instead of pages.",
    link: "https://medium.com/@karangandhi.dev/the-cost-of-poor-documentation-how-missing-docs-destroy-team-velocity-6251f3141923",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_nAbfU1G-CrcAbmObtDWdQ.png",
  },
  {
    name: "Why “Works on My Machine” Isn’t Good Enough Anymore",
    desc: "How local setups mislead developers and what modern teams do instead",
    link: "https://medium.com/@karangandhi.dev/why-works-on-my-machine-isnt-good-enough-anymore-9b1b1827a6dc",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ixts4oT6_0EHHTcQwNmpWg.png",
  },
  {
    name: "The Myth of “Quick Fixes” in Software Development",
    desc: "Quick Fixes aren’t always quick",
    link: "https://medium.com/@karangandhi.dev/the-myth-of-quick-fixes-in-software-development-155592cf88ca",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3WCekQiiAPmQ5dld7p37AQ.png",
  },
  {
    name: "Why Modular Code Isn’t Optional Anymore",
    desc: "Build fast, scale faster: Why modularity is the future of clean code.",
    link: "https://medium.com/@karangandhi.dev/why-modular-code-isnt-optional-anymore-8a37928d82a5",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*SbKNFxOyMsaXpM-emnh3dA.png",
  },
  {
    name: "Vue 2 to Vue 3 Migration: Real-World Challenges and Fixes",
    desc: "Real-world Vue 2 to Vue 3 migration guide with fixes, code samples, and lessons learned from upgrading a legacy app while battling breaking changes.",
    link: "https://medium.com/@karangandhi.dev/vue-2-to-vue-3-migration-real-world-challenges-and-fixes-952546966aff",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*fVNAXmVuN9sJkmHzc04aBg.png",
  },
];

const itemsToShow = ref(2.5);

const updateItemsToShow = () => {
  if (window.innerWidth < 768) {
    itemsToShow.value = 1.15;
  } else if (window.innerWidth < 1200) {
    itemsToShow.value = 2.5;
  } else {
    itemsToShow.value = 3;
  }
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsToShow);
});
</script>
