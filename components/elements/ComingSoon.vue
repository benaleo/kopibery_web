<template>
  <div class="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <img 
      src="@/assets/images/coming-soon.jpg" 
      alt="Coming Soon"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50 z-10"></div>
    
    <!-- Content -->
    <div class="relative z-20 text-center text-white px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">Coming Soon</h1>
      <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">We're working on something amazing. Stay tuned!</p>
      
      <!-- Back to Home Button -->
      <NuxtLink 
        to="/" 
        class="inline-block bg-old-brown hover:bg-[#6D4C41] text-white px-8 py-3 rounded-full font-medium transition-colors"
      >
        Back to Home
      </NuxtLink>
    </div>
    
    <!-- Footer -->
    <div class="absolute bottom-8 left-0 right-0 text-center text-white/80 text-sm z-20">
      &copy; {{ new Date().getFullYear() }} Kopibery. All rights reserved.
    </div>
  </div>
</template>

<script setup>
// Component logic goes here
</script>

<style scoped>
/* Custom styles if needed */
</style>