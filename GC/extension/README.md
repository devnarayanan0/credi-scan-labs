# News Credibility Checker - Chrome Extension

## 🛡️ About
The News Credibility Checker is a Chrome extension that helps you verify the credibility of news articles in real-time. Simply click the extension icon while browsing any news website to get instant credibility scores and detailed source information.

## ✨ Features
- **Instant Credibility Analysis** - Get credibility scores (0-100%) for news sources
- **Source Information** - View detailed information about news publishers
- **Fact-Check Status** - See if sources are fact-checked and verified
- **Modern UI** - Clean, professional interface with glassmorphism design
- **Privacy-Focused** - No data collection or tracking

## 📦 Installation Instructions

### Method 1: Load Unpacked Extension (Developer Mode)

1. **Download & Extract**
   - Download the extension ZIP file
   - Extract it to a folder on your computer (e.g., `Downloads/news-credibility-checker-extension/`)

2. **Open Chrome Extensions**
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - Or go to Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner
   - This will show additional options

4. **Load the Extension**
   - Click "Load unpacked" button
   - Select the extracted extension folder
   - The extension should now appear in your extensions list

5. **Pin the Extension** (Optional)
   - Click the puzzle piece icon in Chrome's toolbar
   - Find "News Credibility Checker" and click the pin icon
   - The extension icon will now appear in your toolbar

## 🚀 Usage

1. **Navigate to any news website** (e.g., nytimes.com, bbc.com, etc.)

2. **Click the extension icon** in your Chrome toolbar

3. **Click "Scan This Page"** to analyze the current website

4. **View Results:**
   - Credibility score (0-100%)
   - Source information (name, region, language, type)
   - Fact-check status
   - Analysis details

## ⚙️ Requirements

- **Google Chrome** (version 88 or higher)
- **Backend Server** running on `localhost:4000`
  - The extension connects to a local server for credibility analysis
  - Make sure to start the server before using the extension

## 🔧 Troubleshooting

### Extension Not Working?
- Ensure the backend server is running on `localhost:4000`
- Check that you're on a supported news website
- Open Chrome DevTools (F12) and check the Console for error messages

### Can't Load Extension?
- Make sure Developer mode is enabled in `chrome://extensions/`
- Verify you selected the correct folder (should contain `manifest.json`)
- Try refreshing the extensions page and loading again

### No Results Showing?
- The extension works with known news sources in our database
- Try testing on major news sites like BBC, CNN, New York Times, etc.
- Check that the backend server is accessible

## 🛠️ Development

### File Structure
```
extension/
├── manifest.json       # Extension configuration
├── popup.html         # Extension popup interface
├── popup.js          # Main functionality
├── styles.css        # Styling and design
├── background.js     # Background service worker
├── content.js        # Content script
├── logo.png          # Extension icon
└── README.md         # This file
```

### Local Development
1. Make changes to the extension files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## 📝 Version History

- **v1.0** - Initial release with credibility checking functionality

## 🤝 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure all requirements are met
3. Check browser console for error messages

## 📄 License

This extension is open source and free to use.

---

**Happy fact-checking! 🔍✨**