<template>
  <section class="py-16 bg-[#FCF9F8] relative overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Title and Subtitle -->
      <h2 class="text-4xl md:text-5xl font-bold text-[#723E29] mb-4">Kopi Terbaik Kami</h2>
      <p class="text-[#5D4037] mb-12 max-w-2xl mx-auto">
        Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
        odio mattis.
      </p>

      <!-- Product Cards Section with Background -->
      <div class="relative z-0">
        <!-- Background shape -->
        <!--        <div class="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-r from-[#F88F01] to-[#723E29] rounded-2xl z-[-1]"></div>-->
        <div class="absolute inset-x-0 bottom-0 z-[-1] flex items-center justify-center">
          <img src="@/assets/images/featured-product-bg.png" alt="featured-product-bg"
               class="w-full h-full object-cover">
        </div>


        <!-- Product Cards -->
        <div class="flex flex-row justify-center items-end gap-8 lg:gap-12 pb-12 relative z-10">
          <div v-for="(product, index) in products" :key="index" class="flex flex-col items-center">
            <!-- Product Image with Circle Background -->
            <div class="relative mb-4">
              <div
                  class="relative w-40 h-40 md:w-48 md:h-48 bg-[#FCEFCE] rounded-full flex items-center justify-center mb-4">
                <img :src="product.image" :alt="product.name" class="absolute bottom-4">
              </div>
              <!-- Rating Stars -->
              <div
                  class="absolute bottom-12 right-[-2.4rem] bg-white rounded-lg flex justify-center items-center px-2 py-1">
                <div class="flex justify-center space-x-1 mb-2">
                  <img src="@/assets/images/star.png" alt="star" class="w-4 h-4">
                </div>
                <p class="text-sm">({{ product.rating }})</p>
              </div>
            </div>

            <!-- Product Info -->
            <div class="text-center">
              <h3 class="text-sm font-semibold text-white mb-1">{{ product.name }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="flex justify-center w-full mt-8">
        <CTASeeProduct/>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import CTASeeProduct from "~/components/elements/CTASeeButton.vue";

const products = [
  {
    name: 'Kopi Arabika',
    origin: 'Gunung Bale, Jawa Barat',
    price: 120000,
    rating: '4.9',
    image: new URL('@/assets/images/featured-product.png', import.meta.url).href
  },
  {
    name: 'Kopi Robusta',
    origin: 'Gunung Bale, Jawa Barat',
    price: 110000,
    rating: '4.8',
    image: new URL('@/assets/images/featured-product.png', import.meta.url).href
  },
  {
    name: 'Kopi Liberika',
    origin: 'Gunung Bale, Jawa Barat',
    price: 115000,
    rating: '4.7',
    image: new URL('@/assets/images/featured-product.png', import.meta.url).href
  }
];
</script>

<style scoped>
/* Custom styles if needed */
</style>