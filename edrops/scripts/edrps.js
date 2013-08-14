function mobileLogIn (username, password)
{
    var url ="http://www.diamondstardevelopment.com/api/MAccount/Login/";
    url +=username+"/"+password;
    $.get(url,
          function(data){
          if (data == "loggedin")
          {
          window.location = "home.html";
          }
          else if(data == "authenticated")
          {
          window.location = "today.html";
          }
          else if(data == "")
          alert("invalid LogIn");
          });
}

function mobileLogOut ()
{
    var url ="http://www.diamondstardevelopment.com/api/MAccount/Logout/logout";
    $.get(url,
          function(data){
          window.location = "index.html";
          });
}

function isLoggedIn()
{
    var url ="http://www.diamondstardevelopment.com/api/MAccount/Login/";
    url +="iowen/password1";
    $.get(url,
          function(data){
          if (data == "loggedin")
          {
          window.location = "home.html";
          
          }
          else if(data == "authenticated")
          {
          window.location = "today.html";
          }
          else
          window.location = "index.html";
          });
}