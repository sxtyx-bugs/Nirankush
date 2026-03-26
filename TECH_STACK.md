# 🚀 Project Technology Stack & Architecture

Welcome to the Nirankush Portfolio project! This repository contains a highly interactive, dual-persona web experience built to showcase both "Tech Developer" and "Author/Writer" identities on a single platform.

To achieve world-class, fluid, and immersive UI/UX, we've carefully selected a modern tech stack focused heavily on performance and top-tier animation capabilities.

---

## 🛠 Core Framework & UI
* **[Next.js (v16+)](https://nextjs.org/)**: The foundational React framework used for server-side rendering, routing, and optimizing the web application.
* **[React (v19+)](https://react.dev/)**: The core engine powering interactive components and DOM rendering.
* **[Tailwind CSS (v4)](https://tailwindcss.com/)**: A robust utility-first CSS framework natively integrated right down to the root. We heavily rely on Tailwind for creating the bespoke split-theme styling (Author Cream vs. Developer Midnight).
* **[TypeScript](https://www.typescriptlang.org/)**: For strict type-safety, robust component props, and predictable code behavior.

---

## 🎨 Animation & Visual Libraries
This project hinges on elite, award-winning animation fidelity. To achieve this, we combined the industry's two best animation libraries for specific responsibilities:

1. **[GSAP](https://gsap.com/) (GreenSock) & `@gsap/react`**
   * **Why we use it:** Used for heavy lifting on complex scroll-based animations. 
   * **Where it's used:** Responsible for the massive sticky-note pinned scroll features, horizontal flowing marquees, parallax effects, and complex timeline executions.

2. **[Framer Motion](https://www.framer.com/motion/)**
   * **Why we use it:** Best-in-class for physics-based fluid micro-interactions.
   * **Where it's used:** Powers the custom magnetic cursors, spring physics, image hover popups, modal entries, and soft UI component mounting animations.

---

## 🌐 3D Browser Rendering
We incorporate actual 3D rendering to achieve striking visual elements not possible with standard 2D DOM nodes.
* **[Three.js](https://threejs.org/)**: The underlying 3D WebGL engine.
* **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)**: A React renderer for Three.js, allowing us to build 3D scenes declaratively using React components.
* **[@react-three/drei](https://github.com/pmndrs/drei)**: A growing collection of useful helpers and abstractions for React Three Fiber (makes rendering models and cameras incredibly easy).

---

## 🌊 Seamless Scroll Experience
* **[Lenis](https://lenis.studiofreight.com/) (`@studio-freight/react-lenis`)**: The gold standard for smooth scrolling. This intercepts native scrolling physics and provides a buttery-smooth, fluid scroll that syncs perfectly with our GSAP scroll triggers and parallax features.

---

## 🧩 Utilities & UI Helpers
* **[Lucide React](https://lucide.dev/)**: For all our beautifully crisp, scalable vector icons (`Search`, `ArrowUpRight`, `Menu`, etc.).
* **`clsx` & `tailwind-merge`**: Used in tandem with `cn()` utility functions to smartly dynamically merge, overwrite, and compose Tailwind classes without styling conflicts.
* **Radix UI (`@radix-ui/react-slot`) / `class-variance-authority`**: Used for building flexible and robust accessible UI primitives (like our custom Buttons).

---

## 🎭 Dual-Persona Setup Context
This project utilizes a global **Context Provider** (`PersonaContext`) that dictates which "mode" the site runs in:
* **Developer Persona:** Dark aesthetic (`#050505`), futuristic neon highlights, technical typography, code logic presentation.
* **Author Persona:** Soft light theme (`#F5F2F0`), elegant warm yellows (`#FCE116`), serif undertones, and luxurious reading-focused layouts.

If you are modifying functionality, be sure to note that many sections conditionally render entirely different component trees based on `usePersona()`!
