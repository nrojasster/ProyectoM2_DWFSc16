// Paso 1: Definir la estructura de datos para las preguntas y las respuestas
const preguntas = [
    {pregunta: "¿Cuál Es el color más popular en Chile?", opciones: [["Rojo", 0], ["Blanco",0], ["Verde",0]]},
    {pregunta: "¿Cuál es el Destino Turístico Más Visitado en Chile?", opciones: [["Torres del Paine",0], ["Viña del Mar", 0], ["Santiago", 0]]},
    {pregunta: "¿Cuál es la Radio más Escuchada en Chile?", opciones: [["RadioActiva",0], ["FM-Dos",0], ["Bio-Bio", 0]]},
    {pregunta: "¿Cuál es la Comida más Consumida en Chile?", opciones: [["Pan", 0], ["Porotos", 0], ["Tomates", 0]]},
    {pregunta: "¿Cuál es el Equipo de Futbol más Popular en Chile?", opciones: [["Colo-Colo", 0], ["Cobreloa", 0], ["U. Chile", 0]]},
    {pregunta: "¿Cuál es el Youtuber más Visto en Chile?", opciones: [["German Garmendia", 0], ["Luisito Comunica", 0], ["Claudio Iturra", 0]]},
    {pregunta: "¿Cuál es el Canal de TV más popular en Chile?", opciones: [["TVN", 0], ["Mega", 0], ["ChileVisión", 0]]},
    {pregunta: "¿Cuál es la pelicula Infantil más vista en 2024?", opciones: [["Intensamente 2", 0], ["Garfield", 0], ["Transformer One", 0]]},
    {pregunta: "¿Cuál es el Té favorito de Chile?", opciones: [["Lipton", 0], ["Supremo", 0], ["Basilur", 0], ["Dilmah", 0]]},
    {pregunta: "¿Cuál es el auto más vendido en Chile?", opciones: [["Nissan", 0], ["Chevrolet", 0], ["Kia", 0], ["Mercedes Benz", 0]]}
  ];
  
  // Muestra los resultados de la Encuesta **
  function muestraResultados(preguntas){
    console.log("\nResumen De Encuesta:");
    preguntas.forEach((pregunta) => {            
        let top=-1;
        let respo="Sin Respuestas";
        pregunta.opciones.forEach((opcion) => {
            if(top < opcion[1] && opcion[1]>0){
                top = opcion[1];
                respo = opcion[0];
            }
        })
        console.log(`${pregunta.pregunta}: ${respo} (votos: ${top})`);            
    })
}
  // Crear la función Preguntar
  function preguntar(pregunta) {
    let ok=false;
    do {
        let opcionesStr = pregunta.opciones.map((opcion, index) => `${index + 1}. ${opcion[index, 0]}`).join("\n");
        let respuestaUsuario = prompt(`${pregunta.pregunta}\n${opcionesStr}\nSelecciona una Opcion entre 1 y ${pregunta.opciones.length}:`);
        
        if (!isNaN(respuestaUsuario)){  //validar que sea un numero entre 1 y largo de opciones
            if (pregunta.opciones.length>=parseInt(respuestaUsuario) && parseInt(respuestaUsuario)>0){ 
                let popular = pregunta.opciones[parseInt(respuestaUsuario)-1][1];
                ok=true;
                pregunta.opciones[parseInt(respuestaUsuario)-1][1] = popular+1; //acumula el voto de la opcion ingresada
            }                
        } 
    } while (!ok)    
  }
  
  function startEncuesta() {
    do {
        preguntas.forEach((pregunta) => {
            preguntar(pregunta);
          });
        var repeat = prompt("¿Desea repetir la Encuesta? (s/n)");            
    } while (repeat.toLocaleLowerCase() === "s");
    muestraResultados(preguntas);
    console.log("¡Gracias por participar en esta Encuesta.!");
}
// Comienza la Encuesta 
startEncuesta();


 