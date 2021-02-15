const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course',
            courseGoalB: '<h2>Master the course</h2>',
            vueLink: 'https://vue.js.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');