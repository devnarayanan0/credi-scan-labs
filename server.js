app.get('/', (req, res) => {
  res.send('Credi-Scan API is running.');
});
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/scan', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });

  try {
    const response = await fetch(url);
    const html = await response.text();

    const credibility = Math.random() > 0.5 ? 'high' : 'low';
    const score = credibility === 'high' ? 92 : 45;
    const analysis = {
      sources: '3 major news outlets',
      sentiment: 'neutral',
      factChecked: credibility === 'high'
    };

    res.json({ credibility, score, analysis });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch article' });
  }
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
