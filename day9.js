
var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); 


var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log(colors); 
OUTPUT: [ 'Red', 'Green', 'Blue', 'Yellow' ]
3. Iterate Through an Array
var animals = ["Dog", "Cat", "Elephant"];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}


4. Access Object Properties
var person = { name: "John", age: 30, city: "New York" };
console.log(person.name); 


var car = { make: "Toyota", model: "Camry" };
car.year = 2022;
console.log(car); 
OUTPUT: { make: 'Toyota', model: 'Camry', year: 2022 }

var numbers = [1, 2, 3, 4, 5];
if (numbers.length > 3) {
  console.log("Array has more than 3 elements.");
}



var colors = ["Red", "black", "Blue"];
if (“Green” of colors) {
  console.log("Green is in the array.");
}else{
console.log(“no values prsnt in array”)
}

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr2.concat(arr1);
console.log(combined);



var student = { name: "Alice", age: 22 };
if ("age" in student) {
  console.log("Age is a property of student.");
}

var scores = [01, 10, 40, 30];
scores.sort();
console.log(scores); 
OUTPUT: [ 1, 10, 30, 40 ]


var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
Console.log([5][0])



var user = {
  name: "Mark",
  address: {
    city: "Los Angeles",
    zip: 90001
  }
 
};
console.log(user.address.city)





var book = { title: "1984", author: "George Orwell", year: 1949 };
for (var key in book) {
  console.log(key + ": " + book[key]);
}


var numbers = [5, 10, 15, 20];
var filtered = numbers.filter(function(number) {
  return number > 10;
});
console.log(filtered);



var fruits = ["Apple", "Banana", "Cherry"];
var lastFruit = fruits.pop();
console.log(fruits); 
console.log(lastFruit);



var car = { make: "Toyota", model: "Camry", year: 2022 };
var carValues = Object.values(car);
console.log(carValues); 


var letters = ["A", "B", "C"];
var string = letters.join("-");
console.log(string);
OUTPUT: A-B-C



