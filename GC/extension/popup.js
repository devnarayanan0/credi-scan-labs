const scanBtn = document.getElementById("scanBtn");
const resultDiv = document.createElement("div");
resultDiv.id = "result";
document.body.appendChild(resultDiv);

scanBtn.addEventListener("click", async () => {
  resultDiv.innerText = "Scanning page...";

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
        // Call OpenAI API
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: "You are a fact-checking assistant for news articles." },
              { role: "user", content: pageText }
            ]
          })
        });

        const data = await response.json();
        const answer = data.choices[0].message.content;
        resultDiv.innerText = answer;

      } catch (error) {
        console.error(error);
        resultDiv.innerText = "Error scanning the page.";
      }
    }
  );
});