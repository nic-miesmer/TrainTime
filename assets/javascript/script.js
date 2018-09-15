

$("#submit").on("click", function(event) {
 // Prevent form from submitting
 event.preventDefault();

 // Grabs user input
var trainName = $("#name-input").val().trim();
var trainDest = $("#dest-input").val().trim();
var trainTime = $("#time-input").val().trim();
//  var trainTime = format($("#time-input").val().trim(), "MM/DD/YYYY")
var trainFreq = $("#freq-input").val().trim();

console.log(trainName);
console.log(trainDest);
console.log(trainTime);
console.log(trainFreq);


 // Creates local "temporary" object for holding employee data
 var newTrain = {
   name: trainName,
   role: trainDest,
   time: trainTime,
   freq: trainFreq
 };

 // Uploads employee data to the database
//  database.ref().push(newEmp);

 // Logs everything to console
 console.log(newTrain.name);
 console.log(newTrain.role);
 console.log(newTrain.time);
 console.log(newTrain.freq);

//  alert("Employee successfully added");

 // Clears all of the text-boxes
 $("#name-input").val("");
 $("#dest-input").val("");
 $("#time-input").val("");
 $("#freq-inputt").val("");
});

