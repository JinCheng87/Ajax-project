$( document ).ready(function() {
  $(function(){
    $('#submitButton').click(function(e){
      if($('#password1').val() !== $('#password2').val()){
      e.preventDefault();
        $("#status").text("Password confirmation doesn't match Password");
        return;
      }
      $(this).attr('disable','disable');
      $(this).html("Submitting");
      $.ajax({
        async: true,
        type: 'POST',
        url: 'http://putsreq.com/ma0BuPW6a9wY2RLA7iIy',
        data: $('#register-form').serialize(),
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
          return;
        }
      })
    })
  })




})
