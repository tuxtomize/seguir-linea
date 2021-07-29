let derecha = 0
let izquierda = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
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
control.inBackground(function () {
    for (let index = 0; index < 1000000000000000; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(500)
    }
})
