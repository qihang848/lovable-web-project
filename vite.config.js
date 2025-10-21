import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/lovable-web-project/', // ✅ 填你的 GitHub 仓库名（用于 GitHub Pages）
});

