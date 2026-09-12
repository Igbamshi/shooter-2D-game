# 🏜️ Top-Down Desert Shooter

A lightweight 2D top-down shooter built with [Phaser.js](https://phaser.io/) — my first hands-on project after learning the engine, built from scratch to actually understand the mechanics rather than just following a tutorial.

![Made with Phaser](https://img.shields.io/badge/Made%20with-Phaser.js-8b5cf6?style=flat-square)
![Status](https://img.shields.io/badge/status-in%20progress-yellow?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

## 🎮 About

Pilot a lone ranger through the desert, blast off waves of enemies, and rack up your score before you get overrun. Built as a learning project to go from "watched a course" to "can actually debug this," this covers the core building blocks of 2D game development: movement, shooting, spawning, collisions, and UI — all from a blank file.

## ✨ Features

- 🕹️ Smooth 8-directional player movement (arrow keys)
- 🔫 Rate-limited shooting system (space bar)
- 👾 Randomized enemy spawning that streams toward the player
- 💥 Collision detection — bullets destroy enemies, enemies end the game
- 🏆 Live score tracking
- 🌵 Custom desert environment — sand ground, scattered rock patches, and cacti built from a hand-picked and edited [Kenney.nl](https://kenney.nl/) asset pack (CC0)

## 🖼️ Preview

<img width="1366" height="602" alt="Screenshot (361)" src="https://github.com/user-attachments/assets/2cd60e25-29a3-4275-a8b1-f8d084f1c71f" />
<img width="1366" height="604" alt="Screenshot (359)" src="https://github.com/user-attachments/assets/cd7b8d14-6822-4832-8352-75bc1b8b9ca2" />
<img width="1366" height="604" alt="Screenshot (362)" src="https://github.com/user-attachments/assets/a0f2f304-2f1c-4f6e-87c3-a165c5447032" />

## 🚀 Getting Started

No build tools, no npm install — Phaser is loaded straight from a CDN.

1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/topdown-shooter.git
   cd topdown-shooter
   ```
2. Open `index.html` in your browser, **or** serve it locally (recommended, to avoid browser image-loading restrictions):
   ```bash
   # Using Python
   python3 -m http.server 5500
   ```
   Then visit `http://127.0.0.1:5500` in your browser.

## 🕹️ Controls

| Key | Action |
|-----|--------|
| ⬆️⬇️⬅️➡️ Arrow keys | Move |
| Space | Shoot |

## 🛠️ Built With

- [Phaser 3](https://phaser.io/) — HTML5 game framework
- Vanilla JavaScript — no framework, no build step
- Art assets adapted from [Kenney's Desert Shooter Pack](https://kenney.nl/) (CC0 license)

## 📚 What I Learned

This project was as much about the process as the result:
- Phaser's scene lifecycle (`preload` → `create` → `update`)
- Arcade physics: velocity, collisions, and overlap detection
- Screen coordinate systems (why "up" is negative Y, not positive)
- Groups for managing collections of similar game objects (bullets, enemies)
- Debugging silent failures — like a single typo'd texture key rendering Phaser's missing-texture placeholder instead of throwing a loud error

## 🗺️ Roadmap

- [ ] Health bar / multiple lives instead of instant game over
- [ ] Difficulty scaling (faster/more enemies over time)
- [ ] Sound effects and background music
- [ ] Restart button instead of a full page reload
- [ ] Mobile touch controls

## 📄 License

Code is open to reuse for learning purposes. Art assets are CC0 via [Kenney.nl](https://kenney.nl/) — free for personal, educational, and commercial use.

---

Built by [Igbamshi](https://github.com/<your-username>) — currently expanding into interactive/game-based web experiences for client projects. Open to collaborating or hearing feedback!
