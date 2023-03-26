input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    countDownMinutes(15)
})
function updatePointerPosition () {
    if (col == 0) {
        row += -1
        col = maxCol
    } else {
        col += -1
    }
}
input.onButtonPressed(Button.A, function () {
    countDownMinutes(5)
})
function countDownMinutes (duration: number) {
    basic.showNumber(duration)
    basic.pause(100)
    reset()
    step = Math.round(25 / duration)
    wait = duration * minute
    makeStep(step, wait, true)
    complete()
}
function complete () {
    basic.pause(5000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    countDownMinutes(25)
})
function updateLeftTimeImage () {
    led.toggle(col, row)
}
function reset () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    row = maxRow
    col = maxCol
}
function makeStep (step: number, wait: number, playSound: boolean) {
    while (row >= 0) {
        for (let index = 0; index < step; index++) {
            updateLeftTimeImage()
            updatePointerPosition()
        }
        basic.pause(wait)
    }
    basic.showIcon(IconNames.Yes)
    if (playSound) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
}
let wait = 0
let step = 0
let row = 0
let col = 0
let minute = 0
let maxCol = 0
let maxRow = 0
led.setBrightness(80)
maxRow = 4
maxCol = 4
let second = 1000
minute = 60 * second
basic.forever(function () {
	
})
