# 🍿 usePopcorn

> A highly modular movie library application built with React, focusing on component composition and state management.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Status](https://img.shields.io/badge/Status-Learning_In_Progress-yellow?style=for-the-badge)](https://github.com/YourUsername)

## 🎯 The Project
`usePopcorn` is a movie tracking application that allows users to search for films, view detailed information via the OMDb API, and manage a personal "watched" list with custom ratings.

This project is a core part of my transition from **Senior Designer to Creative UI Engineer**. While the logic follows the Jonas Schmedtmann curriculum, my implementation focuses on clean architecture and production-ready component structures.

## 🧠 Engineering Focus: Section 10 Highlights
In this phase of the project, I tackled complex React patterns that go beyond basic rendering:

- **Component Composition:** Utilizing the `children` prop to avoid "Prop Drilling" and create a highly flexible UI structure.
- **Reusability:** Developed a custom, stateless **Star Rating component** designed to be dropped into any project requiring user feedback.
- **State Lifting:** Managing complex inter-component communication to ensure a "Single Source of Truth."
- **API Integration:** Handling side effects and asynchronous data fetching from external movie databases.

## 🛠 Tech Stack
- **Library:** React.js
- **Pattern:** Component Composition & Custom Hooks
- **Styling:** Modular CSS (Refactoring towards a design-system-led approach)
- **API:** OMDb (Open Movie Database)

## ✨ Key Features
- [x] **Real-time Search:** Dynamic fetching of movie data as the user types.
- [x] **Interactive Rating:** A custom-built star component with hover states and persistent rating logic.
- [x] **Watchlist Management:** Tracking watched movies, average ratings, and runtime stats.
- [ ] **Custom Hooks:** (Upcoming) Refactoring logic into reusable `useMovies` and `useLocalStorage` hooks.

## 🚀 Why This Matters
As a developer coming from a **13-year background in Design and WordPress development**, I use this project to master the "under the hood" mechanics of React. It’s not just about making it look good—it's about making the code **scalable, readable, and maintainable.**

---

### 🛠 Installation & Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/](https://github.com/)Lizzzardking/usePopcorn.git

2. Install dependencies:

 `bash
    npm install`

3. Run the development server:
 `Bash
 npm run dev`

Developed by Greg Telakis — Documenting the journey to Creative UI Engineering.
