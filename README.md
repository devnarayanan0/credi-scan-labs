# Welcome to Cred Check

## Project info

A lightweight and secure credential verification tool designed to help developers and organizations validate, manage, and protect sensitive information such as API keys, tokens, and passwords.

🚀 Features

🔑 Detect exposed API keys and secrets in codebases

🛡️ Validate credentials against supported services

📊 Generate security reports for audits

⚡ Lightweight, fast, and developer-friendly

🔒 Focused on privacy – no sensitive data leaves your system


📦 Installation

# Clone the repository
git clone https://github.com/your-username/credcheck.git

# Navigate into the project directory
cd credcheck

# Install dependencies
npm install   # if Node.js
# or
pip install -r requirements.txt   # if Python

🛠️ Usage

# Basic usage
credcheck scan ./my-project

# Scan with detailed report
credcheck scan ./my-project --report out.json

Example Output

✔ Scanning started...
⚠️  Found exposed AWS_ACCESS_KEY in config.js
⚠️  Found suspicious token in .env
✔ Scan completed. 2 issues found.

📚 Configuration

Create a .credcheckrc file in your project root:

{
  "ignore": ["node_modules", "tests"],
  "reportFormat": "json",
  "sensitivePatterns": ["AWS_ACCESS_KEY", "GOOGLE_API_KEY"]
}

🤝 Contributing

Contributions are always welcome!

1. Fork the project


2. Create your feature branch (git checkout -b feature/my-feature)


3. Commit your changes (git commit -m 'Add my feature')


4. Push to the branch (git push origin feature/my-feature)


5. Open a Pull Request





