
# 🇩🇪 DeutschFlow

A modern, full-stack language learning platform built with Next.js App Router, MongoDB, and custom authentication.  
DeutschFlow provides structured German lessons, vocabulary, practice exercises, and per-user progress tracking in a responsive, mobile-first UI.

---

## Features

- Custom authentication (signup, signin, signout)
- Structured lessons with vocabulary & practice exercises
- Per-user progress tracking (lesson + exercise level)
- Practice scoring & completion feedback
- Progress dashboard with charts
- Fully responsive (mobile-first UX)
- Server Components + Client Hooks (Next.js 16 compatible)

---

## Tech Stack

**Frontend**
- Next.js 16 (App Router)
- React (Server & Client Components)
- Tailwind CSS
- Framer Motion (animations)
- React Icons

**Backend**
- Next.js Route Handlers
- MongoDB (native driver)
- Custom session-based authentication
- REST-style API routes

**State & Data**
- Client hooks for user & progress state
- Server-side data fetching with auth boundaries
- Local fallback persistence

---

## Architecture Highlights

- **Protected routes** using server-side auth checks
- **Clean API layer** decoupled from UI components
- **Per-user progress model** (lesson, exercise, score)
- **Reusable hooks** (`useUser`, `useLessonProgress`)
- **Mobile-first navigation** with custom breakpoints

---

## Getting Started

```bash
npm install
npm run dev