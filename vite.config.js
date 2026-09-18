import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const authorization = `token ${env.ERPNEXT_API_KEY}:${env.ERPNEXT_API_SECRET}`
  const erpnextProxy = {
    '/api/erpnext': {
      target: env.ERPNEXT_URL,
      changeOrigin: true,
      rewrite: (requestPath) => requestPath.replace(/^\/api\/erpnext/, '/api'),
      headers: {
        Authorization: authorization,
      },
    },
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    server: {
      proxy: erpnextProxy,
    },

    preview: {
      proxy: erpnextProxy,
    },
  }
})
