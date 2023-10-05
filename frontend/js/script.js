const { createApp } = Vue;

createApp({
    data() {
        return {
            disks: [],
        };
    },

    mounted() {
        axios
            .get("http://localhost/esercizi%20boolean/php-dischi-json/backend/data/disk-store.json")
            .then((response) => {
                this.disks = response.data;
            });
    },
}).mount("#app");