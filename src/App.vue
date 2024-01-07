<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/Store/UserStore.js'

const userStore = useUserStore()
onMounted(() => {
  userStore.setAudioDescriptions()
})
</script>

<template>

  <header>
    <h1
        class="mt-12 text-center text-4xl font-bold uppercase tracking-wide"
    >
      Video Player with Audio Descriptions
    </h1>
  </header>
  <nav class="container justify-center mx-auto flex divide-x divide-gray-400 items-center mt-8">
    <router-link class="text-blue-500 px-4 text-lg hover:underline" to="/">Sample One</router-link>
    <router-link class="text-blue-500 px-4 text-lg hover:underline" to="/sample-two">Sample Two</router-link>
  </nav>


  <main class="container mx-auto mt-12">
    <router-view/>
  </main>
</template>
