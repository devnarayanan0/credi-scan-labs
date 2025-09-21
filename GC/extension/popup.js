// DOM Elements
const scanBtn = document.getElementById("scanBtn");
const statusMessage = document.getElementById("status-message");
const scoreText = document.getElementById("score-text");
const scoreProgress = document.getElementById("score-progress");
const sourceName = document.getElementById("source-name");
const region = document.getElementById("region");
const language = document.getElementById("language");
const type = document.getElementById("type");
const dateAnalyzed = document.getElementById("date-analyzed");
const factChecked = document.getElementById("fact-checked");
const statusValue = document.getElementById("status-value");
const credibilityCard = document.getElementById("credibility-card");

// Complete news sources database (from public/mock/data.json)
const NEWS_SOURCES_DATA = {
  "news_sources": [
    {
      "source_name": "The New York Times",
      "region": "US",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 90,
      "fact_checked": true,
      "reason": "Strong editorial standards and fact-checking",
      "domain": "nytimes.com"
    },
    {
      "source_name": "BBC News",
      "region": "UK",
      "language": "English",
      "type": "Broadcast + Online",
      "credibility_score": 88,
      "fact_checked": true,
      "reason": "Globally trusted public broadcaster",
      "domain": "bbc.co.uk"
    },
    {
      "source_name": "Reuters",
      "region": "Global",
      "language": "English",
      "type": "Wire Service",
      "credibility_score": 92,
      "fact_checked": true,
      "reason": "Wire service with strict sourcing",
      "domain": "reuters.com"
    },
    {
      "source_name": "Associated Press (AP)",
      "region": "US",
      "language": "English",
      "type": "Wire Service",
      "credibility_score": 91,
      "fact_checked": true,
      "reason": "Reliable news agency cited worldwide",
      "domain": "apnews.com"
    },
    {
      "source_name": "The Wall Street Journal",
      "region": "US",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 87,
      "fact_checked": true,
      "reason": "Strong business reporting and standards",
      "domain": "wsj.com"
    },
    {
      "source_name": "The Washington Post",
      "region": "US",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 86,
      "fact_checked": true,
      "reason": "Investigative reporting and editorial oversight",
      "domain": "washingtonpost.com"
    },
    {
      "source_name": "The Guardian",
      "region": "UK",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 85,
      "fact_checked": true,
      "reason": "Investigative journalism, established outlet",
      "domain": "theguardian.com"
    },
    {
      "source_name": "Bloomberg",
      "region": "Global",
      "language": "English",
      "type": "News Agency / Financial",
      "credibility_score": 88,
      "fact_checked": true,
      "reason": "Respected financial news organization",
      "domain": "bloomberg.com"
    },
    {
      "source_name": "Financial Times",
      "region": "UK",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 87,
      "fact_checked": true,
      "reason": "Reputable business journalism",
      "domain": "ft.com"
    },
    {
      "source_name": "The Economist",
      "region": "UK",
      "language": "English",
      "type": "Magazine",
      "credibility_score": 89,
      "fact_checked": true,
      "reason": "In-depth analysis and editorial standards",
      "domain": "economist.com"
    },
    {
      "source_name": "New York Post",
      "region": "US",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 60,
      "fact_checked": false,
      "reason": "Tabloid style, sensational headlines",
      "domain": "nypost.com"
    },
    {
      "source_name": "Daily Mail (MailOnline)",
      "region": "UK",
      "language": "English",
      "type": "Online Tabloid",
      "credibility_score": 55,
      "fact_checked": false,
      "reason": "High reach but frequent sensationalism",
      "domain": "dailymail.co.uk"
    },
    {
      "source_name": "The Times (UK)",
      "region": "UK",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 80,
      "fact_checked": true,
      "reason": "Established national newspaper",
      "domain": "thetimes.co.uk"
    },
    {
      "source_name": "The Independent",
      "region": "UK",
      "language": "English",
      "type": "Online Newspaper",
      "credibility_score": 77,
      "fact_checked": true,
      "reason": "Independent reporting, online-focused",
      "domain": "independent.co.uk"
    },
    {
      "source_name": "Al Jazeera",
      "region": "Qatar/Global",
      "language": "English/Arabic",
      "type": "Broadcast + Online",
      "credibility_score": 82,
      "fact_checked": true,
      "reason": "Extensive international coverage, regional perspective",
      "domain": "aljazeera.com"
    },
    {
      "source_name": "CNN",
      "region": "US",
      "language": "English",
      "type": "Broadcast + Online",
      "credibility_score": 78,
      "fact_checked": false,
      "reason": "Large reach, mixed editorial quality at times",
      "domain": "cnn.com"
    },
    {
      "source_name": "NBC News",
      "region": "US",
      "language": "English",
      "type": "Broadcast + Online",
      "credibility_score": 79,
      "fact_checked": true,
      "reason": "Major US broadcaster with standards",
      "domain": "nbcnews.com"
    },
    {
      "source_name": "CBS News",
      "region": "US",
      "language": "English",
      "type": "Broadcast + Online",
      "credibility_score": 78,
      "fact_checked": true,
      "reason": "Longstanding broadcast news outlet",
      "domain": "cbsnews.com"
    },
    {
      "source_name": "ABC News (Australia)",
      "region": "Australia",
      "language": "English",
      "type": "Broadcast + Online",
      "credibility_score": 86,
      "fact_checked": true,
      "reason": "Public broadcaster with editorial oversight",
      "domain": "abc.net.au"
    },
    {
      "source_name": "The Hindu",
      "region": "India",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 81,
      "fact_checked": true,
      "reason": "Respected Indian national newspaper",
      "domain": "thehindu.com"
    },
    {
      "source_name": "Times of India",
      "region": "India",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 76,
      "fact_checked": false,
      "reason": "Very high reach but sometimes sensational headlines",
      "domain": "timesofindia.indiatimes.com"
    },
    {
      "source_name": "Indian Express",
      "region": "India",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 79,
      "fact_checked": true,
      "reason": "Investigative reporting and editorials",
      "domain": "indianexpress.com"
    },
    {
      "source_name": "Hindustan Times",
      "region": "India",
      "language": "English",
      "type": "Newspaper + Online",
      "credibility_score": 75,
      "fact_checked": false,
      "reason": "Popular national outlet, mixed depth",
      "domain": "hindustantimes.com"
    },
    {
      "source_name": "NDTV",
      "region": "India",
      "language": "English/Hindi",
      "type": "Broadcast + Online",
      "credibility_score": 74,
      "fact_checked": false,
      "reason": "Large broadcaster, variable editorial quality",
      "domain": "ndtv.com"
    },
    {
      "source_name": "India Today",
      "region": "India",
      "language": "English/Hindi",
      "type": "Magazine + Online",
      "credibility_score": 72,
      "fact_checked": false,
      "reason": "Popular news magazine, mixed rigor",
      "domain": "indiatoday.in"
    }
  ]
};

// Extract domain from URL (same logic as server)
function extractDomain(url) {
  try {
    const urlObj = new URL(url);
    let domain = urlObj.hostname.replace('www.', '');
    
    // For .in domains, match everything up to .in
    if (domain.endsWith('.in')) {
      const idx = domain.indexOf('.in');
      return domain.substring(0, idx + 3);
    }
    
    // For others, use last two parts
    const parts = domain.split('.');
    return parts.slice(-2).join('.');
  } catch (error) {
    return '';
  }
}

// Analyze credibility using embedded data
function analyzeCredibility(url) {
  const domain = extractDomain(url);
  
  if (!domain) {
    return null;
  }
  
  // Find matching source
  const sourceMatch = NEWS_SOURCES_DATA.news_sources.find(src => {
    const jsonDomain = extractDomain(src.domain || '');
    return domain === jsonDomain;
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

    // Get current date
    const currentDate = new Date().toISOString().split('T')[0];

    return {
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
    };
  }
  
  return null;
}

// Update UI based on credibility score
function updateCredibilityUI(score, analysis) {
  const numScore = parseInt(score);
  
  // Update score display
  scoreText.textContent = `${numScore}%`;
  scoreProgress.style.width = `${numScore}%`;
  
  // Update card styling based on score
  credibilityCard.className = 'credibility-card';
  if (numScore >= 85) {
    credibilityCard.classList.add('success');
    statusValue.textContent = '✓ Verified';
  } else if (numScore >= 70) {
    credibilityCard.classList.add('warning');
    statusValue.textContent = '⚠️ Mixed';
  } else {
    credibilityCard.classList.add('danger');
    statusValue.textContent = '❌ Questionable';
  }
  
  // Update details
  if (analysis) {
    sourceName.textContent = analysis.source_name || 'Unknown';
    region.textContent = analysis.region || 'Unknown';
    language.textContent = analysis.language || 'Unknown';
    type.textContent = analysis.type || 'Unknown';
    dateAnalyzed.textContent = analysis.date_published || 'Unknown';
    factChecked.textContent = analysis.fact_checked ? '✓ Yes' : '❌ No';
    statusMessage.textContent = analysis.reason || 'Analysis complete';
  }
}

// Reset UI to initial state
function resetUI() {
  scoreText.textContent = '--%';
  scoreProgress.style.width = '0%';
  sourceName.textContent = '--';
  region.textContent = '--';
  language.textContent = '--';
  type.textContent = '--';
  dateAnalyzed.textContent = '--';
  factChecked.textContent = '--';
  statusValue.textContent = 'Ready';
  statusMessage.textContent = 'Ready to scan this page for credibility';
  credibilityCard.className = 'credibility-card';
}

// Show loading state
function showLoading() {
  scanBtn.classList.add('loading');
  scanBtn.disabled = true;
  scanBtn.innerHTML = '<span class="button-icon">⏳</span><span class="button-text">Scanning...</span>';
  statusMessage.textContent = 'Analyzing page credibility...';
  statusValue.textContent = 'Scanning';
}

// Hide loading state
function hideLoading() {
  scanBtn.classList.remove('loading');
  scanBtn.disabled = false;
  scanBtn.innerHTML = '<span class="button-icon">⚡</span><span class="button-text">Scan This Page</span>';
}

// Main scan function
scanBtn.addEventListener("click", async () => {
  console.log('Scan button clicked!');
  showLoading();
  
  try {
    // Get active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log('Current tab:', tab.url);
    
    if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('moz-extension://')) {
      statusMessage.textContent = 'Cannot scan this type of page';
      hideLoading();
      return;
    }

    // Extract domain and analyze using embedded data
    const domain = extractDomain(tab.url);
    console.log('Extracted domain:', domain);
    
    if (!domain) {
      statusMessage.textContent = 'Could not extract domain from URL';
      hideLoading();
      return;
    }

    statusMessage.textContent = `Analyzing ${domain}...`;

    // Use embedded credibility data
    const credibilityData = analyzeCredibility(tab.url);
    
    if (credibilityData) {
      console.log('Credibility data found:', credibilityData);
      
      // Simulate analysis delay for better UX
      setTimeout(() => {
        updateCredibilityUI(credibilityData.score, credibilityData.analysis);
        hideLoading();
      }, 1500);
    } else {
      statusMessage.textContent = `${domain} not found in trusted sources database`;
      hideLoading();
    }

  } catch (error) {
    console.error('Extension error:', error);
    statusMessage.textContent = `Error: ${error.message}`;
    hideLoading();
  }
});

// Initialize UI on popup open
document.addEventListener('DOMContentLoaded', () => {
  console.log('News Credibility Checker Extension loaded');
  
  // Check if button exists
  if (!scanBtn) {
    console.error('Scan button not found!');
    return;
  }
  
  console.log('Extension initialized with', NEWS_SOURCES_DATA.news_sources.length, 'news sources');
  resetUI();
});