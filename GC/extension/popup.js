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

// Utility function to extract domain from URL
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
  console.log('Scan button clicked!'); // Debug log
  showLoading();
  
  try {
    // Get active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log('Current tab:', tab.url); // Debug log
    
    if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('moz-extension://')) {
      statusMessage.textContent = 'Cannot scan this type of page';
      hideLoading();
      return;
    }

    // Extract domain and check against our API
    const domain = extractDomain(tab.url);
    console.log('Extracted domain:', domain); // Debug log
    
    if (!domain) {
      statusMessage.textContent = 'Could not extract domain from URL';
      hideLoading();
      return;
    }

    statusMessage.textContent = `Checking ${domain}...`;

    // Try to call our local API
    try {
      const response = await fetch('http://localhost:4000/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: tab.url })
      });

      console.log('API Response status:', response.status); // Debug log

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        statusMessage.textContent = errorData.error || 'Source not found in trusted list';
        hideLoading();
        return;
      }

      const data = await response.json();
      console.log('API Response data:', data); // Debug log
      
      if (data.score && data.analysis) {
        updateCredibilityUI(data.score, data.analysis);
      } else {
        statusMessage.textContent = 'Invalid response from server';
      }
    } catch (fetchError) {
      console.log('API call failed, using demo mode:', fetchError);
      
      // Demo mode - show sample data
      const demoData = {
        score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
        analysis: {
          source_name: 'Demo Source',
          region: 'Global',
          language: 'English',
          type: 'Online News',
          date_published: new Date().toISOString().split('T')[0],
          fact_checked: Math.random() > 0.5,
          reason: 'Demo mode - Server not available'
        }
      };
      
      statusMessage.textContent = 'Demo mode: Server not available';
      setTimeout(() => {
        updateCredibilityUI(demoData.score, demoData.analysis);
      }, 1000);
    }

  } catch (error) {
    console.error('Extension error:', error);
    statusMessage.textContent = `Error: ${error.message}`;
  } finally {
    hideLoading();
  }
});

// Test server connectivity
async function testServerConnection() {
  try {
    const response = await fetch('http://localhost:4000/', {
      method: 'GET',
    });
    if (response.ok) {
      console.log('Server is running and accessible');
      return true;
    }
  } catch (error) {
    console.error('Server connection failed:', error);
    statusMessage.textContent = 'Server not running. Please start the backend server.';
    return false;
  }
  return false;
}

// Initialize UI on popup open
document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM loaded, initializing extension...'); // Debug log
  
  // Check if button exists
  if (!scanBtn) {
    console.error('Scan button not found!');
    return;
  }
  
  console.log('Scan button found:', scanBtn); // Debug log
  resetUI();
  
  // Test server connection
  await testServerConnection();
  
  // Test button click
  scanBtn.addEventListener('mouseover', () => {
    console.log('Button hover detected'); // Debug log
  });
});