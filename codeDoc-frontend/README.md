# 🧙‍♂️ CodeDoc Genie – Code Documentation Assistant

CodeDoc Genie is a web-based tool that uses AI (via Amazon Bedrock) to automatically generate clear and helpful documentation for code snippets. Whether you're a student, developer, or technical writer, this assistant can turn messy or undocumented code into understandable, well-documented blocks.

---

## 📌 Features

- ✏️ Paste or upload code (Python, JavaScript, Java)
- 🔍 Choose documentation style (Inline Comments, Docstrings, Summaries)
- ⚙️ Select programming language
- 🧠 Uses Amazon Bedrock (Claude / Titan models)
- 🕓 View history of previous queries (local storage)
- 📥 Download or copy generated documentation
- 🌐 Fully serverless on AWS Free Tier

---

## 🛠️ Tech Stack

### Frontend
- Next.js (React)
- Tailwind CSS
- Typescript

### Backend (Serverless)
- AWS Lambda (Python)
- API Gateway
- Amazon Bedrock (Claude Instant / Titan Lite)
- IAM for secure access

### Deployment
- Frontend: GitHub Pages or AWS Amplify
- Backend: AWS Lambda via API Gateway

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/code-doc-genie.git
cd code-doc-genie
