// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css'],

  // Ensure server routes are registered
  srcDir: '.',
  
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
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  }
})