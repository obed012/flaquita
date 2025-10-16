/*
 * ============================================
 * FUNCIONES PARA LA PÁGINA DE AMOR
 * ============================================
 */

// === VARIABLES GLOBALES ===
var $win = $(window);
var clientWidth = $win.width();   // Ancho de la ventana
var clientHeight = $win.height(); // Alto de la ventana

// === RECARGA LA PÁGINA SI SE CAMBIA EL TAMAÑO DE LA VENTANA ===
// Esto asegura que las animaciones se vean correctamente
$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location); // Recarga la página
    }
});

// === EFECTO DE MÁQUINA DE ESCRIBIR ===
// Hace que el texto aparezca letra por letra
(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html(''); // Limpia el contenido inicial
            
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                
                // Si encuentra una etiqueta HTML, la salta completa
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                
                // Muestra el texto con un cursor parpadeante '_'
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                
                // Cuando termina de escribir, detiene el intervalo
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75); // Velocidad de escritura (75ms por carácter)
        });
        return this;
    };
})(jQuery);

// === CALCULA EL TIEMPO TRANSCURRIDO DESDE UNA FECHA ===
// Muestra: días, horas, minutos y segundos
function timeElapse(date){
    // Calcula la diferencia en segundos
    var seconds = (+ new Date() - date.getTime()) / 1000;
    
    // Calcula los días
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    
    // Calcula las horas
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours; // Agrega cero a la izquierda si es menor a 10
    }
    seconds = seconds % 3600;
    
    // Calcula los minutos
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes; // Agrega cero a la izquierda si es menor a 10
    }
    
    // Calcula los segundos
    seconds = Math.floor(seconds % 60);
    seconds = (seconds + "").replace(/\.\d*/, ""); // Elimina decimales
    
    // Construye el resultado en español
    var result = "<span class=\"digit\">" + days + "</span> días " + 
                 "<span class=\"digit\">" + hours + "</span> horas " + 
                 "<span class=\"digit\">" + minutes + "</span> minutos " + 
                 "<span class=\"digit\">" + seconds + "</span> segundos";
    
    // Actualiza el reloj en la página
    $("#clock").html(result);
}


/* ============================================
   PERSONALIZACIONES OPCIONALES
   ============================================ */

/*
 * VELOCIDAD DE ESCRITURA (línea 43):
 * Cambia el valor 75 para ajustar la velocidad
 * - Más lento: 100, 150, 200
 * - Más rápido: 50, 30, 20
 */

/*
 * FORMATO DE TIEMPO (línea 76):
 * Puedes cambiar el formato del contador
 * Ejemplos:
 * - Sin "días": result = hours + "h " + minutes + "m " + seconds + "s";
 * - Más formal: result = days + " días, " + hours + " horas...";
 * - Corto: result = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
 */
