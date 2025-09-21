// API configuration for different environments
export const getApiBaseUrl = () => {
  // Check if we're in development (localhost)
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // If running on localhost, use the local server
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:4000';
    }
  }
  
  // For production/Vercel, we'll create a fallback API or use demo mode
  return null; // This will trigger demo mode
};

// Demo data for when API is not available
export const getDemoCredibilityData = (url: string) => {
  // Extract domain for demo purposes
  let domain = '';
  try {
    domain = new URL(url).hostname.replace('www.', '');
  } catch {
    domain = 'unknown';
  }

  // Generate demo data based on domain
  const demoSources = [
    { domain: 'bbc.com', score: 92, name: 'BBC News', region: 'UK', type: 'Broadcast + Online', factChecked: true },
    { domain: 'cnn.com', score: 78, name: 'CNN', region: 'US', type: 'Broadcast + Online', factChecked: false },
    { domain: 'reuters.com', score: 94, name: 'Reuters', region: 'Global', type: 'Wire Service', factChecked: true },
    { domain: 'nytimes.com', score: 90, name: 'The New York Times', region: 'US', type: 'Newspaper + Online', factChecked: true },
    { domain: 'theguardian.com', score: 85, name: 'The Guardian', region: 'UK', type: 'Newspaper + Online', factChecked: true },
  ];

  // Find matching source or create random demo data
  const matchedSource = demoSources.find(source => domain.includes(source.domain.split('.')[0]));
  
  if (matchedSource) {
    return {
      credibility: matchedSource.score >= 85 ? 'high' : matchedSource.score >= 70 ? 'medium' : 'low',
      score: matchedSource.score,
      analysis: {
        source_name: matchedSource.name,
        region: matchedSource.region,
        language: 'English',
        type: matchedSource.type,
        date_published: new Date().toISOString().split('T')[0],
        fact_checked: matchedSource.factChecked,
        reason: matchedSource.factChecked ? 'Verified news source with editorial standards' : 'Mixed editorial quality, verify claims independently'
      }
    };
  }

  // Default demo data for unknown sources
  const randomScore = Math.floor(Math.random() * 40) + 60; // 60-100
  return {
    credibility: randomScore >= 85 ? 'high' : randomScore >= 70 ? 'medium' : 'low',
    score: randomScore,
    analysis: {
      source_name: 'Demo Source',
      region: 'Global',
      language: 'English',
      type: 'Online News',
      date_published: new Date().toISOString().split('T')[0],
      fact_checked: Math.random() > 0.5,
      reason: 'Demo mode - This is sample data for demonstration purposes'
    }
  };
};

// Create extension zip data for download (demo mode)
export const createDemoExtensionZip = async (): Promise<Blob> => {
  // In a real implementation, you would create a proper zip file
  // For demo purposes, we'll create a simple text file
  const demoContent = `
# News Credibility Checker Extension - Demo Version

This is a demo download. In a real deployment, this would be the actual extension files.

## Installation Instructions:
1. This is a demo version
2. For the real extension, you would need the actual extension files
3. Contact the developer for the production version

## Files that would be included:
- manifest.json
- popup.html
- popup.js
- styles.css
- background.js
- content.js
- logo.png
- README.md

## Note:
This demo shows the download functionality. The actual extension would require proper backend infrastructure.
`;

  return new Blob([demoContent], { type: 'text/plain' });
};