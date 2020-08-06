function showLogin() {
  $('#login-page').show()
  $('#main-page').hide()
}

function showPhotos() {
  $('#login-page').hide()
  $('#main-page').show()
}

function login(event){
  event.preventDefault();
  const email = $('#email').val()
  const password = $('#password').val()

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/users/login"
    data:({
      email, password
    })
  })
  .done(response=>{
    console.log(response)
    localStorage.setItem('access_token', response.access_token)
  })
  .fail(xhr=>{
    $.('#email').val('')
    $.('#password').val('')
  })
  .always(response=>{
    $.('#email').val('')
    $.('#password').val('')
  })
}

function logout(){
  
}

function fetchPhotos(){
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/photos",
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
  .done()
  .fail()
  .always()
}

$(document).ready(function(){
  showLogin()
  $('#loginForm').on('submit',login)
})