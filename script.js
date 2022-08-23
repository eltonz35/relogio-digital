let display = document.querySelector(".display");

let tempo = new Date();

let horario = tempo.getHours() + ":" + tempo.getMinutes();

display.textContent = horario;