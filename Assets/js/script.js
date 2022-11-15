
var headerEl = $('header');
var saveButton = $('.saveBtn'); 
var hour = $('div [id^="hour"]');
// These are the global variables that will be called for the functions below. The hour variable is set so that any div that has an id attribute of 'hour' will be affected.

// Modified the css elements to get the header in the center of the page and give it a tan background.
headerEl.css('text-align', 'center');
headerEl.css('background-color', 'tan');

$(function () {
  
  // This function will save whatever text content is input to the text area. With the 'this' keyword, the text that is contained within the textarea for each individual button (i.e. the button for 10am will save text for the 10am block, and no others) is saved to
  // local storage, as well as the id for the div the text was contained in. As a result, whenever the page is refreshed, the text will be rendered onto the page in the text area that it was originally placed in. 
  saveButton.on('click', function() {
    var TextArea = $(this).parent().children(1).eq(1).val();
    localStorage.setItem($(this).parent().attr('id'), (TextArea));
    //console.log($(this).parent().children(1).eq(1));
});

  // This function tells the code to execute everything within it after the DOM is ready.
  $(document).ready(function() {
   
    // This function is used to pull any saved inputs from local storage. Using the 'this' keyword will apply the text to the section on the page it accompanies, which is determined by the key value from local storage. The key values are the 'id' attribute for the divs.
    $("div").each(function(index) {
      if (index != 0) {
        //console.log($(this));
        //localStorage.getItem($(this).attr('id'));
        //console.log(localStorage.getItem($(this).attr('id')));
        //console.log($(this).children().eq(1));
        var text = localStorage.getItem($(this).attr('id'));
        $(this).children().eq(1).val(text);
        
        // Links the variable to the 'id' elements. 
        let id = $(this).attr('id');

        // This if statement is meant for 'id' elements that have a value of 'undefined.'
        if (typeof(id) != 'undefined') {
        
        // This variable is set to take the character in postion 5 of the 'id' element and convert that character into a number.
        let hourNumber = parseInt(id.substring(5));
        //console.log(hourNumber);

        // Sets the variable to dayjs, which validates the date and time.
        var today = dayjs();
        
        // Sets the part of the page that has an id of 'currentDay' (which is in the header) to display the day, month, and the day number.
        $('#currentDay').text(today.format('dddd, MMMM D'));

        // Sets the variable to the hour of the day (24 hour clock) and converts it to a number.
        var hour = parseInt(today.format('H'));
        //console.log(today.format('H'));
        //console.log(hour);
        //console.log(hourNumber);
        //console.log(hourNumber > hour)

        // This if statement takes the hour number of the divs and compares it to the actual hour of the day (this is the reason for converting them to numbers). If the hour number of the div is greater than the actual hour, the section will be given a green background (from the 'future' css selector),
        // a gray background if the hour number is less than the actual hour ('past' css selector), or a red background if the two variables are equal ('present' css selector).
        if (hourNumber > hour) {
          ($(this).children().eq(1)).addClass('future')
          //console.log(hourNumber);
          //console.log(hour);
          //console.log($(this))
        } else if (hourNumber < hour) {
          ($(this).children().eq(1)).addClass('past')
        } else if (hourNumber == hour) {
          ($(this).children().eq(1)).addClass('present')
        }
        };
      }    
    }); 
  });


































   
   
   
   
    





});
