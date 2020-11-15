// problemas con el fecth errores en consola: Access to fetch at 'http://3.15.92.223:5050/api/Login' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
//3.15.92.223:5050/api/Login:1 Failed to load resource: net::ERR_FAILED
//Uncaught (in promise) TypeError: Failed to fetch

var respuesta = document.querySelector('#respuesta') 
function traer () {
	fetch('http://3.15.92.223:5050/api/Login' , {method: 'get', mode: 'cors', headers: new Headers({
		'Content-Type': 'text/plain' });
	.then(res => res.json())
	.then(data =>{
		console.log(data.results)
	})
}



/*fetch('http://3.15.92.223:5050/api/Login')
	.then(function(responseObj) {
		console.log('status: ', responseObj.status);
	}); */

// Probando login autenticacion basica//
function login() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (user === "") {
        document.getElementById("user").style.border = "1px solid red";
        alert("Enter your user please");
        event.preventDefault();
        return false;
    }

    if (user === "dannisyu73@naver.com") {
        document.getElementById("user").style.border = "1px solid green";
    }else{
        document.getElementById("user").style.border = "1px solid red";
        alert("Wrong user");
        event.preventDefault();
        return false;
    }

    if (password === "") {
        document.getElementById("password").style.border = "1px solid red";
        alert("You must enter a password");
        event.preventDefault();
        return false;
    }

    if (password === "1234qwas") {
        document.getElementById("password").style.border = "1px solid green";
    }else{
        document.getElementById("password").style.border = "1px solid red";
        alert("Wrong password");
        event.preventDefault();
        return false;
    }

}


    