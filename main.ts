input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A+B")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . . #
        . # # # #
        `)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
