// Chapt#// ARRAYS


// Q1
// var studentnames=[ ];


// Q2
// let StringArray =["A","B","C","D"];


// Q3
// let NumberArray =[1,2,3,4];


// Q4
// let BoolenArray =[true,false];


// Q5
// let MixedArray = [1,0, "apple", true,false, { key: "value" }, null];


// Q6
// let qualification =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Phd"];

// document.write("<h1><h1/>Educational Qualifications in Pakistan:","\n",qualification);



// Q7
// let studentNames = ["Hamza", "Salman", "Zara"];

// let scores = [320, 230, 480]; 
// document.write("Student Scores & Percentages:");
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (scores[i] / 500) * 100;
//  document.write(studentNames[i] + ": Scored " + scores[i] + " out of 500, Percentage: " + percentage.toFixed(2) + "%");
// }



// Q8
// let colors = ["red", "blue", "green"];

// document.write("Initial Array:", colors);
// let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddAtBeginning);
// document.write("Array after adding color at the beginning:", colors);

// let colorToAddAtEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddAtEnd);
// document.write("Array after adding color at the end:", colors);

// colors.unshift("purple", "yellow");
// document.write("Array after adding two more colors at the beginning:", colors);

// colors.shift();
// document.write("Array after deleting the first color:", colors);

// colors.pop();
// document.write("Array after deleting the last color:", colors);

// let indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
// let colorToAddAtIndex = prompt("Enter the color name to add at the index:");
// colors.splice(indexToAddColor, 0, colorToAddAtIndex);
// document.write("Array after adding color at the desired position:", colors);

// let indexToDelete = parseInt(prompt("Enter the index from which to delete color(s):"));
// let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numberOfColorsToDelete);
// document.write("Array after deleting color(s) at the desired position:", colors);



// Q9
// var scores = [320, 230, 480, 120];
// scores.sort(function(a, b) {
//     return a - b;
// });
// document.write("Ordered scores of students: " + scores.join(", "));



// Q10
// var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// var selectedCities = [];
// selectedCities.push(cities[2], cities[3], cities[4]);
// document.write("Selected cities list: " + selectedCities.join(", "));



// Q11
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.write(singleString);



// Q12
// var fifoArray = [];
// fifoArray.push("value1");
// fifoArray.push("value2");
// fifoArray.push("value3");

// var firstValue = fifoArray.shift();
// document.write("First value: " + firstValue);

// var secondValue = fifoArray.shift(); 
// document.write("Second value: " + secondValue);

// var thirdValue = fifoArray.shift(); 
// document.write("Third value: " + thirdValue);


// Q13
// var devicesArray = [];
// devicesArray.push("keyboard");
// devicesArray.push("mouse");
// devicesArray.push("printer");
// devicesArray.push("monitor");
// document.write("Out: " + devicesArray.pop()); // monitor
// document.write("Out: " + devicesArray.pop()); // printer
// document.write("Out: " + devicesArray.pop()); // mouse
// document.write("Out: " + devicesArray.pop()); // keyboard



// Q14
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// var dropdownHTML = "<select id='manufacturersDropdown'>";

// for (var i = 0; i < manufacturers.length; i++) {
//     dropdownHTML += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
// }
// dropdownHTML += "</select>";

// document.write(dropdownHTML);



