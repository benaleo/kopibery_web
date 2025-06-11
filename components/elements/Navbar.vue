<template>
  <nav class="fixed top-0 left-0 right-0 bg-[#FCF9F8] z-20 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="flex gap-2 items-center">
            <img class="w-12" src="@/assets/images/logo.svg" alt="logo" />
            <div class="flex flex-col">
              <span class="text-xl font-bold text-gray-900 leading-none"
                >Kopibery</span
              >
              <span class="text-xs text-gray-500"
                >Solving your coffee business</span
              >
            </div>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-8">
          <NuxtLink
            to="/"
            class="text-orange-500 px-3 py-2 text-sm font-medium border-b-2 border-orange-500"
            active-class="text-orange-500"
          >
            Beranda
          </NuxtLink>
          <NuxtLink
            v-for="link in links"
            :key="link.name"
            :to="link.href"
            class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-orange-500"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Login/Signup Button -->
        <div class="flex items-center">
          <NuxtLink
            v-if="!isLoggedIn"
            to="/auth"
            class="ml-4 px-4 py-2 bg-[#6F4E37] text-white text-sm font-medium rounded-md hover:bg-[#5a3e2c] transition-colors"
          >
            Daftar / Masuk
          </NuxtLink>
          <!-- User Avatar and Name -->
          <span class="ml-4 px-4 py-2 text-sm font-medium text-gray-500">
            {{ userName }}
          </span>
        </div>
      </div>
    </div>

    <!-- Mobile menu button -->
    <div class="md:hidden flex items-center justify-end pr-4 pb-2">
      <button class="text-gray-500 hover:text-gray-900 focus:outline-none">
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const links = [
  { name: "Kopi", href: "/kopi" },
  { name: "Barista", href: "/barista" },
  { name: "Reparasi Alat", href: "/reparasi" },
  { name: "Tentang", href: "/tentang" },
  { name: "Kontak kami", href: "/kontak" },
];

const { $supabase } = useNuxtApp();
const router = useRouter();

const isLoggedIn = ref(false);
const userName = ref("");

onMounted(async () => {
  try {
    // Check for OAuth callback
    const { data, error } = await $supabase.auth.getSession();

    if (error) throw error;

    if (data.session) {
      isLoggedIn.value = true;
      const {
        data: { user },
      } = await $supabase.auth.getUser();
      console.log("User data:", user);
      userName.value = user?.user_metadata?.full_name || "";
      console.log("User name:", userName.value);
    } else {
      isLoggedIn.value = false;
    }
  } catch (error) {
    console.error("Error during session verification:", error);
    await router.replace("/auth/login");
  }
});
</script>

<style scoped>
nav {
  border-bottom: 1px solid #f59e0b;
}
</style>
