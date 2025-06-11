<template>
  <section class="w-full bg-[#F3E9E3]">
    <div class="container mx-auto">
      <div class="flex justify-between px-4 py-8 space-x-8">
        <div class="space-y-4">
          <p class="title">Tentang Kami</p>

          <div class="flex flex-col justify-between h-full">
            <div class="text-base space-y-4">
              <p>
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </p>

              <p>
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum.
              </p>
            </div>

            <div>
              <CTASeeButton text="Kenali kami lebih dekat" route="/tentang" />
            </div>
          </div>
        </div>
        <div class="w-full flex justify-end">
          <img
            :src="about1Image"
            alt="About"
            class="flex-1 h-auto"
          />
        </div>
      </div>
      <div class="flex justify-between px-4 py-8 space-x-8">
        <img
          v-for="(image, index) in imageList"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="max-w-[300px] h-auto"
          :class="image.type === 'video' ? 'w-[40vw]' : ''"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ImageItem } from "~/types/global.type";
import CTASeeButton from "./CTASeeButton.vue";

// import assets
import engineer2Image from '@/assets/images/engineer-2.png';
import about1Image from '@/assets/images/about-1.png';
import about2Image from '@/assets/images/about-2.png';
import about3Image from '@/assets/images/about-3.png';
import about4Image from '@/assets/images/about-4.png';

const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const imageList: ImageItem[] = [
  {
    src: about2Image,
    alt: "About us image 2",
    type: "image" as const,
  },
  {
    src: about3Image,
    alt: "About us image 3",
    type: "image" as const,
  },
  {
    src: about4Image,
    alt: "About us image 4",
    type: "image" as const,
  },
];

// Preload images
const preloadImages = () => {
  const images = [about1Image, about2Image, about3Image, about4Image];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

onMounted(() => {
  preloadImages();
});

</script>
