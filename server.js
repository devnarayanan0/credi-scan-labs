
import dotenv from 'dotenv';
import { parse } from 'node:url';
import fs from 'fs';
dotenv.config();
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = 'mixtral-8x7b-32768'; // You can change this if needed

const app = express();
app.use(cors());
app.use(express.json());

// Routes must be defined after app initialization
app.get('/', (req, res) => {
  res.send('Credi-Scan API is running.');
});

app.post('/scan', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });

  try {
    // Parse domain from URL
    const domain = parse(url).hostname || '';

    // Load mock data
    const data = JSON.parse(fs.readFileSync('./public/mock/data.json', 'utf8'));
    // Try to match domain to a known source
    // Improved domain extraction for matching
    function extractDomain(urlDomain) {
      let d = urlDomain.replace('www.', '');
      // For .in domains, match everything up to .in
      if (d.endsWith('.in')) {
        const idx = d.indexOf('.in');
        return d.substring(0, idx + 3);
      }
      // For others, use last two parts
      const parts = d.split('.');
      return parts.slice(-2).join('.');
    }
    const inputDomain = extractDomain(domain);
    const sourceMatch = data.news_sources.find(src => {
      const jsonDomain = extractDomain(src.domain || '');
      return inputDomain === jsonDomain;
    });
    if (sourceMatch) {
      // Convert credibility score to category
      let credibilityCategory;
      if (sourceMatch.credibility_score >= 85) {
        credibilityCategory = "high";
      } else if (sourceMatch.credibility_score >= 70) {
        credibilityCategory = "medium";
      } else {
        credibilityCategory = "low";
      }

      // Get current date in YYYY-MM-DD format
      const currentDate = new Date().toISOString().split('T')[0];

      return res.json({
        credibility: credibilityCategory,
        score: sourceMatch.credibility_score,
        analysis: {
          source_name: sourceMatch.source_name,
          region: sourceMatch.region,
          language: sourceMatch.language,
          type: sourceMatch.type,
          date_published: currentDate,
          fact_checked: sourceMatch.fact_checked,
          reason: sourceMatch.reason
        }
      });
    }

    // If not found, fallback to previous logic (Groq or error)
    return res.status(404).json({ error: 'Source not found in trusted list.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process request.' });
  }
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
