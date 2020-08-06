function showLogin() {
  $('#login-page').show()
  $('#main-page').hide()
}
function showHome() {
  $('#login-page').hide()
  $('#main-page').show()
}


$(document).ready(function () {
  if (!localStorage.getItem('access_token')) {
    showLogin()
  } else {
    showHome()
  }
  $('#login-form').on('submit', function (e) {
    e.preventDefault()
    const email = $('#email').val()
    const password = $('password').val()

    console.log(email, password)
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/login',
      data: {
        email,
        password
      }
    })
      .done((response) => {
        localStorage.setItem('access_token', response.access_token)
      })
      .fail((xhr, status, error) => {
        console.log('fail', xhr, status, error)
      })
      .always((response) => {
        console.log('always', response)
      })
  })
})