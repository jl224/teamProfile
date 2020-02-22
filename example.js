// Problem #1: How to loop through daily orders and add totals 
// You work for a shipping company and your manager receives orders from various customers every day (some existing, some new). Your manager wishes to establish a process to automate tracking the orders received by the company. 

// You can assume the daily data arrives as a list/array/vector of strings and follows this exact format (note that customers may place separate orders in a single day): day_i = [“Bob:100”, “Alice:100”, “Celia:110”, “Bob:20”, etc...] Write a script that, when given the daily data, will keep track of the total purchase amount for each customer. You can assume that the data “day_i” already exists in memory (i.e. you don’t need to read it from a text file or database). Your output should ideally look like: 

// Customer Total Purchase: [ Alice 100, Bob 120, Celia 110]
// High Level Steps
// 1.1	Create the variable to represent the day and store the array data
// 1.2	Assign data to array for day 1
// 1.3	Loop through the arrays to get to the data
// 1.4	Add orders together at the end of the day

//CODING
//Create the variable to represent the day and store the array data
// var i = [day]
// var day_i = [daily array]

// //Assigning data to array for day 1
// day_1 = [ Bob:100, Alice:100, Celia:110, Bob:20, Celia:90]

// //Loop through the arrays to get the data
// for ( i=0; i < day_i.length; i++) {
// }
// //Add orders together at end of day
// [Bob: 120
// Alice: 100
// Celia:200]

var day = ['Bob:100', 'Alice:100', 'Celia:110', 'Bob:20', 'Alice:45', 'Bob:200']

// loop split name quantity store  name  quantity   (object)

// when finish the first loop  /// loop the object console log every key u- value

var obj = {}


obj.Bob
var name = "Bob"
obj[name]
for (i = 0; i < day.length; i++) {

    var elem = day[i].split(":")
    console.log(elem)
    // console.log(elem)
    var name = elem[0]
    var q = parseInt(elem[1])
    //console.log(name, q)
    console.log(obj)
    if (obj[name]) {
        console.log(name, obj[name])
        obj[name] = obj[name] + q
    }
    else {
        obj[name] = q
    }
    // console.log(obj)


}
console.log("END:")
for (key in obj) {
    console.log(`${key}:${obj[key]}`)
}



var array = []

for (var i = 0; i < day.length; i++) {
    var index = array.indexOf(day[i].split(":")[0])
    if (index === -1) {

        var elem = day[i].split(":")

        var name = elem[0]
        var q = parseInt(elem[1])
        array.push(name, q)
    }
    else {
        array[index + 1] = array[index + 1] + q


    }
    // console.log(array)

}
for (var i = 0; i < array.length / 2; i++) {
    console.log(array[i] + ": " + array[i + 1])
}