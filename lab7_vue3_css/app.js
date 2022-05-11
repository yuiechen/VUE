const app = Vue.createApp({
    data() {
        return {
            div1Selected: false,
            div2Selected: false,
            div3Selected: false
        }
    },
    methods: {
        divSelected(id) {
            console.log(`id=${id}被選取了!`)
            if (id === 1) {
                this.div1Selected = true
            } else if (id === 2) {
                this.div2Selected = true
            } else if (id === 3) {
                this.div3Selected = true
            }
        }
    }
})
app.mount("#myapp")