console.log('working')

$(document).ready(function() {
  $.ajax(ajax)
})
var ajax = {
        type: 'get',
        url: 'https://www.eventbriteapi.com/v3/events/search/',
        beforeSend: function (request) {
          request.setRequestHeader("Authorization", "Bearer 4UFJIOZKIUA72WMHQGQI")
        },
        dataType: 'json',
        success: function(data) {
          console.log('<----------------this is the data-------------->'),
          console.log(data),
          console.log('<----------------this is an event object\'s name-------------->'),
          console.log(data.events[0].name.text)
          console.log('<----------------this is an event object-------------->'),
          console.log(data.events[0])
        },
        error: function(err) {
          console.log(err);
        }
}



