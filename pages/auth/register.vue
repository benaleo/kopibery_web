<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full p-8 space-y-8 bg-white rounded-lg shadow-md">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900">Create an account</h1>
        <p class="mt-2 text-gray-600">Join us today</p>
      </div>

      <div v-if="error" class="bg-red-50 text-red-700 p-4 rounded-md">
        {{ error }}
      </div>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

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
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="relative mt-1">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pr-10"
              placeholder="••••••••"
              @input="validatePassword"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
            >
              <Icon :name="showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'" class="h-5 w-5" />
            </button>
          </div>
          <div v-if="passwordError" class="mt-1 text-sm text-red-600">
            {{ passwordError }}
          </div>
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <div class="relative mt-1">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirmPassword"
              v-model="confirmPassword"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pr-10"
              placeholder="••••••••"
              @input="validatePassword"
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
            >
              <Icon :name="showConfirmPassword ? 'heroicons:eye-slash' : 'heroicons:eye'" class="h-5 w-5" />
            </button>
          </div>
          <div v-if="!passwordsMatch && confirmPassword" class="mt-1 text-sm text-red-600">
            Passwords do not match
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading || !isFormValid"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
              <Icon name="eos-icons:loading" class="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
            </span>
            {{ loading ? 'Creating account...' : 'Sign up' }}
          </button>
        </div>
      </form>

      <div class="text-center text-sm">
        <span class="text-gray-600">Already have an account?</span>
        {{ ' ' }}
        <NuxtLink to="/auth/login" class="font-medium text-blue-600 hover:text-blue-500">
          Sign in
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner'

const { $supabase } = useNuxtApp()
const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const error = ref('')
const passwordError = ref('')
const passwordsMatch = ref(true)

const isFormValid = computed(() => {
  return (
    name.value &&
    email.value &&
    password.value &&
    confirmPassword.value &&
    password.value === confirmPassword.value &&
    !passwordError.value
  )
})

const validatePassword = () => {
  if (password.value.length < 8) {
    passwordError.value = 'Password must be at least 8 characters long'
  } else if (!/[A-Z]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one uppercase letter'
  } else if (!/[a-z]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one lowercase letter'
  } else if (!/[0-9]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one number'
  } else {
    passwordError.value = ''
  }

  passwordsMatch.value = password.value === confirmPassword.value
}

const handleRegister = async () => {
  if (!isFormValid.value) return

  loading.value = true
  error.value = ''

  try {
    const { data, error: signUpError } = await $supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: name.value,
        },
        emailRedirectTo: `${window.location.origin}/auth/confirm`
      }
    })

    if (signUpError) throw signUpError

    // Redirect to login page with success message
    await router.push({
      path: '/auth/login',
      query: { registered: 'true' }
    })

    toast.success('Register successful')
  } catch (err: any) {
    error.value = err.message || 'Failed to register. Please try again.'
    toast.error(err.message || 'Failed to register. Please try again.')
  } finally {
    loading.value = false
  }
}
  
</script>
