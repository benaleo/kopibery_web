<template>
  <section class="w-full mt-4">
    <div class="w-full lg:max-w-[80vw] text-center mx-auto">
      <!-- Text 1 -->
      <p class="text-2xl md:text-4xl font-semibold gradient-brown py-2 mb-12">
        Tentang Kami
      </p>
      <p class="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </p>
    </div>
    <!-- Cover image -->
    <div class="w-full h-[400px] mt-12">
      <img
          src="@/assets/images/about-page-1.png"
          alt="About"
          class="w-full h-auto object-cover"
      />
    </div>
    <!-- Text 2 -->
    <div class="w-full lg:max-w-[80vw] text-center mx-auto">
      <p class="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </p>
    </div>
    <!-- List image -->
    <div class="flex justify-between px-4 md:px-8 py-8 space-x-8">
      <img
          v-for="(image, index) in imageList"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="max-w-[300px] h-auto"
          :class="image.type === 'video' ? 'w-[40vw]' : ''"
      />
    </div>
    <!-- Kenapa harus kami -->
    <div class="p-4 md:p-8 mb-12">
      <div class="text-2xl font-semibold gradient-brown w-fit">
        Kenapa Harus Kami ?
      </div>
      <div class="w-full grid grid-cols-3 grid-row-2 gap-6">
        <div v-for="(why, index) in whyList" :key="index">
          <div class="text-4xl gradient-brown font-bold w-fit">
            {{ why.id }}
          </div>
          <div class="text-base">
            <p>{{ why.title }}</p>
            <p>{{ why.description }}</p>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup lang="ts">
import type {ImageItem, WhyList} from "~/types/global.type";

const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const imageList: ImageItem[] = [
  {
    src: baseUrl + "/_nuxt/assets/images/about-2.png",
    alt: "About us image 1",
    type: "image" as const,
  },
  {
    src: baseUrl + "/_nuxt/assets/images/about-3.png",
    alt: "About us image 2",
    type: "image" as const,
  },
  {
    src: baseUrl + "/_nuxt/assets/images/about-4.png",
    alt: "About us image 3",
    type: "image" as const,
  },
];

const whyList: WhyList[] = [
  {
    id: "01",
    title: "Aman",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    icon: "",
  },
  {
    id: "02",
    title: "Terpercaya",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    icon: "",
  },
  {
    id: "03",
    title: "Biji Berkualitas",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    icon: "",
  },
  {
    id: "04",
    title: "Layanan Prima",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    icon: "",
  },
  {
    id: "05",
    title: "Petani Lokal",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    icon: "",
  },
  {
    id: "06",
    title: "Mutu Tinggi",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    icon: "",
  },

]


</script>


<style scoped></style>
