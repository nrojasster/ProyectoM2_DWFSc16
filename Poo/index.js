class Pregunta {
    constructor(pregunta, opciones, popular) {
        this.pregunta = pregunta;
        this.opciones = opciones;                
    }
 
    askUser() {
        let ok=false;
        do {
            let optionsString = this.opciones.map((option, index) => `${index + 1}. ${option[index, 0]}`).join("\n");
            let userResponse = prompt(`${this.pregunta}\n${optionsString}\nSelecciona una Opcion entre 1 y ${this.opciones.length}:`);
            if (!isNaN(userResponse)){  //validar que sea un numero
                if (this.opciones.length>=parseInt(userResponse) && parseInt(userResponse)>0){  //validar que la opcion elegida no este fuera de rango de las opciones dadas
                    let popular = this.opciones[parseInt(userResponse)-1][1];
                    ok=true;
                    this.opciones[parseInt(userResponse)-1][1] = popular+1;  //acumula el voto ingresado
                }                
            }   
        } while (!ok)     
    }   
} 
//define como realizara las preguntas
class Encuesta {
    constructor(preguntas) {
        this.preguntas = preguntas;      
    }
 
    muestraResultados(){
        console.log("\nResumen De Encuesta:");
        this.preguntas.forEach((pregunta) => {            
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
    askQuestions() {
        this.preguntas.forEach((pregunta) => {        
            pregunta.askUser();           
        });
    }
    startEncuesta() {
        do {
            this.askQuestions();
            var repeat = prompt("¿Desea repetir la Encuesta? (s/n)");            
        } while (repeat.toLocaleLowerCase() === "s");
        this.muestraResultados();
        console.log("¡Gracias por participar en esta Encuesta.!");
    }
}

const preguntas = [
    new Pregunta("¿Cuál Es el color más popular en Chile?", [["Rojo", 0], ["Blanco",0], ["Verde",0]]),
    new Pregunta("¿Cuál es el Destino Turístico Más Visitado en Chile?", [["Torres del Paine",0], ["Viña del Mar", 0], ["Santiago", 0]]),
    new Pregunta("¿Cuál es la Radio más Escuchada en Chile?", [["RadioActiva",0], ["FM-Dos",0], ["Bio-Bio", 0]]),
    new Pregunta("¿Cuál es la Comida más Consumida en Chile?", [["Pan", 0], ["Porotos", 0], ["Tomates", 0]]),
    new Pregunta("¿Cuál es el Equipo de Futbol más Popular en Chile?", [["Colo-Colo", 0], ["Cobreloa", 0], ["U. Chile", 0]]),
    new Pregunta("¿Cuál es el Youtuber más Visto en Chile?", [["German Garmendia", 0], ["Luisito Comunica", 0], ["Claudio Iturra", 0]]),
    new Pregunta("¿Cuál es el Canal de TV más popular en Chile?", [["TVN", 0], ["Mega", 0], ["ChileVisión", 0]]),
    new Pregunta("¿Cuál es la pelicula Infantil más vista en 2024?", [["Intensamente 2", 0], ["Garfield", 0], ["Transformer One", 0]]),
    new Pregunta("¿Cuál es el Té favorito de Chile?", [["Lipton", 0], ["Supremo", 0], ["Basilur", 0], ["Dilmah", 0]]),
];
 
const encuesta = new Encuesta(preguntas);
encuesta.startEncuesta();