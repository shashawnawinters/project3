console.log('working')
results = document.getElementById('results')

//ajax request to load results from eventbrite api
$('#search').on("click", function(event) {
  event.preventDefault(),
  $.ajax({
    type: 'get',
    url: 'https://www.eventbriteapi.com/v3/events/search/',
    beforeSend: function (request) {
      request.setRequestHeader("Authorization", "Bearer 4UFJIOZKIUA72WMHQGQI")
    },
    dataType: 'json',
    success: function(data) {
      var events = data.events;
      for (var i = 0; i < events.length; i++) {
        $('#results').append('<li><a class="event-li" href="#">' + events[i].name.text + '</li></a>')
      }
      $('body').append(data);
      $('#results').show();
    },
    error: function(err) {
      console.log(err);
    }
  });
})

//when event is clicked, event information is appended
$('event-li').click(function() {
  $('#results-li').append('<li>')
})









