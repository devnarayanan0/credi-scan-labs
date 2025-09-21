# News Credibility Checker - Chrome Extension

## 🛡️ About
The News Credibility Checker is a fully functional Chrome extension that helps you verify the credibility of news articles in real-time. It includes a comprehensive database of trusted news sources and works completely offline - no server required!

## ✨ Features
- **Instant Credibility Analysis** - Get credibility scores (0-100%) for 25+ news sources
- **Complete Source Database** - Embedded database with major news outlets worldwide
- **Detailed Source Information** - View region, type, language, and fact-check status
- **Modern UI** - Clean, professional interface with glassmorphism design
- **Offline Functionality** - Works without internet connection or backend server
- **Privacy-Focused** - No data collection, tracking, or external API calls

## 📊 Supported News Sources (25+ Sources)

### High Credibility (85%+)
- **Reuters** (92%) - Wire service with strict sourcing
- **Associated Press** (91%) - Reliable news agency cited worldwide
- **The New York Times** (90%) - Strong editorial standards and fact-checking
- **The Economist** (89%) - In-depth analysis and editorial standards
- **BBC News** (88%) - Globally trusted public broadcaster
- **Bloomberg** (88%) - Respected financial news organization
- **The Wall Street Journal** (87%) - Strong business reporting and standards
- **Financial Times** (87%) - Reputable business journalism
- **ABC News Australia** (86%) - Public broadcaster with editorial oversight
- **The Washington Post** (86%) - Investigative reporting and editorial oversight
- **The Guardian** (85%) - Investigative journalism, established outlet

### Medium Credibility (70-84%)
- **Al Jazeera** (82%) - Extensive international coverage
- **The Hindu** (81%) - Respected Indian national newspaper
- **The Times (UK)** (80%) - Established national newspaper
- **NBC News** (79%) - Major US broadcaster with standards
- **Indian Express** (79%) - Investigative reporting and editorials
- **CNN** (78%) - Large reach, mixed editorial quality at times
- **CBS News** (78%) - Longstanding broadcast news outlet
- **The Independent** (77%) - Independent reporting, online-focused
- **Times of India** (76%) - Very high reach but sometimes sensational headlines
- **Hindustan Times** (75%) - Popular national outlet, mixed depth
- **NDTV** (74%) - Large broadcaster, variable editorial quality
- **India Today** (72%) - Popular news magazine, mixed rigor

### Lower Credibility (Below 70%)
- **New York Post** (60%) - Tabloid style, sensational headlines
- **Daily Mail** (55%) - High reach but frequent sensationalism

## 📦 Installation Instructions

### Step 1: Download & Extract
- Download the NEXBITCred.zip file from the website
- Extract it to a folder on your computer (e.g., `Desktop/news-credibility-extension/`)

### Step 2: Open Chrome Extensions
1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Or go to Menu → More Tools → Extensions

### Step 3: Enable Developer Mode
- Toggle the "Developer mode" switch in the top-right corner
- This will show additional options

### Step 4: Load the Extension
1. Click "Load unpacked" button
2. Select the extracted extension folder
3. The extension should now appear in your extensions list

### Step 5: Pin the Extension (Optional)
- Click the puzzle piece icon in Chrome's toolbar
- Find "News Credibility Checker" and click the pin icon
- The extension icon will now appear in your toolbar

## 🚀 Usage

1. **Navigate to any supported news website** (see list above)
2. **Click the extension icon** in your Chrome toolbar
3. **Click "Scan This Page"** to analyze the current website
4. **View Results:**
   - Credibility score (0-100%)
   - Source information (name, region, language, type)
   - Fact-check status
   - Current analysis date
   - Detailed reasoning

## ⚙️ Requirements

- **Google Chrome** (version 88 or higher)
- **No server required** - Works completely offline!
- **No internet connection needed** for analysis

## 🔧 How It Works

The extension uses an embedded database of trusted news sources and performs domain matching to identify the current website. It then displays the credibility score and detailed information about the news source.

### Technical Details
- **Domain Extraction** - Automatically extracts domain from current tab
- **Database Matching** - Matches against embedded news sources database
- **Real-time Analysis** - Provides instant credibility assessment
- **Professional UI** - Color-coded results (green/yellow/red) based on credibility

## 🛠️ Troubleshooting

### Extension Not Working?
- Make sure you're on a supported news website (see list above)
- Check that the extension is enabled in `chrome://extensions/`
- Open Chrome DevTools (F12) and check the Console for error messages

### Can't Load Extension?
- Make sure Developer mode is enabled in `chrome://extensions/`
- Verify you selected the correct folder (should contain `manifest.json`)
- Try refreshing the extensions page and loading again

### No Results Showing?
- The extension only works with the 25+ news sources in our database
- Try testing on major news sites like BBC, CNN, New York Times, Reuters, etc.
- Check the supported sources list above

## 🛠️ Development

### File Structure
```
extension/
├── manifest.json       # Extension configuration
├── popup.html         # Extension popup interface
├── popup.js           # Main functionality with embedded database
├── styles.css         # Modern glassmorphism styling
├── background.js      # Background service worker
├── content.js         # Content script
├── logo.png          # Extension icon
└── README.md         # This file
```

### Local Development
1. Make changes to the extension files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## 📝 Version History

- **v1.0** - Full release with embedded database of 25+ news sources
- **Offline functionality** - No server dependency
- **Professional UI** - Modern glassmorphism design
- **Comprehensive database** - Major news outlets worldwide

## 🤝 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure you're on a supported news website
3. Check browser console for debug information

## 📄 License

This extension is open source and free to use.

---

**Built with ❤️ by NEXBIT Team**
**Happy fact-checking! 🔍✨**