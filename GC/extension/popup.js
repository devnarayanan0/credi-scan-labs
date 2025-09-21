const scanBtn = document.getElementById("scanBtn");
const statusMessage = document.getElementById("status-message");
const scoreText = document.getElementById("score-text");
const sources = document.getElementById("sources");
const factChecked = document.getElementById("fact-checked");

scanBtn.addEventListener("click", async () => {
  statusMessage.innerText = "Scanning page...";
  scoreText.innerText = "--%";
  sources.innerText = "--";
  factChecked.innerText = "--";
  
  // Get active tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Extract page text using content script
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: () => document.body.innerText
    },
    async (injectionResults) => {
      const pageText = injectionResults[0].result;

      try {
        // Replace "YOUR_API_KEY_HERE" with your actual OpenAI API key
        const YOUR_API_KEY_HERE = "sk-proj-YOUR_API_KEY_HERE"; 
        
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${YOUR_API_KEY_HERE}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: "You are a fact-checking assistant for news articles. Provide a concise credibility score from 0-100% and a brief explanation. Format the output as: Score: [percentage]% | Explanation: [brief text]." },
              { role: "user", content: pageText }
            ]
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('API error:', errorText);
          statusMessage.innerText = `API error: ${errorText}`;
          return;
        }

        const data = await response.json();
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
          console.error('Unexpected API response:', data);
          statusMessage.innerText = 'Unexpected API response.';
          return;
        }
        
        const answer = data.choices[0].message.content;
        
        // Parse the answer to extract score and explanation
        const parts = answer.split(' | ');
        if (parts.length === 2) {
          const scorePart = parts[0].replace('Score: ', '');
          const explanationPart = parts[1].replace('Explanation: ', '');

          scoreText.innerText = scorePart;
          statusMessage.innerText = explanationPart;
        } else {
          // Fallback if the format is not as expected
          scoreText.innerText = '--%';
          statusMessage.innerText = 'Could not parse API response.';
        }

      } catch (error) {
        console.error(error);
        statusMessage.innerText = "Error scanning the page.";
      }
    }
  );
});