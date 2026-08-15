<template>
  <section class="intro section" id="intro">
    <div class="eyebrow">Backend / Full-stack Engineer</div>
    <h1>Karan Gandhi</h1>

    <p>
      I'm a Backend / Full-stack Software Engineer. Currently at
      <strong>Google Operations Center</strong>, I lead architectural
      decisions for scalable, configuration-driven email template systems —
      owning end-to-end implementation across HTML, CSS, and Apache
      FreeMarker, including custom Google Apps Script tooling for validation
      and workflow automation.
    </p>
    <br />

    <p>
      Previously at Dentsu Global Services, I designed modular RESTful APIs
      on Node.js and MySQL supporting high-traffic production systems, with
      JWT-based auth and Redis caching for faster response times. I also cut
      code complexity by 30% by decoupling 50+ tightly coupled conditions,
      and led a large-scale Vue 2 → 3 migration across 5+ live projects —
      streamlining 12k+ lines across 160+ files without breaking production.
    </p>
    <br />

    <p>
      My project work extends that into full ownership: <strong>MindWeave</strong>
      is a real-time, offline-first sync engine built on Postgres and
      Supabase, and the <strong>Shashwat Society Dashboard</strong> is a
      full-featured ticketing system built end-to-end on Next.js and
      Postgres. I care about systems that hold up under real load and stay
      maintainable after I've moved on.
    </p>
    <br />

    <p>
      Open to backend, full-stack, and finance/product engineering roles.
      I'm happy to walk through the architecture behind any of the systems
      below.
    </p>

    <div class="trace">
      <div class="trace-label">// request lifecycle — as built</div>
      <div class="trace-row">
        <div class="node">Client<span class="k">web / mobile</span></div>
        <div class="seg"></div>
        <div class="node">API<span class="k">Node.js · REST</span></div>
        <div class="seg"></div>
        <div class="node">Auth<span class="k">JWT</span></div>
        <div class="seg"></div>
        <div class="node">Cache<span class="k">Redis</span></div>
        <div class="seg"></div>
        <div class="node">DB<span class="k">Postgres / MySQL</span></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "@/styles/components/intro.scss";
</script>