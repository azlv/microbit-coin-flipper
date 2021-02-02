input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.B, function () {
    if (B == 0) {
        B = 1
    } else {
        B = 0
    }
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    soundExpression.sad.play()
})
let B = 0
B = 0
basic.forever(function () {
    if (B == 1) {
        music.playMelody("- D D C E F - - ", 120)
    }
})
