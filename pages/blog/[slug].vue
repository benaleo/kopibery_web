<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Blog Post: {{ formattedSlug }}</h1>
    
    <!-- Loading State -->
    <div v-if="pending" class="text-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p class="mt-4 text-gray-600">Loading post content...</p>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">Error loading post</h3>
          <div class="mt-2 text-sm text-red-700">
            <p>{{ error.message || 'An unknown error occurred' }}</p>
          </div>
          <div class="mt-4">
            <button @click="retry" class="text-sm font-medium text-red-700 hover:text-red-600">
              Try again <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Success State -->
    <div v-else class="prose max-w-none">
      <pre v-if="data" class="bg-gray-50 p-4 rounded-md overflow-x-auto">{{ data }}</pre>
      <p v-else class="text-gray-500 italic">No content available for this post.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const slug = route.params.slug

// Format slug for display
const formattedSlug = computed(() => {
  if (typeof slug === 'string') {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }
  return 'Blog Post'
})

// Fetch data with retry logic
const { data, pending, error, refresh } = await useAsyncData(
  `blog-${slug}`,
  () => $fetch('/api/hello')
)

// Retry function
const retry = () => {
  refresh()
}

// Set page metadata
useHead({
  title: `Blog: ${formattedSlug.value}`,
  meta: [
    { name: 'description', content: `Blog post: ${formattedSlug.value}` },
    { property: 'og:title', content: `Blog: ${formattedSlug.value}` },
    { property: 'og:description', content: `Read more about ${formattedSlug.value}` }
  ]
})

// Error handling
onMounted(() => {
  if (process.client) {
    if (error.value) {
      console.error('Error loading blog post:', error.value)
    }
  }
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
