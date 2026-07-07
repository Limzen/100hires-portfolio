const fs = require('fs');
const path = require('path');
const { YoutubeTranscript } = require('youtube-transcript');

const videos = [
  { name: 'aaron-ross-predictable-revenue', url: 'https://www.youtube.com/watch?v=XofNBZy_aVQ' },
  { name: 'jason-lemkin-saastr', url: 'https://www.youtube.com/watch?v=te_BfxTz-xk' },
  { name: 'guillaume-moubeche-outreach', url: 'https://www.youtube.com/watch?v=s8sJGKdiqoc' }
];

const outputDir = path.join(__dirname, 'youtube-transcripts');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function fetchTranscripts() {
  for (const video of videos) {
    try {
      console.log(`Fetching transcript for ${video.name}...`);
      const transcript = await YoutubeTranscript.fetchTranscript(video.url);
      const text = transcript.map(t => t.text).join(' ');
      
      const filePath = path.join(outputDir, `${video.name}.md`);
      fs.writeFileSync(filePath, `# Transcript: ${video.name}\n\n${text}`);
      console.log(`Saved ${video.name}.md successfully.`);
    } catch (error) {
      console.error(`Failed to fetch transcript for ${video.name}: ${error.message}`);
      const filePath = path.join(outputDir, `${video.name}.md`);
      fs.writeFileSync(filePath, `# Transcript: ${video.name}\n\n[Transcript could not be fetched: ${error.message}]`);
    }
  }
}

fetchTranscripts();
