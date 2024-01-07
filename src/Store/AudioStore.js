import { defineStore } from 'pinia'

export const useAudioStore = defineStore("AudioStore", {
    state: () => ({
        isPlaying: false,
        isSeekingAudio: false,
    }),

    getters: {
        shouldPlay() {
            return this.isPlaying
        },
    },
    actions: {
        playAudio() {
            this.isPlaying = true;
        },
        pauseAudio() {
            this.isPlaying = false;
        },
        seekAudio() {
            this.isSeekingAudio = true;
        }
    },
});