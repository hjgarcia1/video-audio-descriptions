<script setup>
import { onMounted } from 'vue'

import { useUserStore } from '@/Store/UserStore.js'
import { useVideoStore } from '@/Store/VideoStore.js'

const userStore = useUserStore()
const videoStore = useVideoStore()

//props for the video player
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
})

const showAudioDescription = (event) => {
    if (event.target.checked) {
        userStore.showAudioDescriptions()
    } else {
        userStore.hideAudioDescriptions()
    }
}

onMounted(() => {
    const videoPlayer = document.getElementById('videoPlayer')

    videoPlayer.addEventListener('play', () => {
        videoStore.playVideo()
    })

    videoPlayer.addEventListener('pause', () => {
        videoStore.pauseVideo()
    })

    videoPlayer.addEventListener('seeking', () => {
        videoStore.seekingVideo()
    })
})
</script>

<template>
    <section class="container mx-auto mt-8">
        <div
            class="mx-auto w-fit rounded-md border border-gray-300 bg-gray-200 p-6 shadow-md"
        >
            <video width="800" id="videoPlayer" controls class="mx-auto">
                <source :src="src"  type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div class="mt-4 flex items-center gap-2">
                <input
                    id="audioDescriptions"
                    type="checkbox"
                    @change="showAudioDescription"
                    :checked="userStore.getEnglishAudioDescriptions"
                />
                <label for="audioDescriptions" class="text-sm"
                    >Play Audio Description</label
                >
            </div>
        </div>
    </section>
</template>
