const app = Vue.createApp({
    data() { return { issue: "" } },
    methods: {
        setIssue(ev) {
            this.issue = ev.target.value
        },
        resetIssue() {
            this.issue = "";
        }
    }
})
app.mount("#myapp")