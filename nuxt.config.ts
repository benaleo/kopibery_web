// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css'],

  srcDir: '.',

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

  modules: ['shadcn-nuxt'],

  // supabase: {
  //   url: process.env.SUPABASE_URL,
  //   key: process.env.SUPABASE_KEY,
  //   serviceKey: process.env.SUPABASE_SERVICE_KEY,
  //   useSsrCookies: false,
  //   redirectOptions: {
  //     login: '/auth/login',
  //     callback: '/auth/confirm',
  //     exclude: ['/']
  //   }
  // },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  debug: process.env.NODE_ENV === 'development',

  experimental: {
    viewTransition: true,
    renderJsonPayloads: true
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    // supabaseKey: process.env.SUPABASE_SERVICE_KEY, // if you need server-only access

    // Public keys (exposed to client-side)
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      baseUrl: process.env.BASE_URL
    }
  }
})