basic.showIcon(IconNames.Target)
basic.pause(1000)
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(100)
    basic.clearScreen()
})
