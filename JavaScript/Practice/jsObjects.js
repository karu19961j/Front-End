// var ageGroup = {
//   30: "age",
//   100: "veryOld"
// }
// console.log(ageGroup['30'])

//Reference Data Type and Primitive Data Types:

// The primitive data type String is stored as a value​
// var person = "Karan"
// var anotherPerson = person
// person = "Neha"
//
// console.log(anotherPerson)
// console.log(person)

//save as Reference
// var person = {
//   name: "Kobe"
// }
// var anotherPerson = person
// person.name = "Bryant"
// console.log(anotherPerson.name)
// console.log(person.name)

//Constructor Pattern for Creating Objects
// function Fruit(theColor, theSweetness, theFruitName, theNativeToLand){
//   this.color = theColor
//   this.Sweetness = theSweetness
//   this.frtuitName = theFruitName
//   this.nativeToLand = theNativeToLand
//
//   this.showName = function(){
//     console.log("This is a " + this.frtuitName)
//   }
//
//   this.nativeTo = function(){
//     this.nativeToLand.forEach(function (eachCountry){
//       console.log("Grown in:" + eachCountry)
//     })
//   }
// }
//
// var mangoFruit = new Fruit("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"])
// mangoFruit.showName()
// mangoFruit.nativeTo()
//
// var pineappleFruit = new Fruit("Brown", 5, "Pineapple", ["United States"])
// pineappleFruit.showName()

//Prototype Pattern for Creating Objects
function Fruit(){

}
Fruit.prototype.color = "Yellow"
Fruit.prototype.sweetness = 7
Fruit.prototype.frtuitName = "Generic Fruit"
Fruit.prototype.nativeToLand = "USA"

Fruit.prototype.showName = function(){
  console.log("This is a " + this.frtuitName)
}

Fruit.prototype.nativeTo = function(){
  console.log("Grown in:" + this.nativeToLand)
}


var mangoFruit = new Fruit()
mangoFruit.showName()
mangoFruit.nativeTo()
