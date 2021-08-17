segundos = 50
minutos = 59
horas = 22

def on_forever():
    global segundos, minutos, horas
    if segundos < 59:
        segundos += 1
    else:
        segundos = 0
    if segundos == 0:
        minutos += 1
    if minutos < 59:
        if segundos == 59:
            horas += 1
        minutos += 0
    if horas == 23:
        if minutos == 59:
            basic.show_icon(IconNames.HEART)
basic.forever(on_forever)
