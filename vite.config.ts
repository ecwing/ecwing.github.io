import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-github-username' with your actual GitHub username
export default defineConfig({
  plugins: [react()],
  base: '/ecwing.github.io/', // Make sure this matches your GitHub repo name
});
