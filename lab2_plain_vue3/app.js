Vue.createApp({
    data(){ return {plans: [], value: ''} },
    methods: {
        addPlan() {
            this.plans.push(this.value)
        }
    }
}).mount('#myapp')