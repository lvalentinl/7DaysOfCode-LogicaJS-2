let nombre = '';
let edad = 0;
let lenguaje = '';
let opcionDeEstudio = 0;
let numeroDePregunta = 1;

function asignarTextoHTML(idEtiqueta, texto){
    let etiquetaHTML = document.getElementById(idEtiqueta);
    etiquetaHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    asignarTextoHTML('id_h1_titulo', 'Reto del día 2');
    asignarTextoHTML('id_h2_preguntas', '¿Cuál es tu nombre?');
    numeroDePregunta = 1;
    document.getElementById('id_btn_responder').removeAttribute('disabled');
}

condicionesIniciales();

function limpiarInput(idInput){
    document.getElementById(idInput).value = '';
}

function agregarRespuesta(){
    if (numeroDePregunta == 1) {
        nombre = document.getElementById('id_input_respuestas').value;
        numeroDePregunta++;
        asignarTextoHTML('id_h2_preguntas', '¿Cuántos años tienes?');
        limpiarInput('id_input_respuestas');
    } else if (numeroDePregunta == 2) {
        edad = document.getElementById('id_input_respuestas').value;
        numeroDePregunta++;
        asignarTextoHTML('id_h2_preguntas', '¿Qué lenguaje de programación estás estudiando?');
        limpiarInput('id_input_respuestas');
    } else if (numeroDePregunta == 3) {
        lenguaje = document.getElementById('id_input_respuestas').value;
        numeroDePregunta++;
        
        limpiarInput('id_input_respuestas');
        asignarTextoHTML('id_p_respuesta', `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

        setTimeout(() =>{
            asignarTextoHTML('id_h2_preguntas', `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
            asignarTextoHTML('id_p_respuesta', '');
        },5000); // timer de 5 segundos para la siguiente pregunta
        
    } else {
        opcionDeEstudio = document.getElementById('id_input_respuestas').value;        
        
        limpiarInput('id_input_respuestas');

        if (opcionDeEstudio == 1) {
            asignarTextoHTML('id_p_respuesta', '¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
        } else {
            asignarTextoHTML('id_p_respuesta', 'Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
        }

        document.getElementById('id_btn_nuevo').removeAttribute('disabled');
        document.getElementById('id_btn_responder').setAttribute('disabled', 'true');
    }
    
}

function nuevaRespuesta(){
    condicionesIniciales();
    document.getElementById('id_btn_nuevo').setAttribute('disabled', 'true');
    limpiarInput('id_input_respuestas');    
}
//console.log(`Hola; ${nombre}`);