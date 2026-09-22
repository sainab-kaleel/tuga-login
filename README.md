# Tuga Login — Task Management App

A login page for a task management app, built with React, Vite, TypeScript, Material UI, and Firebase Authentication.

**Live Demo:** https://tuga-login-fcb7c.web.app

## Features

- Split-screen login layout matching the reference design
- Mobile responsive (form full-width, illustration hidden on small screens)
- Form validation (email regex + password length)
- Password visibility toggle
- Social login buttons (Google, Apple, Facebook)
- Google Sign-In via Firebase Authentication
- Protected dashboard route displaying the user's Firebase access token
- Deployed on Firebase Hosting

## Tech Stack

- **React 19** with TypeScript
- **Vite** for bundling
- **Material UI (MUI)** for components and theming
- **React Router** for routing
- **Firebase Authentication** for Google sign-in
- **Firebase Hosting** for deployment

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project with Google Sign-In enabled

### Install

```bash
npm install

Environment Variables
Create a .env.local file in the project root:

text
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
Get these from the Firebase Console → Project Settings → Your Apps.

Run locally:
npm run dev
Open http://localhost:5173

Build & deploy:
npm run build
firebase deploy

Project Structure:

src/
├── components/       # LoginForm, IllustrationPanel, SocialLoginButtons
├── firebase/         # Firebase initialization
├── hooks/            # useAuth (sign-in, logout)
├── pages/            # LoginPage, DashboardPage
├── theme/            # Custom MUI theme
├── types/            # TypeScript types
└── utils/            # Validators

Author:
Sainab Kaleel


