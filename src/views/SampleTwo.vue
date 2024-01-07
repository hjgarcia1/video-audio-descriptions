<script setup>

import AudioPlayer from '@Components/AudioPlayer.vue'
import VideoPlayer from '@Components/VideoPlayer.vue'

import { useUserStore } from '@/Store/UserStore.js'

const userStore = useUserStore()
</script>

<template>
  <section>
    <h2 class="text-center text-lg font-medium">Lesson 5.1 Racquet Ball</h2>
    <VideoPlayer :src="'https://s3.amazonaws.com/s3-static.iwqst.com/assets/media/iqwstv3/remote-lesson-videos/ps2/ps2-4-slow-motion-racquet-ball-drop.mp4'" />
    <AudioPlayer :src="'https://s3.amazonaws.com/s3-static.iwqst.com/assets/media/iqwstv3/sample-audio-2.mp3'" v-if="userStore.getEnglishAudioDescriptions" />
  </section>
</template>
