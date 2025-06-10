<template>
  <!-- WhatsApp Button -->
  <button
    class="fixed bottom-6 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] cursor-pointer text-white px-6 py-3 rounded-full font-medium flex items-center shadow-lg transition-colors"
    @click="handleClick"
  >
    <svg
      class="w-5 h-5 mr-2"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.498 14.382v-.003c-.301-.15-1.767-.867-2.04-.966-.274-.099-.473-.15-.673.149-.197.295-.771.961-.944 1.16-.174.196-.349.223-.645.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.133.295-.346.445-.52.149-.174.198-.295.298-.494.1-.198.05-.371-.025-.52-.075-.15-.672-1.616-.922-2.215-.24-.579-.487-.5-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.477 0 1.462 1.065 2.875 1.215 3.074.149.198 2.1 3.195 5.077 4.487.709.307 1.262.489 1.694.625.712.227 1.361.195 1.871.118.57-.085 1.758-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.273-.197-.574-.347m-5.447-7.952c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm-4 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"
        fill-rule="evenodd"
      ></path>
    </svg>
    Kirim pesan via Whatsapp
  </button>
</template>

<script setup lang="ts">
// Component logic goes here
const handleClick = () => {
  window.open('https://wa.me/628123456789', '_blank');
}
</script>
