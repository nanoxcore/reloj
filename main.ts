let segundos = 50
let minutos = 57
let horas = 0
basic.forever(function () {
    if (segundos < 59) {
        segundos += 1
    } else {
        segundos = 0
    }
    if (segundos == 0) {
        minutos += 1
    } else {
        minutos = 0
    }
    if (horas < 12) {
    	
    }
})
