

const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
        addCounter() {
          //  this.counter++ 
          this.counter = this.counter + 1;
        },
        addReduce() {
            this.counter = this.counter - 1;
            // this.counter--;
        }
    }
  });
  
  app.mount('#events');
  