const app = Vue.createApp({
    data() {
        return {
            issue: "",
            counter: 0,
            outputIssue: "",
            issue2: "hello",
            issue3: "world"
        }
    },
    methods: {

        resetIssue() {
            this.issue = "";
        },
        increase() {
            this.counter += 1;
        }
    },
    watch: {
        issue(value, oldValue) {
            console.log("issue的值改變了, 需要更新")
            if (this.issue === "") {
                return ""
            }
            this.outputIssue = `[!!]從${oldValue}到${value}`
        },
        counter(value) {
            console.log("counter now change to:", value)
            if (value > 10) {
                this.counter = 0
                console.log("counter reset")
            }
        }
    },
    computed: {
        // outputIssue() {
        //     console.log(`output issue is called:${this.issue}`)
        //     if (this.issue === "") {
        //         return ""
        //     }
        //     let prefix = "!".repeat(this.counter)
        //     return `[${prefix}]${this.issue}`
        // },
    }
})
app.mount("#myapp")