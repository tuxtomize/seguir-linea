let izquierda = 0
let derecha = 0
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
