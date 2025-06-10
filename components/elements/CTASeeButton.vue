<template>
  <!-- CTA Button -->
    <button
      class="bg-old-brown hover:bg-[#6D4C41] text-white px-8 py-3 rounded-full text-base mb-12 transition-colors flex items-center"
      @click="navigateTo(props.route)"
    >
      {{ props.text }}
      <svg
        class="w-5 h-5 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
</template>

<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        default: 'Lihat produk kami'
    },
    route: {
        type: String,
        default: '/produk'
    }
})

</script>
