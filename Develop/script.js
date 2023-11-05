

  $(function () {
    
    // Listener for the save button
    $('.saveBtn').on('click', function () {
    
      const description = $(this).siblings('.description').val();
   
      const hour = $(this).parent().attr('data-hour');
    
      localStorage.setItem(`hour-${hour}`, description);
    });
  
    // input that was saved in localStorage and set
    // the values of the corresponding textarea elements. 
    $('.time-block').each(function () {
      const hour = $(this).attr('data-hour');
      const description = localStorage.getItem(`hour-${hour}`);
      if (description) {
        $(this).find('.description').val(description);
      }
    });
  
   
  
    // current hour using dayjs
    const currentHour = dayjs().hour();
    // Looped through each time block
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
  
    // current date in the header of the page.
    const currentDayElement = $('#currentDay');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    currentDayElement.text(currentDate);
  });
  