<template>
  <section class="blogs section" id="blogs">
    <h2>My Blogs</h2>

    <div class="carousel-wrapper">
      <button class="nav left" @click="scrollLeft">‹</button>

      <div class="carousel" ref="carousel" @scroll="onScroll">
        <div
          v-for="(blog, index) in loopedBlogs"
          :key="index"
          class="blog-card"
          :class="{ highlighted: index === centeredIndex }"
        >
          <a :href="blog.link" target="_blank">
            <img :src="blog.image" alt="blog image" />
            <div class="content">
              <h3>{{ blog.name }}</h3>
              <p>{{ blog.desc }}</p>
            </div>
          </a>
        </div>
      </div>

      <button class="nav right" @click="scrollRight">›</button>
    </div>
  </section>
</template>

<script setup>
import "@/styles/components/blogs.scss";
import { ref, onMounted, nextTick } from "vue";

const featuredBlogs = [
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

const loopedBlogs = [...featuredBlogs, ...featuredBlogs, ...featuredBlogs];

const carousel = ref(null);
const cardWidth = ref(0);
const centeredIndex = ref(0);

const scrollRight = () => {
  carousel.value?.scrollBy({
    left: cardWidth.value,
    behavior: "smooth",
  });
};

const scrollLeft = () => {
  carousel.value?.scrollBy({
    left: -cardWidth.value,
    behavior: "smooth",
  });
};

const onScroll = () => {
  const container = carousel.value;
  const scrollLeft = container.scrollLeft;
  const containerCenter = scrollLeft + container.offsetWidth / 2;

  const cards = container.querySelectorAll(".blog-card");
  let minDiff = Infinity;
  let closest = 0;

  cards.forEach((card, index) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const diff = Math.abs(containerCenter - cardCenter);
    if (diff < minDiff) {
      minDiff = diff;
      closest = index;
    }
  });

  centeredIndex.value = closest;

  // Infinite scroll logic
  const threshold = featuredBlogs.length;
  const totalCards = loopedBlogs.length;

  if (closest < threshold) {
    container.scrollLeft += featuredBlogs.length * cardWidth.value;
    centeredIndex.value += featuredBlogs.length;
  } else if (closest > totalCards - threshold) {
    container.scrollLeft -= featuredBlogs.length * cardWidth.value;
    centeredIndex.value -= featuredBlogs.length;
  }
};

onMounted(async () => {
  await nextTick();
  const card = carousel.value?.querySelector(".blog-card");
  cardWidth.value = card.offsetWidth + 16;

  // Start at center
  carousel.value.scrollLeft = featuredBlogs.length * cardWidth.value;
});
</script>
