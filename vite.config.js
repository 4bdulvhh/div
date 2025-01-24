import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    host: '0.0.0.0', // Bütün IP-lərdən qoşulmağa icazə verir
    port: 3000, // İstədiyiniz portu təyin edə bilərsiniz
  }
});
