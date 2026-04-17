# 📽️ XCGradient PowerPoint Builder (PWP)

A specialized PowerPoint/Presentation generator for XCGradient, powered by `pptxgenjs`. It automates the creation of high-quality decks with brand consistency.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended).

### Installation

```bash
git clone <repo-url>
cd pwp-builder
npm install
```

## 📂 Project Structure

- `projects/`: The location for deck source files (`data.js` and `deck.js`).
- `shared/`: Shared logic for handling themes, helpers, and `pptx.js` abstractions.
- `brand-assets/`: Centralized XCGradient branding (Git Submodule).
- `scripts/`: Scaffolding for new projects.
- `build.js`: The main entry point to generate PDFs/PPTXs.

## 🛠️ Usage

### Build a Presentation

```bash
node build.js <project-name>
```

Example:
```bash
node build.js oriol/w17
```

### Scaffold a New Project

```bash
node scripts/scaffold-project.js <new-project-name>
```

## 👨‍💻 Development

To create new templates, add source files to a new project folder under `projects/` and leverage the shared components in `shared/`.

## 🐳 Docker & CI/CD

This repository is containerized for consistent rendering.

### Run in Docker
To build a project without installing Node or LibreOffice:

```bash
docker build -t pwp-builder .
docker run --rm -v $(pwd)/projects:/app/projects pwp-builder node build.js <project-name>
```

### GitHub Actions
Every push to `main` triggers:
- **Build & Push:** Automatically builds the production image and pushes it to `ghcr.io/xcgradient-org/pwp-builder:latest`.

## ⚖️ License

All rights reserved. © 2026 XC Gradient.
