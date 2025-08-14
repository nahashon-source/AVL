# React + Vite + Tailwind CSS

This template provides a minimal setup to get React working in Vite with HMR, some ESLint rules, and Tailwind CSS for styling.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🎨 Tailwind CSS Setup

This project is configured with Tailwind CSS v4. You can start using utility classes right away:

```jsx
<h1 className="text-blue-600 text-4xl font-bold">Hello World</h1>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

### Manual Tailwind CSS Setup Guide

If you need to set up Tailwind CSS again or in a new project, follow these steps:

#### For Tailwind CSS v4 (Current):

1. **Install dependencies:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Create `tailwind.config.js`:**
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Create `postcss.config.js`:**
   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

4. **Add Tailwind directives to `src/index.css`:**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

#### For Tailwind CSS v3.x (Legacy):

```bash
npx tailwindcss init -p
```
Then add the Tailwind directives to your CSS file.

#### Common Issues:

- **Error: "could not determine executable to run"** - This happens with Tailwind v4 because it doesn't have the `init` command. Create config files manually instead.
- **Styles not applying** - Make sure the `content` paths in `tailwind.config.js` match your project structure.
- **Build errors** - Ensure PostCSS is properly configured and Tailwind directives are in your main CSS file.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# AVL
