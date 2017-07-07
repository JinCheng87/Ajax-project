$( document ).ready(function() {
  $(function(){
    $('#submitButton').submit(function(e){
      e.preventDefault();
      $(this).attr('disable','disable');
      $(this).html("Submitting");
      console.log($('#password1').vaule())
      $.ajax({
        async: true,
        type: 'POST',
        url: 'http://putsreq.com/tkGQDRxoKydGfEKQVuUf',
        data: $('#firstName').serialize(),
        dataType: 'text',
        crossDomain: true,
        complete: function(){
          $('#submitButton').removeAttr('disable');
        },
        error: function(request, errorType, errorMessage){
          $("#status").text("Failed")
        },
        success: function(response){
          $("#status").text("Successed");
          $('#submitButton').html("Submit")
        }
      })
    })
  })




})
