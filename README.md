# 🧱 Dev Stack

### The right tools for your next big idea.

**[Live website](https://dev-stack-devnajmus.netlify.app/)** · **[GitHub repository](https://github.com/devnajmus/dev-stack-builder)**

A responsive technology explorer built with React. Discover frontend frameworks, backend tools, databases, and languages, then assemble your own development stack.

## ✨ Three key features

1. **Explore 12 technologies** — informative cards with logos, categories, difficulty levels, sample ratings, and badges, fetched from a separate JSON file.
2. **Build your stack** — add unique technologies, remove individual selections, or clear the whole stack. React-Toastify reports each action; a duplicate guard prevents repeated entries.
3. **Responsive experience** — sticky desktop navigation, an accessible mobile menu, loading/error/retry states, and a shared orange → pink → violet brand gradient.

## 🛠️ Technologies

React 19 · JavaScript (ES6+) · Vite 6 · React-Toastify 11 · Lucide React · CSS · JSON

## 🚀 Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Deploy the generated `dist` folder to a static host. No environment variables are needed. Vite is configured for hosting at the domain root.

## Project structure

```text
public/technologies.json   Technology catalog loaded with fetch
public/banner-stack.png   Original assignment banner
src/App.jsx               Data loading and stack state
src/Navbar.jsx            Desktop and mobile navigation
src/Hero.jsx              Introductory banner
src/TechnologyCard.jsx    Reusable technology card
src/StackPanel.jsx        Selected technologies
src/Footer.jsx            Footer navigation
src/styles.css            Shared theme and responsive styles
```

Change `--brand-gradient` in `src/styles.css` to re-theme the brand, highlighted headings, and primary buttons together.

Stack selections are session-only and reset on reload. Sign In and Sign Up open transparent demo notices; authentication is outside this assignment. Supporting navigation opens short informational dialogs. Ratings are illustrative. Icons are loaded from jsDelivr with a local fallback. Google Fonts is optional; system fonts are used if it is unavailable.

## Credits

Design reference and banner: [Programming Hero assignment](https://github.com/ProgrammingHero1/B14-A05-DevStack). Technology logos: [Devicon](https://github.com/devicons/devicon). Interface icons: [Lucide](https://lucide.dev).

## 💡 React questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like markup inside JavaScript. It makes a component's interface easier to read while letting us use JavaScript expressions inside braces.

### 2. What is the difference between props and state?

Props are values a parent passes to a child. State is a component's changing memory. The child reads its props; a state setter updates state and causes React to render again.

### 3. What does `useState` do, and where did you use it?

`useState` stores a value between renders and provides a function to update it. I used it for the selected stack, fetched technologies, loading and error states, mobile menu, and information dialog.

### 4. What does `useEffect` do, and why use it to load JSON?

`useEffect` runs side effects after rendering. I use it to fetch `technologies.json` when the app opens or the user retries. Its cleanup cancels an unfinished request when the component unmounts.

### 5. Why does every item in a `.map()` list need a unique `key`?

A stable key lets React recognize each item between renders. Using a technology's unique ID helps React update or remove the correct card when the list changes.

### 6. What is conditional rendering? Where did you use it?

Conditional rendering shows different UI depending on a condition. `StackPanel` displays an empty message when `stack.length === 0`; otherwise, it displays the selected technology list. The app also switches between loading, error, and loaded cards.

### 7. How do parents and children communicate?

A parent passes data and callback functions through props. `App` sends each technology and `onAdd` to `TechnologyCard`. The card calls `onAdd(tech)` when clicked, and `App` updates the stack.
