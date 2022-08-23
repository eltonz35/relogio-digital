function atualizarTempo() {
    let display = document.querySelector(".display");
    
    let tempo = new Date();
    
    let horario = tempo.getHours() + ":" + tempo.getMinutes();

    display.textContent = horario;
}

function corrigirHorario() {
    if(numero < 10) {
        numero = "0" + numero;
    }
    return numero;
}

setInterval(atualizarTempo, 1000);