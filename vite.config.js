import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/git remote add origin https://github.com/qihang848/lovable-web-project.git
/', // ⚠️ 注意替换为你的 GitHub 仓库名
});
