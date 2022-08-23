function atualizarTempo() {
    let display = document.querySelector(".display");
    
    let tempo = new Date();
    
    let horario = corrigirHorario(tempo.getHours()) + ":" + corrigirHorario(tempo.getMinutes());

    display.textContent = horario;
}

function corrigirHorario(numero) {
    if(numero < 10) {
        numero = "0" + numero;
    }
    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);