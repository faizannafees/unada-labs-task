# 🌌 Unada-Labs-Assignment

This project is a frontend assignment built using **React, Vite, Tailwind CSS, and Framer Motion**.  
It showcases a fully responsive and animated **Solar System UI**, based on a Figma design.  
Each planet animates to the center when selected, showing detailed planetary information with smooth transitions.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)

---

## Project Overview

This project implements an interactive space-themed UI where planets are placed on circular orbits.  
When clicked, the planet transitions into the center using **Framer Motion's `layoutId`** animation, while others move and resize dynamically.

The background includes:

- Multi-layered radial gradients
- Stars rendered via CSS
- SVG-based orbit rings

The UI is fully responsive across **mobile, tablet, and desktop**.

---

## Features

- 🪐 Click planets to bring them to the center
- 🌌 Dynamic glowing aura around active planet
- 📍 Different images for orbit & center views
- 🌀 Animated orbit rings & deep space background
- ⚡ Smooth animations with Framer Motion
- 📱 Fully responsive layout
- 🎨 Custom font (**Satoshi** via Fontshare CDN)

---

## Requirements

- Build interactive screens based on Figma UI
- Use responsive design for all screen sizes
- Implement animated planetary transitions
- Maintain clean & modular folder structure

---

## Installation

### **Prerequisites**
Ensure you have:

- **Node.js** & **npm** installed

---

### **Steps**

1. Clone the repository:

```bash
git clone <repo-url>
cd unada-labs-assignment


2. Install dependencies:

   ```bash
   npm install
   ```

   or with Yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or with Yarn:

   ```bash
   yarn dev
   ```

Your application should now be running on `http://localhost:3000`.

## Usage

1. Open `http://localhost:3000` in your browser to view the app.
2. Interact with the app components to see the required functionality in action.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Frontend build tool that provides fast development and build speeds.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Framer Motion**: Animations & transitions

## Folder Structure

```
unada-labs-assignment/
├── public/
│   └── images/              # Planet textures 
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Planet.jsx
│   │   ├── SolarSystem.jsx
│   │   └── OrbitRings.jsx
│   │
│   ├── utils/
│   │   └── planets.js       # Planet metadata
│   │
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Gradients, stars, responsive styles
│
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

```

## Available Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the project for production.
- `npm run preview` - Preview the production build locally.

---
