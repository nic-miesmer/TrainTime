// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4SFyU0iSKGUuTzMq48ZDZ9sQXm1XAOOI",
  authDomain: "trains-aa3f2.firebaseapp.com",
  databaseURL: "https://trains-aa3f2.firebaseio.com",
  projectId: "trains-aa3f2",
  storageBucket: "trains-aa3f2.appspot.com",
  messagingSenderId: "847478198978"
};
firebase.initializeApp(config);
var database = firebase.database();

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
   dest: trainDest,
   time: trainTime,
   freq: trainFreq
 };

 // Uploads employee data to the database
 database.ref().push(newTrain);

 // Logs everything to console
 console.log(newTrain.name);
 console.log(newTrain.dest);
 console.log(newTrain.time);
 console.log(newTrain.freq);

//  alert("Employee successfully added");

 // Clears all of the text-boxes
 $("#name-input").val("");
 $("#dest-input").val("");
 $("#time-input").val("");
 $("#freq-input").val("");



//create table tow, and add train values
 var tr = $("<tr>")
 var trainDataName = $("<td>").text(newTrain.name)
 var trainDataDest = $("<td>").text(newTrain.dest)
 var trainDataTime = $("<td>").text(newTrain.time)

 var trainArrival = $("<td>").text("needs func ")
 var trainMinutesAway = $("<td>").text("needs func")

 tr.append(trainDataName).append(trainDataDest).append(trainDataTime).append(trainArrival).append(trainMinutesAway)
 $("#table-body").append(tr)
});



