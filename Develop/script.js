// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    // Listener for the save button
    $('.saveBtn').on('click', function () {
      // Get the description value from the associated textarea
      const description = $(this).siblings('.description').val();
      // Get the hour value from the parent time-block
      const hour = $(this).parent().attr('data-hour');
      // Use the hour as a key to save the description in local storage
      localStorage.setItem(`hour-${hour}`, description);
    });
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $('.time-block').each(function () {
      const hour = $(this).attr('data-hour');
      const description = localStorage.getItem(`hour-${hour}`);
      if (description) {
        $(this).find('.description').val(description);
      }
    });
  
   
  
    // Get the current hour using dayjs
    const currentHour = dayjs().hour();
    // Loop through each time block
    $('.time-block').each(function () {
      const timeBlockHour = parseInt($(this).attr('data-hour'));
      if (timeBlockHour < currentHour) {
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  
    // TODO: Add code to display the current date in the header of the page.
    const currentDayElement = $('#currentDay');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    currentDayElement.text(currentDate);
  });
  