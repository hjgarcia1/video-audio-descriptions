import { defineStore } from 'pinia'

export const useUserStore = defineStore("UserStore", {
    state: () => ({
        hasAudioDescription: 0,
    }),

    getters: {
        getEnglishAudioDescriptions() {
            return this.hasAudioDescription === 1;
        },
    },
    actions: {
        setAudioDescriptions() {
            if (localStorage.getItem("hasAudioDescription") == null) {
                this.saveAudioDescription();
            } else {
                this.hasAudioDescription = parseInt(localStorage.getItem("hasAudioDescription"));
            }
        },
        showAudioDescriptions() {
            this.hasAudioDescription = 1;

            this.saveAudioDescription();
        },
        hideAudioDescriptions() {
            this.hasAudioDescription = 0;

            this.saveAudioDescription();
        },
        //save audio description to local storage
        saveAudioDescription() {
            localStorage.setItem("hasAudioDescription", this.hasAudioDescription);
        },
        
    },
});