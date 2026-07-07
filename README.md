# B2B SaaS Cold Outreach: Expert Research

## Project Overview
This repository contains high-signal research data for building a Cold outreach pipeline for B2B SaaS.

## Methodology & Data Collection
I prioritized data quality and technical pragmatism:

- **Expert Curation:** Listed in `research/sources.md`. I specifically avoided generic influencers and focused on actual GTM operators, founders, and sales architects (e.g., Aaron Ross, Josh Braun, Jason Lemkin).
- **YouTube Transcripts (API/Script):** Built a Node.js script (`fetch-youtube.js`) to extract transcripts. Handled API payload formatting and error catching (e.g., when transcripts are disabled by the creator). Data is stored in `/research/youtube-transcripts/`.
- **LinkedIn Posts (Manual Curation):** To avoid LinkedIn's strict bot-scraping bans and to ensure a high signal-to-noise ratio, I manually curated 3 specific, tactical posts from top experts. Data is stored in `/research/linkedin-posts/`.

## Why These Experts?
The selected individuals do not just write about theory; they have built actual $10M+ pipelines, authored foundational playbooks (like Predictable Revenue), or run massive sales communities. Their insights provide the exact tactical depth required to train a high-performing AI outreach agent.