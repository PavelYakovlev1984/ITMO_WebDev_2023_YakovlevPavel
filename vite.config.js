import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    port: 8088,
    host: 'local.dev',
    https: true,
  },
  plugins: [mkcert()],
});
