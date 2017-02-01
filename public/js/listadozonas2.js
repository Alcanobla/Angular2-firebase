 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBp4tSa4lmbp4j6bBkn-SNcSXXNWGiTtrg",
    authDomain: "ocmicat-b2fb7.firebaseapp.com",
    databaseURL: "https://ocmicat-b2fb7.firebaseio.com",
    storageBucket: "ocmicat-b2fb7.appspot.com",
    messagingSenderId: "955943885437"
  };
  firebase.initializeApp(config);

/*	var auth = firebase.auth();
	auth.signInAnonymously().then(function(user) {
					console.log('Anonymous Sign In Success', user);       
				}).catch(function(error) {
					console.error('Anonymous Sign In Error', error);
				});
	var user2=auth.currentUser;
	console.log(user2);
*/
	var db = firebase.database().ref();
	var referencia=db.child("zonas_valor");

	referencia.on("child_added", function(registros) {
		//recuperamos una captura del objeto leido
		var r = registros.val();
			console.log("AA_VIGENTE: " + r.AA_VIGENTE);
			console.log("ZONA_VALOR: " + r.ZONA_VALOR);
			//Agregamos los datos a la tabla
			$('#tabla').append('<tr><td>'+r.AA_VIGENTE+'</td><td>'+r.ZONA_VALOR+'</td></tr>');
		});