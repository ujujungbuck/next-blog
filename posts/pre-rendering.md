---
title: "Pre-rendering"
date: "2023-09-25"
---

Before we talk about data fetching, let’s talk about one of the most important concepts in Next.js: **Pre-rendering**.

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)
