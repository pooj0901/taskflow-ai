# TaskFlow AI — Premium SaaS Landing Page & Full Stack Waitlist API

TaskFlow AI is a production-grade SaaS landing page and Waitlist API built for fictional AI-powered project management platform. Designed with clean engineering practices, modern typography, sleek glassmorphism, micro-interactions, and high reliability.

---

## 🌟 Tech Stack

### Frontend
- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Tokens, Glassmorphism, Modern HSL/Hex Palettes)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js + Express.js
- **Language:** TypeScript
- **Database:** MongoDB + Mongoose (with automated memory-store fallback)
- **Middleware:** CORS, Express JSON Parser

---

## 🚀 Key Features

1. **Sticky Glass Navbar:** Glassmorphic navbar with smooth scrolling to sections and view toggle for Admin mode.
2. **Hero Section:** High-converting hero layout with dynamic badges, dual CTA buttons, and interactive floating SaaS dashboard analytics previews.
3. **Trusted Companies:** Clean corporate brand bar (NovaTech, CloudWorks, PixelForge, BrightScale, FutureLabs).
4. **4 Core Feature Cards:** AI Task Planning, Smart Deadline Prediction, Team Collaboration, Advanced Analytics with hover physics.
5. **Interactive Dashboard Showcase:** Real application showcase featuring interactive Kanban columns (drag/move tasks), velocity chart metrics, release calendar, and real-time activity feed.
6. **Why Choose Us:** 3-column value proposition highlighting time savings, automated workflows, and team productivity.
7. **Animated Statistics:** Live counting metrics for 250K+ Projects, 99.9% Uptime, 40% Faster Delivery, 100+ Enterprise Teams.
8. **Testimonials:** Verified customer reviews with 5-star ratings and company roles.
9. **Working Waitlist Form:** Form with full frontend validation, Axios POST requests to the backend API, loading states, success toast cards, and error handling.
10. **Admin Portal (`/admin`):** Real-time admin table view featuring search filtering, column sorting, registration metrics, and JSON data exporting.

---

## 🛠️ Project Setup & Installation

### Server Setup (Backend)
```bash
cd server
npm install
npm run dev
```
*The server will run on `http://localhost:5000`*

### Client Setup (Frontend)
```bash
cd client
npm install
npm run dev
```
*The Vite development server will launch on `http://localhost:3000`*

---

## 📡 API Endpoints

### `POST /api/waitlist`
Submit a new waitlist request.

**Payload:**
```json
{
  "name": "Alex Morgan",
  "email": "alex@company.com",
  "company": "Acme Innovations"
}
```

### `GET /api/waitlist`
Retrieve all registered waitlist entries (sorted newest first).

---

## 📁 Directory Architecture

```
taskflow-ai/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── TrustedCompanies.tsx
│   │   │   │   ├── Features.tsx
│   │   │   │   ├── DashboardShowcase.tsx
│   │   │   │   ├── WhyChooseUs.tsx
│   │   │   │   ├── Stats.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   ├── FinalCTA.tsx
│   │   │   │   └── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── pages/
│   │   │   └── AdminPage.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── waitlist.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.ts
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   ├── controllers/
│   │   │   └── waitlistController.ts
│   │   ├── models/
│   │   │   └── Waitlist.ts
│   │   ├── routes/
│   │   │   └── waitlistRoutes.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```
