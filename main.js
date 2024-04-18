// Get the current time in Nepal
var now = new Date();
var offset = 5 * 60 * 60 * 1000; // Nepal is 5 hours and 45 minutes ahead of UTC
var nepalTime = new Date(now.getTime() + offset);
// Subtract 5 hours from the Nepal time
nepalTime.setHours(nepalTime.getHours() - 5);
// Display the current time in Nepal - 5 hours
document.getElementById("time").innerHTML = nepalTime.toLocaleTimeString();
// Calculate the number of 15-minute intervals since 12am
var quarterHours = Math.floor(
  (nepalTime.getHours() * 60 + nepalTime.getMinutes()) / 15
);
// Calculate the percentage covered in the current 15-minute interval
var currentMinute = nepalTime.getMinutes();
var percentage = (currentMinute * 100) / 15;
// Display the number of 15-minute intervals since 12am
document.getElementById(
  "quarter-hours"
).innerHTML = `${quarterHours} / 96 Quartem passed.`;
// Update the time every second
setInterval(function () {
  nepalTime = new Date(now.getTime() + offset);
  nepalTime.setHours(nepalTime.getHours() - 5);
  now = new Date(); // Use now for updating the time
  // Calculate the number of 15-minute intervals since 12am
  quarterHours = Math.floor(
    (nepalTime.getHours() * 60 + nepalTime.getMinutes()) / 15
  );
  // Calculate the percentage covered in the current 15-minute interval
  currentMinute = nepalTime.getMinutes();
  percentage = (currentMinute * 100) / 15;
  // Display the current time in Nepal - 5 hours
  document.getElementById("time").innerHTML = nepalTime.toLocaleTimeString();
  // Display the number of 15-minute intervals since 12am
  document.getElementById(
    "quarter-hours"
  ).innerHTML = `${quarterHours} / 96 Quartem passed.`;
}, 1000);
