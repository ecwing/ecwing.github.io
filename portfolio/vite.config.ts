import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-github-username' with your actual GitHub username
export default defineConfig({
  plugins: [react()],
  base: '/portfolio', // Make sure this matches your GitHub repo name
});
