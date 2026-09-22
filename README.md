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

Run locally
bash
npm run dev
Open http://localhost:5173

Build & deploy
bash
npm run build
firebase deploy
Project Structure
text
src/
├── components/       # LoginForm, IllustrationPanel, SocialLoginButtons
├── firebase/         # Firebase initialization
├── hooks/            # useAuth (sign-in, logout)
├── pages/            # LoginPage, DashboardPage
├── theme/            # Custom MUI theme
├── types/            # TypeScript types
└── utils/            # Validators
Author
Sainab Kaleel

text

**Save** (`Ctrl + S`).

---

## Step 5 — Commit and push

```powershell
git add .
powershell
git commit -m "docs: add project README with setup and live demo"
powershell
git push
Step 6 — Verify on GitHub
Open https://github.com/sainab-kaleel/tuga-login in your browser.

You should see:

Your new README rendered on the repo homepage

The live demo link at the top

Features, tech stack, setup instructions

That makes your repo look professional. ✅

Why this matters
When the recruiter opens your GitHub repo, the README is the first thing they see. The default Vite one says "This template provides..." — which looks unfinished. Your custom README shows:

What the project does

How to run it

Where the live demo is

Proof you understand your own code

Big difference in how it's perceived.

Do this now
Open README.md

Ctrl + A → Delete → Paste the new README

Save

git add . && git commit && git push

Verify on GitHub

Screenshot the GitHub README page and send it — I'll confirm it looks right.

Then we do the final submission email. 🎯

markdown onlt want to add or all these?
Great question. Paste everything — the whole block I gave you. It's all Markdown.

Let me clarify what's what:

What you're looking at
The block I gave you IS all Markdown. Here's how it breaks down:

Part	Type	Purpose
# Tuga Login — Task Management App	Markdown heading (#)	Big title
**Live Demo:** ...	Markdown bold (**)	Emphasized text
## Features	Markdown heading (##)	Section
- Split-screen layout...	Markdown bullet list (-)	List items
```bash ... ```	Markdown code block	Shows commands as code
src/ tree with ├──	Markdown code block	Directory structure
**React 19**	Markdown bold	Emphasis
Everything is Markdown. GitHub automatically renders it as formatted text (headings, lists, code blocks, etc.).

So what to do
Paste the ENTIRE block — from # Tuga Login all the way to Sainab Kaleel.

Don't skip anything.
Don't add anything.

Just replace your current README with the whole thing.

Why it looks confusing
Some Markdown syntax looks like code:

The triple backticks ``` around the bash examples

The tree characters ├── └──

The indented .env block

Those are intentionally wrapped in code blocks so GitHub shows them as code, not as formatted text. That's the correct way to write them.

Quick sanity check
After pasting and saving, your README.md should look like:

text
# Tuga Login — Task Management App

A login page for a task management app...

**Live Demo:** https://tuga-login-fcb7c.web.app

## Features

- Split-screen login layout...
- Mobile responsive...
...and so on.

You are literally copying the whole thing as text. GitHub will style it when you view it.

Preview it before pushing
In VS Code:

Open README.md

Press Ctrl + Shift + V

This opens a Markdown preview in a side panel. You should see:

Big bold heading "Tuga Login"

Live Demo link in bold

Bulleted features list

Code blocks showing npm install, etc.

If it looks formatted like a webpage → perfect, you did it right.

Then commit
powershell
git add .
powershell
git commit -m "docs: replace default README with project documentation"
powershell
git push
Then open https://github.com/sainab-kaleel/tuga-login — your README should show formatted on the repo page.

Do this now
Ctrl + A in README.md (select all)

Delete

Paste the entire block I gave you

Save (Ctrl + S)

Preview: Ctrl + Shift + V — does it look formatted?

Commit + push

Screenshot the README preview (Ctrl + Shift + V) and send it — I'll confirm it's correct before you push. 🎯

no. i ask in step 4 all details want to add or?
Ah, I understand now. You're asking: for step 4, do I paste ALL of it, or just part?

Answer: Paste ALL of it. Every single line.

Here's exactly what to copy — from the first line to the last line, nothing skipped:

Copy everything from this block:
markdown
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

