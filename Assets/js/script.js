var headerEl = $('header');
var saveButton = $('.saveBtn'); 
var hour = $('div [id^="hour"]');




headerEl.css('text-align', 'center');
headerEl.css('background-color', 'tan');


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  saveButton.on('click', function() {
    var TextArea = $(this).parent().children(1).eq(1).val();
    localStorage.setItem($(this).parent().attr('id'), (TextArea));
    //console.log($(this).parent().children(1).eq(1));
});

  $(document).ready(function() {
    $("div").each(function(index) {
      if (index != 0) {
        //console.log($(this));
        //localStorage.getItem($(this).attr('id'));
        //console.log(localStorage.getItem($(this).attr('id')));
        //console.log($(this).children().eq(1));
        var text = localStorage.getItem($(this).attr('id'));
        $(this).children().eq(1).val(text);
        
        

        let id = $(this).attr('id');
        if (typeof(id) != 'undefined') {

        let hourNumber = parseInt(id.substring(5));
        //console.log(hourNumber);

        var today = dayjs();
        $('#currentDay').text(today.format('dddd, MMMM D'));

        var hour = parseInt(today.format('H'));
        console.log(today.format('H'));
        console.log(hour);
        console.log(hourNumber);
        console.log(hourNumber > hour)


        if (hourNumber > hour) {
          ($(this).children().eq(1)).addClass('future')
          console.log(hourNumber);
          console.log(hour);
          console.log($(this))
        } else if (hourNumber < hour) {
          ($(this).children().eq(1)).addClass('past')
        } else if (hourNumber == hour) {
          ($(this).children().eq(1)).addClass('present')
        }



        };

      

     


      }

    



      

      //console.log(hourNumber);
      

        
       
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        //document.getElementsByClassName('.description').innerText = localStorage.getItem($(this).attr('id'));
    
        //document.get(attr('id'));
       /*
        console.log(" This " + $(this));
        console.log($(this).children())
        console.log(" doc " + document.getElementById('hour-9'));
*/

      
    });
    
  
  
  
  });


































    /*
    console.log(spTextArea);
    console.log($(this));
    console.log($(this).val());
    console.log(hour);
    console.log($(this).parent().children(1).eq(1));
    */
   
   
   
   
   
    //$((this)('.description'));
   
 
   
  
  




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





});
