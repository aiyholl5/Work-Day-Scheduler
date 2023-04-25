// will not load unless document is ready. Making sure DOM is ready for JS
$(function () {
  // Instructs engine to load the HTML and CSS before running the JS
  $(document).ready(function () {

   
    $(".saveBtn").on("click", function () {

      // Getting values from JQuery
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save in local storage
      localStorage.setItem(time, text);
    })


  //past, present, future classes for time blocks
  function currentHour() {
    // Current Hour
    var updateTime = dayjs().hour();

    console.log(updateTime);
  
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1] * -1);
  
      console.log(blockHour);

      // checking time and adding classes
      if (blockHour < updateTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === updateTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    })
  }

  // save in local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // TIME AND DATE //

  // using query selectors to display current date and time
  let dateNow = $("#currentDay");
  let currentDate = dayjs().format("dddd, MMMM D, YYYY");
  let currentTime = dayjs().format("h:mm:ssA");

  // Diplaying current time with day.js
  dateNow.text(currentDate);
  let timeNow = $("<p>");
  timeNow.text(currentTime);
  $("header").children().eq(2).append(timeNow);

  // sets the time continuously
  function timeUpdate() {
    timeNow.text(dayjs().format("h:mm:ssA"));
  }
  setInterval(timeUpdate, 1000);

  // Sets time blocks for whatever time it is
  currentHour();
  });
});