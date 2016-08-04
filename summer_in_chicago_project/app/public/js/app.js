
results = document.getElementById('results');


//variable to store data from ajax
var data;
//ajax request to load results from eventbrite api
$('.search').on("click", function(event) {
  event.preventDefault(),
  $.ajax({
    type: 'get',
    async: false,
    url: 'https://www.eventbriteapi.com/v3/events/search/?venue.city=chicago&price=0&q=' + $('.searchinput').val(),
    beforeSend: function (request) {
      request.setRequestHeader("Authorization", "Bearer 4UFJIOZKIUA72WMHQGQI")
    },
    dataType: 'json',
    success: function(data) {
      window.data = data;
      console.log(data)












      // for (var i = 0; i < events.length; i++) {
      //   $('#results').append('<li><a class="event-li" href="#">' + events[i].name.text + '</li></a>')
      // }
      // var self = this;
      // $('.event-li').click(function() {
      //   console.log(this)
      // });
      // $('body').append(data);
      // $('#results').show();
    },
    error: function(err) {
      console.log(err);
    }
  });
  for (var i = 0; i < data.events.length; i++) {
        console.log(data.events[i].name.text)
      }
});










