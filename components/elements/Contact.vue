<template>
  <section class="relative w-full mt-12 bg-[#E9D2CA] rounded-lg mb-16">
  <!-- Image Left -->
  <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
    <img src="@/assets/images/contact-left.png" alt="Contact" class="w-full h-auto max-h-[300px] rounded-2xl" />
  </div>

  <!-- Image Right -->
  <div class="absolute right-0 bottom-0">
    <img src="@/assets/images/contact-right.png" alt="Contact" class="w-full h-auto max-h-[200px] rounded-2xl" />
  </div>
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center px-4 py-8 gap-8">
        <div>
          <p class="title">Kontak Kami</p>
        </div>
        <div class="max-w-[900px]">
          <p class="text-base">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
          </p>
        </div>
        <div class="bg-white rounded-lg px-8 py-6">
          <div class="flex items-start gap-4 mb-4">
            <img src="@/assets/images/phone.svg" alt="Phone" class="w-4 h-4 mt-1" />
            <div class="flex flex-col">
              <p>Nomor Telepon</p>
              <p>08123456789</p>
            </div>
          </div>
          <div class="flex items-start gap-4 mb-4">
            <img src="@/assets/images/pin-location.svg" alt="Location" class="w-4 h-4 mt-1" />
            <div class="flex flex-col">
              <p>Alamat</p>
              <p>Jl. Jenderal Sudirman No. 1, Jakarta Selatan</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <img src="@/assets/images/gmail.svg" alt="Gmail" class="w-4 h-4 mt-1" />
            <div class="flex flex-col">
              <p>Email</p>
              <p>kontak@kopibery.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>
  
<script setup lang="ts">

</script>
