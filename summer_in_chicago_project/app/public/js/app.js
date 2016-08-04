

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
        // console.log(data.events[i], 'this is data.events[i]')
        $('.results').append('<li value="' + i + '"><a id="event' + i + '"href="#">' + data.events[i].name.text + '</a></li>').on('click', 'a', function(){
          var myData = grabData()
        
          var number = $(this)
          var date = myData.events[number.context.parentNode.value].start.local.substr(0, 10).split('-').unshift("2016")
          console.log('-----------------DATE--------------------------')
          console.log(date) 
          // console.log(number.context.parentNode.value)
          console.log(myData.events[number.context.parentNode.value])
          console.log('-----------------OBJECT NAME--------------------------')
          console.log(myData.events[number.context.parentNode.value].name.text)
          console.log('-----------------OBJECT DESCRIPTION--------------------------')
          console.log(myData.events[number.context.parentNode.value].description.text)
          console.log('-----------------OBJECT IMAGE_URL--------------------------')
          console.log(myData.events[number.context.parentNode.value].logo.url)
          console.log('-----------------OBJECT DATE--------------------------')
          console.log(myData.events[number.context.parentNode.value].start.local)
          console.log('-----------------OBJECT TIME--------------------------')
          console.log(myData.events[number.context.parentNode.value].start.local)
          console.log('-----------------OBJECT CATEGORY--------------------------')
          console.log(myData.events[number.context.parentNode.value].logo.url)
    
        })
      }
      
    },
    error: function(err) {
      console.log(err);
    }
  });
  // console.log(data.events[0])
});

  
function grabData(){
  return Data;
}









