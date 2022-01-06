//  Start
let my_sprite = sprites.create(assets.image`player-right`, SpriteKind.Player)
scene.cameraFollowSprite(my_sprite)
let velocity_x = 100
let velocity_y = 100
let room = "Start"
levelsandstuff()
//  Moving
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    my_sprite.setImage(assets.image`player-left`)
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    my_sprite.setImage(assets.image`player-right`)
    
})
game.onUpdate(function controlthing() {
    controller.moveSprite(my_sprite, velocity_x, velocity_y)
    
})
//  Levels
function levelsandstuff() {
    tiles.setTilemap(assets.tilemap`room`)
    tiles.placeOnTile(my_sprite, tiles.getTileLocation(4, 9))
}

//  Tilemap Stuff
scene.onOverlapTile(SpriteKind.Player, assets.tile`Dooru`, function on_overlap_up_door(sprite: Sprite, location: tiles.Location) {
    let room: string;
    if (room == "Start") {
        tiles.placeOnTile(my_sprite, tiles.getTileLocation(4, 3))
        room = "up1"
    }
    
    
})
