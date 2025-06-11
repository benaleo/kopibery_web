<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900">Welcome back</h1>
        <p class="mt-2 text-gray-600">Sign in to your account</p>
      </div>

      <div v-if="error" class="bg-red-50 text-red-700 p-4 rounded-md">
        {{ error }}
      </div>

      <form @submit.prevent="handleLogin" class="mt-8 space-y-6 bg-white p-8 rounded-lg shadow">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div class="flex justify-between items-center">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <NuxtLink to="/auth/forgot-password" class="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </NuxtLink>
            </div>
            <div class="relative mt-1">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                required
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
              >
                <Icon :name="showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'" class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="remember-me"
            v-model="rememberMe"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
              <Icon name="eos-icons:loading" class="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
            </span>
            {{ loading ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>
      </form>

      <div class="text-center text-sm">
        <span class="text-gray-600">Don't have an account?</span>
        {{ ' ' }}
        <NuxtLink to="/auth/register" class="font-medium text-blue-600 hover:text-blue-500">
          Sign up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner'

const { $supabase } = useNuxtApp()
const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const { data, error: authError } = await $supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (authError) throw authError

    // Redirect to dashboard or home page after successful login
    await router.push('/auth/confirm')
    // toast
    toast.success('Login successful')
  } catch (err: any) {
    error.value = err.message || 'Invalid email or password'
    toast.error(err.message || 'Invalid email or password')
  } finally {
    loading.value = false
  }
}
</script>