navigator.geolocation.getCurrentPosition(localizar);  
//getCurrentPosition no se renueva constantemente, es una mandada de datos y ahi quedo.

function localizar(datosPosicion){

	alert(datosPosicion.coords.latitude); //objeto.subobjeto.propiedadquequierover
										  //timestamp te tira la cantidad de segundos desde ese dia en 1970




}

//-------------------------------------------------

//En el celular se triangula con las señales de la antena para saber a cuanta distancia (ubicación) se está de x puntos, la proximidad es variable

//se usa el set interval para terminar al ClearWatch para terminar la renovacion de ubicacion y que no gaste bateria al dope.