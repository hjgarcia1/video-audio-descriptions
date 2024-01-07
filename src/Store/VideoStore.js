import { defineStore } from 'pinia'
import { useAudioStore } from '@/Store/AudioStore.js'
import { useUserStore } from '@/Store/UserStore.js'

export const useVideoStore = defineStore("VideoStore", {
    state: () => ({
        isPlaying: false,
        isSeeking: false,
    }),

    getters: {
        getCurrentVideoState() {
            return this.isPlaying
        },
    },
    actions: {
        playVideo() {
            this.isPlaying = true;

            if (useUserStore().getEnglishAudioDescriptions) {
                useAudioStore().playAudio();
            }
        },
        pauseVideo() {
            this.isPlaying = false;

            if (useUserStore().getEnglishAudioDescriptions) {
                useAudioStore().pauseAudio();
            }
        },
        seekingVideo() {
            this.isSeeking = true;

            if (useUserStore().getEnglishAudioDescriptions) {
                useAudioStore().seekAudio();
            }
        }
    },
});