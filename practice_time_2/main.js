let person = {
    name: "Pamir Açar",
    age: "16",
    country: "Turkey",
}

function makeSentence() {
    let sentence = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(sentence)
}

makeSentence()

let age = 15

if (age <= 6) {
    console.log("Free")
} else if (age < 18) {
    console.log("Child Discount")
} else if (age < 27) {
    console.log("Student Discount")
} else if (age < 67) {
    console.log("Full Price")
} else {
    console.log("Senior Citizen Discount")
}