def on_logo_pressed():
    countDownMinutes(15)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def updatePointerPosition():
    global row, col
    if col == 0:
        row += -1
        col = maxCol
    else:
        col += -1

def on_button_pressed_a():
    countDownMinutes(5)
input.on_button_pressed(Button.A, on_button_pressed_a)

def countDownMinutes(duration: number):
    global step2, wait2
    basic.show_number(duration)
    basic.pause(100)
    reset()
    step2 = Math.round(25 / duration)
    wait2 = duration * minute
    makeStep(step2, wait2, True)
    complete()
def complete():
    basic.pause(5000)
    basic.clear_screen()

def on_button_pressed_b():
    countDownMinutes(25)
input.on_button_pressed(Button.B, on_button_pressed_b)

def updateLeftTimeImage():
    led.toggle(col, row)
def reset():
    global row, col
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    row = maxRow
    col = maxCol
def makeStep(step: number, wait: number, playSound: bool):
    while row >= 0:
        for index in range(step):
            updateLeftTimeImage()
            updatePointerPosition()
        basic.pause(wait)
    basic.show_icon(IconNames.YES)
    if playSound:
        music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
                200,
                600,
                255,
                0,
                150,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            SoundExpressionPlayMode.UNTIL_DONE)
wait2 = 0
step2 = 0
row = 0
col = 0
minute = 0
maxCol = 0
maxRow = 0
led.set_brightness(80)
maxRow = 4
maxCol = 4
second = 1000
minute = 60 * second

def on_forever():
    pass
basic.forever(on_forever)
