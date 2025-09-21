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
      "domain": "bbc.com"
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
    console.error('Error extracting domain:', error);
    return '';
  }
}

// Analyze credibility using embedded data
function analyzeCredibility(url) {
  const domain = extractDomain(url);
  console.log('Analyzing URL:', url);
  console.log('Extracted domain:', domain);
  
  if (!domain) {
    console.log('No domain extracted');
    return null;
  }
  
  // Find matching source - try multiple matching strategies
  let sourceMatch = null;
  
  // Strategy 1: Exact domain match
  sourceMatch = NEWS_SOURCES_DATA.news_sources.find(src => {
    const srcDomain = src.domain || '';
    console.log('Comparing:', domain, 'with', srcDomain);
    return domain === srcDomain;
  });
  
  // Strategy 2: If no exact match, try extracting domain from source data
  if (!sourceMatch) {
    sourceMatch = NEWS_SOURCES_DATA.news_sources.find(src => {
      const srcDomain = extractDomain('https://' + (src.domain || ''));
      console.log('Comparing extracted:', domain, 'with extracted:', srcDomain);
      return domain === srcDomain;
    });
  }
  
  // Strategy 3: Try partial matching (contains)
  if (!sourceMatch) {
    sourceMatch = NEWS_SOURCES_DATA.news_sources.find(src => {
      const srcDomain = src.domain || '';
      const domainBase = domain.split('.')[0]; // Get base domain (e.g., 'bbc' from 'bbc.com')
      const srcBase = srcDomain.split('.')[0];
      console.log('Comparing base domains:', domainBase, 'with', srcBase);
      return domainBase === srcBase;
    });
  }
  
  console.log('Source match found:', sourceMatch);
  
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
  
  console.log('No source match found for domain:', domain);
  return null;
}

// Update UI based on credibility score
function updateCredibilityUI(score, analysis) {
  const numScore = parseInt(score);
  
  // Update score display
  if (scoreText) scoreText.textContent = `${numScore}%`;
  if (scoreProgress) scoreProgress.style.width = `${numScore}%`;
  
  // Update card styling based on score
  if (credibilityCard) {
    credibilityCard.className = 'credibility-card';
    if (numScore >= 85) {
      credibilityCard.classList.add('success');
      if (statusValue) statusValue.textContent = '✓ Verified';
    } else if (numScore >= 70) {
      credibilityCard.classList.add('warning');
      if (statusValue) statusValue.textContent = '⚠️ Mixed';
    } else {
      credibilityCard.classList.add('danger');
      if (statusValue) statusValue.textContent = '❌ Questionable';
    }
  }
  
  // Update details
  if (analysis) {
    if (sourceName) sourceName.textContent = analysis.source_name || 'Unknown';
    if (region) region.textContent = analysis.region || 'Unknown';
    if (language) language.textContent = analysis.language || 'Unknown';
    if (type) type.textContent = analysis.type || 'Unknown';
    if (dateAnalyzed) dateAnalyzed.textContent = analysis.date_published || 'Unknown';
    if (factChecked) factChecked.textContent = analysis.fact_checked ? '✓ Yes' : '❌ No';
    if (statusMessage) statusMessage.textContent = analysis.reason || 'Analysis complete';
  }
}

// Reset UI to initial state
function resetUI() {
  if (scoreText) scoreText.textContent = '--%';
  if (scoreProgress) scoreProgress.style.width = '0%';
  if (sourceName) sourceName.textContent = '--';
  if (region) region.textContent = '--';
  if (language) language.textContent = '--';
  if (type) type.textContent = '--';
  if (dateAnalyzed) dateAnalyzed.textContent = '--';
  if (factChecked) factChecked.textContent = '--';
  if (statusValue) statusValue.textContent = 'Ready';
  if (statusMessage) statusMessage.textContent = 'Ready to scan this page for credibility';
  if (credibilityCard) credibilityCard.className = 'credibility-card';
}

// Show loading state
function showLoading() {
  if (scanBtn) {
    scanBtn.classList.add('loading');
    scanBtn.disabled = true;
    scanBtn.innerHTML = '<span class="button-icon">⏳</span><span class="button-text">Scanning...</span>';
  }
  if (statusMessage) statusMessage.textContent = 'Analyzing page credibility...';
  if (statusValue) statusValue.textContent = 'Scanning';
}

// Hide loading state
function hideLoading() {
  if (scanBtn) {
    scanBtn.classList.remove('loading');
    scanBtn.disabled = false;
    scanBtn.innerHTML = '<span class="button-icon">⚡</span><span class="button-text">Scan This Page</span>';
  }
}

// Initialize UI on popup open
document.addEventListener('DOMContentLoaded', () => {
  console.log('News Credibility Checker Extension loaded');
  
  // Debug: Check all elements
  console.log('scanBtn:', scanBtn);
  console.log('statusMessage:', statusMessage);
  console.log('scoreText:', scoreText);
  
  // Check if required elements exist
  if (!scanBtn) {
    console.error('Scan button not found!');
    return;
  }
  
  if (!statusMessage) {
    console.error('Status message element not found!');
    return;
  }
  
  console.log('Extension initialized with', NEWS_SOURCES_DATA.news_sources.length, 'news sources');
  
  // Debug: Log all available domains
  console.log('Available domains in database:');
  NEWS_SOURCES_DATA.news_sources.forEach(src => {
    console.log('-', src.domain, '(', src.source_name, ')');
  });
  
  resetUI();
  
  // Add click event listener to scan button
  scanBtn.addEventListener("click", handleScanClick);
  
  console.log('Extension ready - button click handler attached');
});

// Separate function for handling scan clicks
async function handleScanClick() {
  console.log('Scan button clicked!');
  
  // Simple test first
  if (statusMessage) {
    statusMessage.textContent = 'Button clicked - starting scan...';
  }
  
  showLoading();
  
  try {
    // Get active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log('Current tab:', tab.url);
    
    if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('moz-extension://')) {
      if (statusMessage) statusMessage.textContent = 'Cannot scan this type of page';
      hideLoading();
      return;
    }

    // Extract domain and analyze using embedded data
    const domain = extractDomain(tab.url);
    console.log('Extracted domain:', domain);
    
    if (!domain) {
      if (statusMessage) statusMessage.textContent = 'Could not extract domain from URL';
      hideLoading();
      return;
    }

    if (statusMessage) statusMessage.textContent = `Analyzing ${domain}...`;

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
      if (statusMessage) statusMessage.textContent = `${domain} not found in trusted sources database`;
      hideLoading();
    }

  } catch (error) {
    console.error('Extension error:', error);
    if (statusMessage) statusMessage.textContent = `Error: ${error.message}`;
    hideLoading();
  }
}