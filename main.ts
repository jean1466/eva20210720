input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 B A G F E D C ", 155)
    變數 = randint(1, 6)
    if (變數 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (變數 == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    }
    if (變數 == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    }
    if (變數 == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (變數 == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (變數 == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.EightG, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showNumber(randint(1, 6))
})
let 變數 = 0
basic.showString("Hello!")
