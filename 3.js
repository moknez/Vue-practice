const assignment = Vue.createApp({
    data() {
        return {
            name: 'Moki',
            age: 44,
            imageUrl: 'https://picsum.photos/200/300'
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        }
    }
})
assignment.mount('#assignment');