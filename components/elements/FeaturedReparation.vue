<template>
  <section class="relative w-full">
    <!-- Left Image -->
    <div class="absolute left-4 top-0">
      <!-- Decorative Element -->
      <div class="absolute bottom-0 left-0 h-[60%] aspect-video bg-[#CCA387] opacity-40 rounded-2xl z-[-1]"></div>
      <img :src="engineer1Image" alt="Featured Reparation" class="ml-4 w-full h-auto max-h-[200px] rounded-2xl" />
    </div>

    <!-- Right Image -->
    <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
      <div class="absolute bottom-0 right-0 h-[60%] aspect-video bg-[#CCA387] opacity-40 rounded-2xl z-[-1]"></div>
      <img :src="engineer2Image" alt="Featured Reparation" class="mr-4 w-full h-auto max-h-[200px] rounded-2xl" />
    </div>

    <div class="lg:max-w-[60vw] mx-auto flex justify-center items-center">
      <div class="flex flex-col items-center">
        <p class="title">
          Perbaiki Alat Dengan Aman
        </p>
        <p class="text-center text-base mt-4">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>

        <!-- Features -->
        <div class="space-y-6 grid grid-cols-5 gap-2 max-w-fit my-16">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex flex-col items-center bg-white px-4 py-2 rounded-lg max-h-fit"
          >
            <!-- Icon -->
            <div class="flex-shrink-0">
              <img :src="feature.icon" :alt="feature.title" class="w-12 h-12" />
            </div>
            <!-- Content -->
            <div>
              <h3 class="text-sm text-[#5D4037] mb-1">{{ feature.title }}</h3>
            </div>
          </div>
        </div>

        <CTASeeButton text="Lihat Layanan Perbaikan" route="/reparasi" />

        <!-- Divider -->
        <div class="w-full lg:w-[50vw] h-[1px] bg-black mb-8"></div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CTASeeButton from './CTASeeButton.vue';

// import assets
import beanLinkImage from '@/assets/images/bean-link.svg';
import engineer1Image from '@/assets/images/engineer-1.png';
import engineer2Image from '@/assets/images/engineer-2.png';

const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const features = [
  {
    title: "Profesional",
    icon: beanLinkImage,
  },
  {
    title: "Cepat",
    icon: beanLinkImage,
  },
  {
    title: "Terjangkau",
    icon: beanLinkImage,
  },
  {
    title: "Bergaransi",
    icon: beanLinkImage,
  },
  {
    title: "Aman",
    icon: beanLinkImage,
  },
];


// Preload images
const preloadImages = () => {
  const images = [beanLinkImage, engineer1Image, engineer2Image];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

onMounted(() => {
  preloadImages();
});
</script>
