const app = Vue.createApp({
    data: function () {
        return {
            primaryGoal1: "<em>創新</em>",
            primaryGoal2: "<em>客戶導向</em>",
            primaryGoal3: "<em>當責</em>",
            planLink: "https://www.trello.com"
        }
    },
    methods: {
        outputMessage: function () {
            const number1 = Math.random();
            if (number1 < 0.3) {
                return this.primaryGoal1;
            } else if (number1 < 0.6) {
                return this.primaryGoal2;
            } else {
                return this.primaryGoal3;
            }
        }
    }
})
app.mount("#my-planner")