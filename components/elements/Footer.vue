<template>
  <div class="md:relative w-full min-h-56 bg-black rounded-t-[80px]">
    <div
      class="max-w-[1360px] flex justify-between items-start mx-auto pt-12 px-12 overflow-hidden gap-8"
    >
      <!-- logo -->
      <div class="flex flex-col">
        <img
          class="w-16 filter invert"
          src="@/assets/images/logo.svg"
          alt="logo"
        />
        <span class="footer-menu text-2xl poppins-semibold">Kopibery</span>
        <span class="text-white text-sm poppins-thin"
          >Solving your coffee business</span
        >
      </div>
      <!-- menu -->
      <div class="flex items-start space-x-8 flex-wrap md:flex-nowrap">
        <NuxtLink
          to="/"
          class="footer-menu poppins-semibold"
          >Beranda</NuxtLink
        >
        <NuxtLink
          to="/kopi"
          class="footer-menu poppins-semibold"
          >Kopi</NuxtLink
        >
        <NuxtLink
          to="/barista"
          class="footer-menu poppins-semibold"
          >Barista</NuxtLink
        >
        <NuxtLink
          to="/reparasi"
          class="footer-menu poppins-semibold"
          >Reparasi Alat</NuxtLink
        >
        <NuxtLink
          to="/tentang"
          class="footer-menu poppins-semibold"
          >Tentang</NuxtLink
        >
        <NuxtLink
          to="/kontak"
          class="footer-menu poppins-semibold"
          >Kontak Kami</NuxtLink
        >
        <div class="flex flex-col gap-2">
          <span class="footer-menu poppins-semibold">Follow Social Media Kami</span>
          <div class="flex gap-2 justify-evenly">
            <img src="@/assets/images/instagram.svg" alt="instagram" class="w-6 h-6">
            <img src="@/assets/images/facebook.svg" alt="facebook" class="w-6 h-6">
            <img src="@/assets/images/youtube.svg" alt="youtube" class="w-6 h-6">
          </div>
        </div>
      </div>
    </div>
    <div class="relative mt-8 bottom-0 left-0 right-0 h-8 bg-[#473630]">
      <div class="flex items-center h-full text-white text-sm justify-center">
        Copyright © Kopibery 2025
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
