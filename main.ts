let randomm = 0
input.onGesture(Gesture.Shake, function () {
    randomm = randint(3, 3)
})
basic.forever(function () {
    if (randomm == 1) {
        music.setTempo(250)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 4; index++) {
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Sixteenth))
        }
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 4; index++) {
            music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Sixteenth))
        }
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 3; index++) {
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Sixteenth))
        }
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Sixteenth))
        }
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(831, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        randomm = 0
    }
})
basic.forever(function () {
    if (randomm == 2) {
        music.setTempo(350)
        for (let index = 0; index < 2; index++) {
        	
        }
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Sixteenth))
        }
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (randomm == 3) {
        music.setTempo(83)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
