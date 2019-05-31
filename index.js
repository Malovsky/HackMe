function Login() {
    var username = document.login.username.value;
	var password = document.login.password.value;
	if (username == "SuperAdmin" && password=="izipassword") {
        alert("Félicitations ! Tu as réussi à me hacker !\nLa prochaine fois ça ne sera pas aussi facile. :-)");
	} else { 
	    alert("Mauvais mot de passe !"); 
	}
}

function Help() {
    window.location.replace("http://lmgtfy.com/?q=Comment+hacker+un+super+site+internet+bien+s%C3%A9curis%C3%A9+!!!!");
    alert("Google est ton ami ! :-)");
}