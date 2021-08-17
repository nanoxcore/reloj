function doSomething () {
	
}
let segundos = 55
let minutos = 59
let horas = 23
basic.forever(function () {
    if (segundos < 59) {
        segundos += 1
    } else {
        segundos = 0
    }
    if (segundos == 0 && minutos == 0) {
    	
    }
    if (segundos == 0) {
        minutos += 1
    }
    if (minutos == 59 && segundos == 59) {
        minutos = 0
        horas += 1
    }
    if (horas == 23 && (minutos == 59 && segundos == 59)) {
        horas += 0
        horas = 0
    }
})
