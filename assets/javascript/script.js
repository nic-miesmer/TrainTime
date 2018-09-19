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
var dataRef = firebase.database();



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


 // Creates local "temporary" object for holding train data
 var newTrain = {
   name: trainName,
   dest: trainDest,
   time: trainTime,
   freq: trainFreq
 };

 // Uploads Train data to the database
 dataRef.ref().push(newTrain);

 // Logs everything to console
 console.log(newTrain.name);
 console.log(newTrain.dest);
 console.log(newTrain.time);
 console.log(newTrain.freq);


 // Clears all of the text-boxes
 $("#name-input").val("");
 $("#dest-input").val("");
 $("#time-input").val("");
 $("#freq-input").val("");

});


dataRef.ref().on("child_added", function(childSnapshot) {
 // Logs everything to console
 console.log("child snapshot")
 console.log(childSnapshot.val().name);
 console.log(childSnapshot.val().dest);
 console.log(childSnapshot.val().time);
 console.log(childSnapshot.val().freq);


//create table tow, and add train values
 var tr = $("<tr>")
 var trainDataName = $("<td>").text(childSnapshot.val().name)
 var trainDataDest = $("<td>").text(childSnapshot.val().dest)
 var trainDataTime = $("<td>").text(childSnapshot.val().time)
 var trainDataFreq = $("<td>").text(childSnapshot.val().freq)


 var format = dateFns.format;
 var brokenOut = trainDataTime.text().split(':')
 var safeDate = dateFns.setHours(dateFns.setMinutes(new Date(), brokenOut[1]), brokenOut[0])



// Current Time
var currentTime = new Date();
console.log("CURRENT TIME: " + format(currentTime, "HH:mm"));

// Calculate Next Train






//Calculate minutes till next train.
      // Difference between the times
      var diffTime = dateFns.differenceInMinutes(currentTime, safeDate);
      console.log("DIFFERENCE IN TIME: " + diffTime);

      // Time apart (remainder)
      var tRemainder = diffTime % trainDataFreq;
      console.log(tRemainder);

        // Minute Until Train
        var tMinutesTillTrain = trainDataFreq - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
  
          // Next Train
          var nextTrain = dateFns.addMinutes(new Date(), tMinutesTillTrain);
          console.log("ARRIVAL TIME: " + format(nextTrain, "hh:mm"));
    


      // console.log('Train Data Time unformatted', trainDataTime.text())
      // console.log('Time Formatted Train Data', format(trainDataTime.text(), 'HH:mm'))
      // console.log('Date Value of', format(new Date().valueOf(), 'MM/DD/YYYY'))
      // First Time (pushed back 1 year to make sure it comes before current time)
      // var firstTimeConverted = format(dateFns.subYears(firstTime, 1), 'HH:mm');
      // console.log(firstTimeConverted);


      var trainTime = new Date();

      trainTime = format(safeDate, 'HH:mm');
      console.log("Train Time: " + trainTime)


 var trainArrival = $("<td>").text("needs func ")
 var trainMinutesAway = $("<td>").text("needs func")

 tr.append(trainDataName).append(trainDataDest).append(trainDataFreq).append(nextTrain).append(tRemainder)
 $("#table-body").append(tr)


});
