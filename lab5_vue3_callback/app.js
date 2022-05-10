const app = Vue.createApp({
    data() {
        return {
            counter1: 0,
            todo: '',
            urgent: '',
            committedUrgent: '',
            counter2: 888
        }
    },
    methods: {
        increase2_4(step) {
            this.counter2 += step
        },
        decrease2_4(step) { this.counter2 -= step },
        setUrgent(ev) {
            this.urgent = ev.target.value
        },
        commitUrgent() {
            this.committedUrgent = this.urgent
        },
        submitForm(ev) {
            ev.preventDefault()
            alert('已經提交了~~~')
        },
        submitForm2() {
            alert('還是提交了321')
        },
        setToDo(event, message) {
            this.todo = `${message} ${event.target.value}`
        },
        increase1() {
            this.counter1 += 1;
        },
        decrease1() {
            this.counter1 -= 1;
        },
        increase2(step) {
            this.counter1 += step;
        },
        decrease2(step) {
            this.counter1 -= step;
        }
    }
})
app.mount("#app1")