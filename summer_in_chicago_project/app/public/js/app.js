

arr = []


//variable to store data from ajax
var Data;
//ajax request to load results from eventbrite api
$('.search').on("click", function(event) {
  event.preventDefault(),
  $.ajax({
    type: 'get',
    // async: false,
    url: 'https://www.eventbriteapi.com/v3/events/search/?venue.city=chicago&price=0&q=' + $('.searchinput').val(),
    beforeSend: function (request) {
      request.setRequestHeader("Authorization", "Bearer 4UFJIOZKIUA72WMHQGQI")
    },
    dataType: 'json',
    success: function(data) {
      Data = data;


      console.log(data)





      




      for (var i = 0; i < data.events.length; i++) {
        console.log(data.events[i], 'this is data.events[i]')
        var myOBj = data.events[i].name;
        $('.results').append('<li value="' + i + '"><a id="event' + i + '"href="#">' + data.events[i].name.text + '</a></li>').on('click', 'a', function(){
          var myData = grabData()
        
          var number = $(this) 
          console.log(number.context.parentNode.value)
         
          console.log(myData.events[number.context.parentNode.value])
          
    
        })
      }
      
    },
    error: function(err) {
      console.log(err);
    }
  });
  // console.log(data.events[0])
});

$('someElement').click(

  grabData()

  )
  
function grabData(){
  return Data;
}









