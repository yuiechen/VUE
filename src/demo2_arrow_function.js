function displayCourseName(name) {
    console.log(`course name=${name}`)
}
 
const displayCourseName2 = (name) => {
    console.log(`course name=${name}`)
}
const displayCourseName3 = name =>{
    console.log(`course name=${name}`)
}
const displayCourseName4 = name => console.log(`course name=${name}`)
const displayCourseName5 = ()=>{
    console.log(`course name="Java"`)
}
const earning = (attendee)=>{return attendee*8000}
const earning2 = attendee => attendee*8000
displayCourseName("VUE")
displayCourseName2("React")
displayCourseName3("Angular")
displayCourseName4("JS")
displayCourseName5()
console.log(`earning = ${earning}, earning2=${earning2}`)
