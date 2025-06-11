<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
      <p>Verifying your session...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $supabase } = useNuxtApp()
const router = useRouter()

onMounted(async () => {
  try {
    // Check for OAuth callback
    const { data, error } = await $supabase.auth.getSession()
    
    if (error) throw error
    
    if (data.session) {
      // If we have a session, redirect to dashboard
      await router.replace('/dashboard')
    } else {
      // If no session, redirect to login
      await router.replace('/auth/login')
    }
  } catch (error) {
    console.error('Error during session verification:', error)
    await router.replace('/auth/login')
  }
})
</script>