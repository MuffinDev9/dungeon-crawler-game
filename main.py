# Start

my_sprite = sprites.create(assets.image("""player-right"""), SpriteKind.player)
scene.camera_follow_sprite(my_sprite)
velocity_x = 100
velocity_y = 100
room = "Start"
levelsandstuff()

# Moving

def on_left_pressed():
    my_sprite.set_image(assets.image("""player-left"""))
    pass
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    my_sprite.set_image(assets.image("""player-right"""))
    pass
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def controlthing():
    controller.move_sprite(my_sprite, velocity_x, velocity_y)
    pass
game.on_update(controlthing)

# Levels

def levelsandstuff():
    tiles.set_tilemap(assets.tilemap("""room"""))
    tiles.place_on_tile(my_sprite, tiles.get_tile_location(4, 9))

# Tilemap Stuff

def on_overlap_up_door(sprite, location):
    if room == "Start":
        tiles.place_on_tile(my_sprite, tiles.get_tile_location(4, 3))
        room = "up1"
    pass
scene.on_overlap_tile(SpriteKind.player, assets.tile("""Dooru"""), on_overlap_up_door)
