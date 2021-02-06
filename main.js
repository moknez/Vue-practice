var app = new Vue ({
    el: '#app',
    data: {
        message: 'hello'
    }
})



/* declarative rendering */
var app2 = new Vue ({
    el: '#app-2',
    data: {
        message: "You loaded this page " + new Date().toLocaleString()
    }
})



/*loops */
var app3 = new Vue ({
    el: '#app-3',
    data: {
        seen: true
    }
})




/*array */
var app4 = new Vue ({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Java script' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})
/* try in console:  app4.todos.push({text: 'New item'}) */




/*handling user input */
var app5 = new Vue ({
    el: '#app-5',
    data: {
        message: 'Hello Vue'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})




/*input  */
var app6 = new Vue ({
    el: "#app-6",
    data: {
        message: "Hello Vue"
    }
})





/*Components */
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})


var app7 = new Vue ({
    el: '#app-7',
    data: {
        groceryList: [
            { id:0, text: 'Vgetables' },
            { id:0, text: 'Cheese' },
            { id:0, text: 'Other' }
        ]
    }
})