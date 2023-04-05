input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    countDownMinutes(topButtonTime)
})
function setUp () {
    led.setBrightness(80)
    music.setVolume(255)
    maxRow = 4
    maxCol = 4
    second = 1000
    minute = 60 * second
    leftButtonTime = 5
    topButtonTime = 15
    rightButtonTime = 25
}
function showIntro () {
    basic.showString("pomodoro")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(leftButtonTime)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(topButtonTime)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(rightButtonTime)
    basic.pause(200)
}
function updatePointerPosition () {
    if (col == 0) {
        row += -1
        col = maxCol
    } else {
        col += -1
    }
}
input.onButtonPressed(Button.A, function () {
    countDownMinutes(leftButtonTime)
})
function countDownMinutes (duration: number) {
    basic.clearScreen()
    basic.showNumber(duration)
    basic.pause(100)
    reset()
    wait = Math.round(duration * minute / 25)
    makeSteps(wait)
    complete(false)
}
function complete (playSound: boolean) {
    if (playSound) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
    basic.showIcon(IconNames.Yes)
    basic.pause(5 * second)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    countDownMinutes(rightButtonTime)
})
function updateLeftTimeImage () {
    led.toggle(col, row)
}
function makeSteps (wait: number) {
    while (row >= 0) {
        basic.pause(wait)
        updateLeftTimeImage()
        updatePointerPosition()
    }
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
let wait = 0
let row = 0
let col = 0
let rightButtonTime = 0
let leftButtonTime = 0
let minute = 0
let second = 0
let maxCol = 0
let maxRow = 0
let topButtonTime = 0
setUp()
if (false) {
    showIntro()
}
basic.showLeds(`
    . . # . .
    . . . . .
    # . . . #
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
