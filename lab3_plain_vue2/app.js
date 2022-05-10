var vue = new Vue({
    el: '#myapp',
    data() {
        return { plans: [], value: '' }
    },
    methods: {
        addPlan() {
            this.plans.push(this.value)
            this.value = ""
        }

    }
})


// Vue.createApp({
//     data(){ return {plans: [], value: ''} },
//     methods: {
//         addPlan() {
//             this.plans.push(this.value)
//         }
//     }
// }).mount('#myapp')