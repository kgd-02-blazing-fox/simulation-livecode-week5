function showLogin() {
    $("login-page").show()
    $("main-page").hide()
}
function showMain() {
    $("login-page").hide()
    $("main-page").show()
}


$(document).ready(()=>{
    $("#submit-login").on("click",(event)=>{
        event.preventDefault()
        $.ajax({
            method:"POST",
            url:"http://localhost:3000/login",
            data:{
                email,
                password
            }
        })
    })
    .done(result=>{console.log(result),showMain()})
    .fail((xhr,status,error)=>{})
    .always(result=>{})


})


// /div>
//         <div class="center">
//             <h1 style="margin-bottom: 3rem;" class="welcome">Welcome To My Gallery</h1>
//             <form>
//                 <div class="uk-margin">
//                     <div class="uk-inline">
//                         <span class="uk-form-icon" uk-icon="icon: user"></span>
//                         <input id="email" class="uk-input" type="email" placeholder="email here">
//                     </div>
//                 </div>
            
//                 <div class="uk-margin">
//                     <div class="uk-inline">
//                         <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
//                         <input id="password" class="uk-input" type="password" placeholder="password here">
//                     </div>
//                 </div>
//                 <button type="submit" class="login-btn uk-button uk-button-primary">Login</button>