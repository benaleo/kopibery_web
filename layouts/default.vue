<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <Footer/>
    <CTAWhatsapp/>
  </div>
</template>

<script setup>
import Footer from '~/components/elements/Footer.vue';
import Navbar from '~/components/elements/Navbar.vue';
import CTAWhatsapp from '~/components/elements/CTAWhatsapp.vue';
</script>
