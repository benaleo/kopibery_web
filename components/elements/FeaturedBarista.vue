<template>
  <section class="py-6 bg-[#F3E9E3] relative overflow-hidden mb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Left Content -->
        <div class="w-1/2 mb-12 lg:mb-0 lg:pr-12 relative">
          <!-- Title -->
          <h2 class="text-4xl md:text-4xl font-bold text-[#723E29] mb-6 whitespace-nowrap">
            Barista Dengan Layanan Prima
          </h2>
          
          <!-- Description -->
          <p class="text-[#5D4037] mb-8">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          
          <!-- Features -->
          <div class="space-y-6 grid grid-cols-3 gap-2 max-w-fit">
            <div v-for="(feature, index) in features" :key="index" class="flex flex-col items-center bg-white px-4 py-2 rounded-lg max-h-fit">
              <!-- Icon -->
              <div class="flex-shrink-0">
                <img :src="feature.icon" :alt="feature.title" class="w-12 h-12">
              </div>
              <!-- Content -->
              <div>
                <h3 class="text-sm text-[#5D4037] mb-1">{{ feature.title }}</h3>
              </div>
            </div>
          </div>
          
          <!-- CTA Button -->
          <CTASeeButton text="Lihat Barista Kami" route="/barista" />
        </div>
        
        <!-- Right Image -->
        <div class="absolute right-24 top-1/2 transform -translate-y-1/2">
          <div class="relative ">
            <!-- Main Image -->
            <img
              :src="featuredBarista"
              alt="Barista Profesional"
              class="w-[200px] h-auto rounded-2xl"
            >

            <div class="px-4 py-2 bg-old-brown text-white rounded-lg text-center">Pusitaa wati</div>
            
            <!-- Decorative Element -->
            <div class="absolute top-0 -right-[80px] h-full aspect-square bg-[#CCA387] opacity-40 rounded-full z-[-1]"></div>
            
            <!-- Stats -->
            <div class="absolute bottom-6 right-[250px] bg-white rounded-2xl shadow-lg p-4 w-40">
              <p class="text-3xl font-bold text-[#723E29] text-center">100+</p>
              <p class="text-sm text-[#5D4037] text-center">Barista Berpengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CTASeeButton from './CTASeeButton.vue';

// import image
import beanLinkImage from '@/assets/images/bean-link.svg';
import featuredBarista from '@/assets/images/featured-barista.png';


const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const features = [
  {
    title: 'Adaptif',
    description: 'Mampu beradaptasi dengan berbagai jenis mesin kopi dan teknik penyajian',
    icon: beanLinkImage
  },
  {
    title: 'Responsif',
    description: 'Cepat tanggap dalam melayani pelanggan dan menangani pesanan',
    icon: beanLinkImage
  },
  {
    title: 'Profesional',
    description: 'Bersertifikat dan berpengalaman dalam dunia kopi profesional',
    icon: beanLinkImage
  }
];

// Preload images
const preloadImages = () => {
  const images = [beanLinkImage, featuredBarista];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

onMounted(() => {
  preloadImages();
});
</script>
