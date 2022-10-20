input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let JAVIER = game.createSprite(0, 2)
let ANDREA = game.createSprite(randint(1, 4), randint(0, 4))
let ARNOL = game.createSprite(randint(1, 4), randint(0, 4))
let AGUS = game.createSprite(randint(1, 4), randint(0, 4))
ANDREA.set(LedSpriteProperty.Brightness, 100)
ARNOL.set(LedSpriteProperty.Brightness, 100)
AGUS.set(LedSpriteProperty.Brightness, 100)
game.setScore(0)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        JAVIER.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        JAVIER.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        JAVIER.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        JAVIER.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (JAVIER.isTouching(ANDREA)) {
        ANDREA.delete()
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
        }
        game.addScore(1)
    }
    if (JAVIER.isTouching(ARNOL)) {
        ARNOL.delete()
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
        }
        game.addScore(1)
    }
    if (JAVIER.isTouching(AGUS)) {
        AGUS.delete()
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
        }
        game.addScore(1)
    }
    if (game.score() == 3) {
        basic.showString("YOU WIN")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
})
loops.everyInterval(3000, function () {
    ANDREA.change(LedSpriteProperty.Y, randint(0, 4))
    ARNOL.change(LedSpriteProperty.Y, randint(0, 4))
    AGUS.change(LedSpriteProperty.Y, randint(0, 4))
})
