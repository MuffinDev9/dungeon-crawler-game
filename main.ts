//  Start
blockMenu.showMenu(["Start"], MenuStyle.List, MenuLocation.FullScreen)
blockMenu.setColors(7, 15)
blockMenu.setControlsEnabled(true)
let my_sprite = sprites.create(assets.image`player-right`, SpriteKind.Player)
scene.cameraFollowSprite(my_sprite)
let velocity_x = 100
let velocity_y = 100
let buttonpressed = 0
//  Moving
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    let buttonpressed: number;
    if (!blockMenu.isMenuOpen()) {
        my_sprite.setImage(assets.image`player-left`)
        buttonpressed = 1
        
    }
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    let buttonpressed: number;
    if (!blockMenu.isMenuOpen()) {
        my_sprite.setImage(assets.image`player-right`)
        buttonpressed = 0
    }
    
    
})
game.onUpdate(function controlthing() {
    if (!blockMenu.isMenuOpen()) {
        controller.moveSprite(my_sprite, velocity_x, velocity_y)
    }
    
    
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    let srowd: Sprite;
    if (blockMenu.isMenuOpen()) {
        menuthings()
    } else if (buttonpressed == 0) {
        srowd = sprites.createProjectileFromSprite(assets.image`swardright`, my_sprite, 100, 0)
    } else if (buttonpressed == 1) {
        srowd = sprites.createProjectileFromSprite(assets.image`swardleft`, my_sprite, 100, 0)
    }
    
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    let buttonpressed: number;
    if (!blockMenu.isMenuOpen()) {
        buttonpressed = 2
    }
    
    
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    let buttonpressed: number;
    if (!blockMenu.isMenuOpen()) {
        buttonpressed = 3
    }
    
    
})
//  Main Functions
function menuthings() {
    if (blockMenu.isMenuOpen()) {
        if (blockMenu.selectedMenuIndex() == 0) {
            blockMenu.closeMenu()
            levelsandstuff()
        }
        
    }
    
}

function levelsandstuff() {
    let door_topp: Sprite;
    let enemmy: Sprite;
    tiles.setTilemap(assets.tilemap`room`)
    tiles.placeOnTile(my_sprite, tiles.getTileLocation(23, 37))
    //  For Loops
    for (let value of tiles.getTilesByType(assets.tile`DoorTopSpawner`)) {
        door_topp = sprites.create(assets.image`Doortoop`)
        door_topp.z = 2
        tiles.placeOnTile(door_topp, value)
        
    }
    for (let value2 of tiles.getTilesByType(assets.tile`EnemyHere`)) {
        enemmy = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
        tiles.placeOnTile(enemmy, value2)
        enemmy.follow(my_sprite, 30)
        
    }
    //  Starting Dialogue
    my_sprite.sayText("W-")
    pause(1000)
    my_sprite.sayText("Where Am I?")
    pause(3000)
    my_sprite.sayText("What Is This Place?")
    pause(3000)
    my_sprite.sayText("I Wish I Knew...")
    pause(3000)
    my_sprite.sayText("I Think It's Time To Explore.")
    pause(3000)
    my_sprite.sayText("Let's Go!")
    pause(3000)
    my_sprite.sayText(null)
    info.player1.setLife(3)
}

//  Sprites
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function enemyone_overlap(sprite: Sprite, otherSprite: Sprite) {
    tiles.placeOnTile(my_sprite, tiles.getTileLocation(23, 37))
    info.player1.changeLifeBy(-1)
    
})
