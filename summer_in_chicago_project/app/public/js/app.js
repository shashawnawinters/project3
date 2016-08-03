console.log('working')

$(document).ready(function() {
  $.ajax(ajax)
})
var ajax = {
        type: 'get',
        url: 'https://www.eventbriteapi.com/v3/events/search/?token=4UFJIOZKIUA72WMHQGQI',
        beforeSend: function (request) {
          request.setRequestHeader("Authorization", "Bearer 4UFJIOZKIUA72WMHQGQI")
        },
        dataType: 'json',
        success: function(data) {
          console.log(data);
        },
        error: function(err) {
          console.log(err);
        }
}



