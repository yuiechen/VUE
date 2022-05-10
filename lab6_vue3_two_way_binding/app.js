const app = Vue.createApp({
    data() {
        return {
            issue: "",
            counter: 0
        }
    },
    methods: {
        outputIssue() {
            console.log(`output issue is called:${this.issue}`)
            if (this.issue === "") {
                return ""
            }
            return `[!!!]${this.issue}`
        },
        resetIssue() {
            this.issue = "";
        },
        increase() {
            this.counter += 1;
        }
    }
})
app.mount("#myapp")