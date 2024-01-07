<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'

import { useAudioStore } from '@/Store/AudioStore.js'
import { useVideoStore } from '@/Store/VideoStore.js'

const audioStore = useAudioStore()
const videoStore = useVideoStore()
const { isPlaying, isSeekingAudio } = storeToRefs(audioStore)

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

watch(isPlaying, () => {
    const audioDescription = document.getElementById('audioDescription')
    const videoPlayer = document.getElementById('videoPlayer')

    audioDescription.currentTime = videoPlayer.currentTime

    if (isPlaying.value) {
        audioDescription.play()
    } else {
        audioDescription.pause()
    }
})

watch(isSeekingAudio, () => {
    const audioDescription = document.getElementById('audioDescription')
    const videoPlayer = document.getElementById('videoPlayer')

    if (isSeekingAudio.value) {
        audioDescription.currentTime = videoPlayer.currentTime
    }
})

onMounted(() => {
  if(videoStore.isPlaying) {

    const audioDescription = document.getElementById('audioDescription')
    const videoPlayer = document.getElementById('videoPlayer')

    audioDescription.currentTime = videoPlayer.currentTime
    audioStore.isPlaying = true
    audioDescription.play()
  }
})
</script>

<template>
    <section class="container mx-auto mt-8">
        <audio id="audioDescription" class="mx-auto">
            <source :src="src" type="audio/mp3" />
            Your browser does not support the audio tag.
        </audio>
    </section>
</template>
