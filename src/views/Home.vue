<script setup>

import AudioPlayer from '@Components/AudioPlayer.vue'
import VideoPlayer from '@Components/VideoPlayer.vue'

import { useUserStore } from '@/Store/UserStore.js'

const userStore = useUserStore()
</script>

<template>
  <section>
    <h2 class="text-center text-lg font-medium">Lesson 1.1 Radiometer</h2>
    <VideoPlayer :src="'https://s3.amazonaws.com/s3-static.iwqst.com/assets/media/iqwstv3/sample-video.mp4'" />
    <AudioPlayer :src="'https://s3.amazonaws.com/s3-static.iwqst.com/assets/media/iqwstv3/sample-audio-ls1-activity-video-1.mp3'" v-if="userStore.getEnglishAudioDescriptions" />
  </section>
</template>
