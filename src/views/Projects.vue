<template>
  <section class="projects section" id="projects">
    <h2>Project Showcase</h2>
    <div class="showcase-projects">
      <div class="project-grid">
        <div
          v-for="(proj, idx) in showcaseProjects"
          :key="idx"
          class="project-card"
        >
          <h3>{{ proj.name }}</h3>
          <p>{{ proj.desc }}</p>
          <div class="button-row">
            <a
              v-if="proj.code"
              :href="proj.code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              v-if="proj.link"
              :href="addHttpIfMissing(proj.link)"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="other-projects">
      <h2>Other Projects</h2>
      <div class="project-grid">
        <div
          v-for="(proj, idx) in otherProjects"
          :key="idx"
          class="project-card"
        >
          <h3>{{ proj.name }}</h3>
          <p>{{ proj.desc }}</p>
          <div class="button-row">
            <a
              v-if="proj.code"
              :href="proj.code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              v-if="proj.link"
              :href="addHttpIfMissing(proj.link)"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "@/styles/components/projects.scss";

const showcaseProjects = [
  {
    name: "Shashwat Society Dashboard",
    desc: "Full-stack ticketing system for a group of societies, built on Next.js and PostgreSQL — covers ticket lifecycle, role-based access, and multi-tenant data handling.",
    link: "https://shashwatsociety.vercel.app",
    code: "https://github.com/karangandhidev/shashwatsociety",
  },
  {
    name: "MindWeave – Visual Thinking, Simplified with Real-time Sync",
    desc: "Infinite-canvas brainstorming platform built around a real-time, offline-first sync engine on Postgres and Supabase, with conflict resolution so edits reconcile cleanly after network interruptions.",
    link: "https://mindweave.karangandhi.dev",
  },
  {
    name: "OnePass — Secure Data Locker & Password Generator",
    desc: "Encrypted credential storage and password generator built on React Native and MongoDB, with local encryption before any data leaves the device.",
    code: "https://github.com/karangandhidev/DataLocker-PasswordGenerator",
  },
  {
    name: "Yelp Restaurant Recommendation System",
    desc: "Recommendation engine built on the official Yelp dataset — data cleaning, similarity scoring, and ranking logic for restaurant suggestions.",
    code: "https://github.com/karangandhidev/YelpRecommendationSystem",
  },
  {
    name: "Reddit Subscription Manager",
    desc: "Bulk subreddit management tool with batch subscribe/unsubscribe, multi-feed handling, and fully offline local storage — no server, no tracking.",
    link: "https://redditbulksubtool.karangandhi.dev",
  },
];

const otherProjects = [
  {
    name: "Automated Attendance System (RFID) with Proxy Detection",
    desc: "An academic project that automates attendance with RFID, detect proxies using camera and generates reports in an attendance system.",
    code: "https://github.com/karangandhidev/AutomatedAttendanceSystem",
  },
  {
    name: "Optical Character Recognition (OCR)",
    desc: "An academic project involving OCR to extract text from images and convert it into machine-readable format, including the ability to convert the text into audio.",
    code: "https://github.com/karangandhidev/OCR",
  },
  {
    name: "nextMGZN",
    desc: "[No longer in use] A website for the nextMGZN project, a freelance project for building a professional website.",
    code: "https://github.com/karangandhidev/nextMGZN",
    link: "",
  },
  {
    name: "LinkedIn Job Scraper",
    desc: "A web scraper designed to search for job postings on LinkedIn. The data can be used for training machine learning models.",
    code: "https://github.com/karangandhidev/LinkedInJobScraper",
  },
];

function addHttpIfMissing(url) {
  if (!url) return "#";
  return url.startsWith("http") ? url : `https://${url}`;
}
</script>
