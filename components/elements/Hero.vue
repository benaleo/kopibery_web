<template>
  <section class="relative bg-[#F8F5F0] py-16 overflow-hidden">
    <!-- Left border line -->
    <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#FF7A7A] bg-opacity-20"></div>
    
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Left content -->
        <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-l from-[#F88F01] to-[#723E29] bg-clip-text text-transparent mb-4">Kopibery</h1>
          <h2 class="text-2xl md:text-3xl font-bold text-[#5D4037] mb-6">Solving your coffee business</h2>
          <p class="text-[#5D4037] mb-8 max-w-lg">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          
          <!-- CTA Button -->
          <CTASeeProduct/>
          
          <!-- Stats -->
          <div class="flex items-center space-x-8">
            <div class="text-center">
              <p class="text-3xl font-bold text-[#5D4037]">+12</p>
              <p class="text-sm text-[#8D6E63]">Kopi</p>
            </div>
            <div class="h-12 w-px bg-[#D7CCC8]"></div>
            <div class="text-center">
              <p class="text-3xl font-bold text-[#5D4037]">+30</p>
              <p class="text-sm text-[#8D6E63]">Barista</p>
            </div>
            <div class="h-12 w-px bg-[#D7CCC8]"></div>
            <div class="text-center">
              <p class="text-3xl font-bold text-[#5D4037]">+30</p>
              <p class="text-sm text-[#8D6E63]">Reparasi alat</p>
            </div>
          </div>
        </div>
        
        <!-- Right image -->
        <div class="lg:w-1/2 relative">
          <div class="relative z-10">
            <img 
              src="@/assets/images/hero-product.png" 
              alt="Kopibery Product" 
              class="max-w-full h-auto mx-auto lg:ml-auto lg:mr-0"
            />
            
            
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic goes here
import CTASeeProduct from "~/components/elements/CTASeeButton.vue";
</script>

<style scoped>
/* Custom styles if needed */
</style>
