console.log('working')
results = document.getElementById('results')

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
        $('#results').append('<li><a href="#">' + events[i].name.text + '</li></a>')
      }
      console.log('<----------------this is the data-------------->'),
      console.log(data),
      console.log('<----------------this is an event object\'s name-------------->'),
      console.log(data.events[0].name.text)
      console.log('<----------------this is an event object-------------->'),
      console.log(data.events[0]),
      $('body').append(data);
      $('#results').show();
    },
    error: function(err) {
      console.log(err);
    }
  });
})





