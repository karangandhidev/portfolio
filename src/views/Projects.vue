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
    name: "Mindweave – Visual Thinking, Simplified",
    desc: "A minimalist, local-first canvas app for mapping out thoughts using draggable notes and connections. Built for clarity and focus, not chaos.",
    link: "https://mindweave.karangandhi.dev",
  },
  {
    name: "Reddit Subscription Manager",
    desc: "A fast, privacy-respecting tool to manage your Reddit subscriptions in bulk. Filter Normal or NSFW subreddits, sort by subscribed or unsubscribed, manage multi-feeds, and batch unsubscribe — all with offline storage and no tracking.",
    link: "https://redditbulksubtool.karangandhi.dev",
  },
  {
    name: "Yelp Restaurant Recommendation System",
    desc: "A recommendation system for restaurants based on data analysis using the official Yelp dataset.",
    code: "https://github.com/karangandhidev/YelpRecommendationSystem",
  },
  {
    name: "Shashwat Society Dashboard",
    desc: "Full-featured ticketing system for a group of societies",
    link: "https://shashwatsociety.vercel.app",
    code: "https://github.com/karangandhidev/shashwatsociety",
  },
  {
    name: "OnePass - A Secure Data Locker & Password Generator",
    desc: "A secure data locker and password generator built using React Native and MongoDB.",
    code: "https://github.com/karangandhidev/DataLocker-PasswordGenerator",
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
