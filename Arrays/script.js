// WRITE YOUR CODE HERE
var arr1 = ["Anuja", "janu", "Manu", "Nik", "Mumma"];

console.log("Eelements in array" + " " + arr1);

console.log("Length os array is " + " " + arr1.length);


for (var i = 0; i < arr1.length; i++) {
    console.log("Welcome to the class" + " " + arr1[i]);
}

arr1[0] = "Tinu";

console.log("Eelements in array" + " " + arr1);

if (arr1[0] == "Tinu") {
    console.log("REPLACED_NAME" + " " + arr1[0]);
}