//  Start
blockMenu.showMenu(["Start"], MenuStyle.List, MenuLocation.FullScreen)
blockMenu.setColors(7, 15)
blockMenu.setControlsEnabled(true)
let my_sprite = sprites.create(assets.image`player-right`, SpriteKind.Player)
scene.cameraFollowSprite(my_sprite)
let velocity_x = 100
let velocity_y = 100
let room = "Start"
//  Moving
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    if (!blockMenu.isMenuOpen()) {
        my_sprite.setImage(assets.image`player-left`)
        
    }
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    if (!blockMenu.isMenuOpen()) {
        my_sprite.setImage(assets.image`player-right`)
    }
    
    
})
game.onUpdate(function controlthing() {
    if (!blockMenu.isMenuOpen()) {
        controller.moveSprite(my_sprite, velocity_x, velocity_y)
    }
    
    
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (blockMenu.isMenuOpen()) {
        menuthings()
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
    tiles.setTilemap(assets.tilemap`room`)
    tiles.placeOnTile(my_sprite, tiles.getTileLocation(23, 37))
    //  For Loops
    for (let value of tiles.getTilesByType(assets.tile`DoorTopSpawner`)) {
        door_topp = sprites.create(assets.image`Doortoop`, SpriteKind.Enemy)
        door_topp.z = 2
        tiles.placeOnTile(door_topp, value)
        
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
}

