// VirusTotal API integration for URL credibility analysis
export interface VirusTotalResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      stats: {
        harmless: number;
        malicious: number;
        suspicious: number;
        undetected: number;
        timeout: number;
      };
      reputation: number;
      last_analysis_stats: {
        harmless: number;
        malicious: number;
        suspicious: number;
        undetected: number;
        timeout: number;
      };
      categories: Record<string, string>;
      last_http_response_code?: number;
      title?: string;
      last_final_url?: string;
    };
  };
}

export interface CredibilityAnalysis {
  url: string;
  credibilityScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  maliciousCount: number;
  suspiciousCount: number;
  harmlessCount: number;
  undetectedCount: number;
  reputation: number;
  categories: string[];
  title?: string;
  recommendations: string[];
  trustedAlternatives: string[];
}

// VirusTotal API configuration
const VIRUSTOTAL_API_KEY = '70241699fe195b6b49303db986bc329c2adba5826bdb8f7adc029dfb748d2ac6';
const VIRUSTOTAL_BASE_URL = 'https://www.virustotal.com/api/v3';

// Utility function to encode URL for VirusTotal
function encodeUrlForVirusTotal(url: string): string {
  return btoa(url).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

// Function to analyze URL with VirusTotal
export async function analyzeUrlWithVirusTotal(url: string): Promise<CredibilityAnalysis> {
  try {
    // Ensure URL has protocol
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    const encodedUrl = encodeUrlForVirusTotal(url);
    const response = await fetch(`${VIRUSTOTAL_BASE_URL}/urls/${encodedUrl}`, {
      method: 'GET',
      headers: {
        'X-Apikey': VIRUSTOTAL_API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // If URL not found in VirusTotal, submit it for analysis
      if (response.status === 404) {
        await submitUrlForAnalysis(url);
        throw new Error('URL submitted for analysis. Please try again in a few minutes.');
      }
      throw new Error(`VirusTotal API error: ${response.status}`);
    }

    const data: VirusTotalResponse = await response.json();
    return analyzeVirusTotalData(url, data);
  } catch (error) {
    console.error('Error analyzing URL with VirusTotal:', error);
    throw error;
  }
}

// Function to submit URL for analysis if not found
export async function submitUrlForAnalysis(url: string): Promise<void> {
  try {
    const response = await fetch(`${VIRUSTOTAL_BASE_URL}/urls`, {
      method: 'POST',
      headers: {
        'X-Apikey': VIRUSTOTAL_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `url=${encodeURIComponent(url)}`,
    });

    if (!response.ok) {
      throw new Error(`Failed to submit URL: ${response.status}`);
    }
  } catch (error) {
    console.error('Error submitting URL for analysis:', error);
    throw error;
  }
}

// Function to analyze VirusTotal response data
function analyzeVirusTotalData(url: string, data: VirusTotalResponse): CredibilityAnalysis {
  const stats = data.data.attributes.last_analysis_stats;
  const reputation = data.data.attributes.reputation || 0;
  const categories = Object.values(data.data.attributes.categories || {});

  // Calculate credibility score (0-100)
  const total = stats.harmless + stats.malicious + stats.suspicious + stats.undetected;
  const credibilityScore = total > 0 
    ? Math.max(0, Math.min(100, (stats.harmless / total) * 100 - (stats.malicious * 30) - (stats.suspicious * 15)))
    : 50;

  // Determine risk level
  let riskLevel: 'low' | 'medium' | 'high' = 'low';
  if (stats.malicious > 0 || reputation < -5) {
    riskLevel = 'high';
  } else if (stats.suspicious > 2 || reputation < 0) {
    riskLevel = 'medium';
  }

  // Generate recommendations based on analysis
  const recommendations = generateRecommendations(stats, reputation, categories);
  
  // Generate trusted alternatives
  const trustedAlternatives = generateTrustedAlternatives(url, riskLevel);

  return {
    url,
    credibilityScore: Math.round(credibilityScore),
    riskLevel,
    maliciousCount: stats.malicious,
    suspiciousCount: stats.suspicious,
    harmlessCount: stats.harmless,
    undetectedCount: stats.undetected,
    reputation,
    categories,
    title: data.data.attributes.title,
    recommendations,
    trustedAlternatives,
  };
}

// Generate AI-powered recommendations
function generateRecommendations(
  stats: {
    harmless: number;
    malicious: number;
    suspicious: number;
    undetected: number;
    timeout: number;
  }, 
  reputation: number, 
  categories: string[]
): string[] {
  const recommendations: string[] = [];

  if (stats.malicious > 0) {
    recommendations.push("⚠️ This URL has been flagged as malicious by security vendors. Avoid visiting this site.");
    recommendations.push("🛡️ Use reputable antivirus software and keep it updated.");
    recommendations.push("🔍 Verify information from multiple trusted sources before believing any content.");
  } else if (stats.suspicious > 0) {
    recommendations.push("⚠️ This URL shows suspicious behavior. Proceed with caution.");
    recommendations.push("🔒 Ensure you have proper security measures enabled before visiting.");
    recommendations.push("📱 Consider using a secure browser with built-in protection.");
  } else if (stats.harmless > 5) {
    recommendations.push("✅ This URL appears to be safe based on security scans.");
    recommendations.push("📰 Always cross-reference news with multiple reliable sources.");
    recommendations.push("🎯 Look for journalistic standards like citations and author credentials.");
  }

  if (reputation < -5) {
    recommendations.push("📉 This domain has a negative reputation score. Be extra cautious.");
  } else if (reputation > 5) {
    recommendations.push("📈 This domain has a positive reputation in the security community.");
  }

  // Add category-specific recommendations
  if (categories.includes('news') || categories.includes('media')) {
    recommendations.push("📰 For news content, verify with established fact-checking organizations.");
    recommendations.push("🔍 Check if the publication follows journalistic ethics and standards.");
  }

  return recommendations;
}

// Generate trusted alternative sources
function generateTrustedAlternatives(url: string, riskLevel: 'low' | 'medium' | 'high'): string[] {
  const trustedSources: string[] = [];

  // News and media alternatives
  const trustedNewsSourcesStructure = [
    { name: "BBC News", url: "https://www.bbc.com/news", category: "International News" },
    { name: "Reuters", url: "https://www.reuters.com", category: "Wire Service" },
    { name: "Associated Press", url: "https://apnews.com", category: "Wire Service" },
    { name: "NPR", url: "https://www.npr.org", category: "Public Radio" },
    { name: "The Guardian", url: "https://www.theguardian.com", category: "International News" },
    { name: "Wall Street Journal", url: "https://www.wsj.com", category: "Business & Finance" },
    { name: "The New York Times", url: "https://www.nytimes.com", category: "General News" },
    { name: "CNN", url: "https://www.cnn.com", category: "Breaking News" },
  ];

  // Fact-checking sources
  const factCheckingSources = [
    { name: "Snopes", url: "https://www.snopes.com", category: "Fact Checking" },
    { name: "PolitiFact", url: "https://www.politifact.com", category: "Political Fact Checking" },
    { name: "FactCheck.org", url: "https://www.factcheck.org", category: "Fact Checking" },
    { name: "AP Fact Check", url: "https://apnews.com/hub/ap-fact-check", category: "Wire Service Fact Check" },
  ];

  if (riskLevel === 'high') {
    trustedSources.push("⚠️ AVOID this site completely. Use these trusted sources instead:");
    trustedNewsSourcesStructure.slice(0, 4).forEach(source => {
      trustedSources.push(`📰 ${source.name} (${source.category}): ${source.url}`);
    });
    trustedSources.push("");
    trustedSources.push("🔍 Verify claims with fact-checkers:");
    factCheckingSources.slice(0, 2).forEach(source => {
      trustedSources.push(`✓ ${source.name}: ${source.url}`);
    });
  } else if (riskLevel === 'medium') {
    trustedSources.push("⚠️ Cross-reference with these trusted sources:");
    trustedNewsSourcesStructure.slice(0, 3).forEach(source => {
      trustedSources.push(`📰 ${source.name}: ${source.url}`);
    });
    trustedSources.push("");
    trustedSources.push("🔍 Fact-check suspicious claims:");
    factCheckingSources.slice(0, 2).forEach(source => {
      trustedSources.push(`✓ ${source.name}: ${source.url}`);
    });
  } else {
    trustedSources.push("✅ This source appears safe, but always cross-reference important information:");
    trustedNewsSourcesStructure.slice(0, 2).forEach(source => {
      trustedSources.push(`📰 ${source.name}: ${source.url}`);
    });
    factCheckingSources.slice(0, 1).forEach(source => {
      trustedSources.push(`✓ ${source.name}: ${source.url}`);
    });
  }

  return trustedSources;
}

// Function to get a simple credibility assessment
export function getCredibilityLevel(score: number): 'high' | 'medium' | 'low' {
  if (score >= 75) return 'high';
  if (score >= 50) return 'medium';
  return 'low';
}
