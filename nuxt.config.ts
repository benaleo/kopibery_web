// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  // Ensure server routes are registered
  srcDir: '.',
  
  // Server configuration
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  // Vite configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      watch: {
        usePolling: true
      }
    }
  },

  // Modules
  modules: ['shadcn-nuxt'],
  
  // shadcn configuration
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  
  // Debug logging
  debug: process.env.NODE_ENV === 'development',
  
  // Enable experimental features if needed
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true
  }
})