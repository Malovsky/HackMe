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
    window.location.replace("https://www.google.fr");
    alert("Google est ton ami ! :-)");
}