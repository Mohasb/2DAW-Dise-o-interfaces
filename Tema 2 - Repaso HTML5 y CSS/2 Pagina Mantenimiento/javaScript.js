'use strict'

//Fecha destino
const DATE_TARGET = new Date('01/01/2023 0:00 AM');
//Obtener elementos dom
const SPAN_DAYS = document.querySelector('span#days');
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');
const SPAN_DATE_TOP = document.querySelector('span#date-top');

//Constantes de calculo
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

//Método 
function updateCountdown() {
    // Calculos
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    // Render
    SPAN_DAYS.innerHTML = REMAINING_DAYS;
    SPAN_HOURS.innerHTML = REMAINING_HOURS;
    SPAN_MINUTES.innerHTML = REMAINING_MINUTES;
    SPAN_SECONDS.innerHTML = REMAINING_SECONDS;
    SPAN_DATE_TOP.innerHTML = "(" +DATE_TARGET.toLocaleDateString() +")";
}

updateCountdown();

setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);


