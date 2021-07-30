maqueen.IR_callbackUser(function (message) {
    if (message == 12) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (message == 24) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (message == 94) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (message == 8) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (message == 28) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (message == 90) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    }
    if (message == 66) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    }
    if (message == 82) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
    if (message == 74) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (message == 22) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let derecha = 0
let izquierda = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    izquierda = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    derecha = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (izquierda == 0 && derecha == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else {
        if (izquierda == 0 && derecha == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        } else {
            if (izquierda == 1 && derecha == 0) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            }
        }
    }
})
