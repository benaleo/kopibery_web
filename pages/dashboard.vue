<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <div class="flex items-center">
            <button
              @click="handleLogout"
              class="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Your personal details and account information.</p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ user?.user_metadata?.full_name || 'Not provided' }}
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ user?.email || 'Not provided' }}
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Account created</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ formatDate(user?.created_at) }}
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Last sign in</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ formatDate(user?.last_sign_in_at) }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner'

const { $supabase } = useNuxtApp()
const router = useRouter()
const user = ref<any>(null)
const loading = ref(true)

onMounted(async () => {
  await fetchUser()
})

const fetchUser = async () => {
  try {
    const { data: { user: userData }, error } = await $supabase.auth.getUser()
    
    if (error) throw error
    if (!userData) {
      await router.push('/auth/login')
      return
    }

    // Get the full user data including user_metadata
    const { data: { session } } = await $supabase.auth.getSession()
    user.value = session?.user || userData
  } catch (error: any) {
    toast.error(error.message || 'Failed to fetch user data')
    await router.push('/auth/login')
  } finally {
    loading.value = false
  }
}

const handleLogout = async () => {
  try {
    const { error } = await $supabase.auth.signOut()
    if (error) throw error
    
    toast.success('Successfully signed out')
    await router.push('/auth/login')
  } catch (error: any) {
    toast.error(error.message || 'Error signing out')
  }
}

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>