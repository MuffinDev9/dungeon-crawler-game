# Start

blockMenu.show_menu(["Start"], MenuStyle.LIST, MenuLocation.FULL_SCREEN)
blockMenu.set_colors(7, 15)
blockMenu.set_controls_enabled(True)

my_sprite = sprites.create(assets.image("""player-right"""), SpriteKind.player)
scene.camera_follow_sprite(my_sprite)
velocity_x = 100
velocity_y = 100
buttonpressed = 0

# Moving

def on_left_pressed():
    if not blockMenu.is_menu_open():
        my_sprite.set_image(assets.image("""player-left"""))
        buttonpressed = 1
        pass
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    if not blockMenu.is_menu_open():
        my_sprite.set_image(assets.image("""player-right"""))
        buttonpressed = 0
    pass
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def controlthing():
    if not blockMenu.is_menu_open():
        controller.move_sprite(my_sprite, velocity_x, velocity_y)
    pass
game.on_update(controlthing)

def on_a_pressed():
    if blockMenu.is_menu_open():
        menuthings()
    else:
        if buttonpressed == 0:
            projectile = sprites.create_projectile_from_sprite(assets.image("""swardright"""), my_sprite, 100, 0)
            
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_up_pressed():
    if not blockMenu.is_menu_open():
        buttonpressed = 2
    pass
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_down_pressed():
    if not blockMenu.is_menu_open():
        buttonpressed = 3
    pass
controller.up.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

# Main Functions

def menuthings():
    if blockMenu.is_menu_open():
        if blockMenu.selected_menu_index() == 0:
            blockMenu.close_menu()
            levelsandstuff()

def levelsandstuff():
    tiles.set_tilemap(assets.tilemap("""room"""))
    tiles.place_on_tile(my_sprite, tiles.get_tile_location(23, 37))
    
    # For Loops

    for value in(tiles.get_tiles_by_type(assets.tile("""DoorTopSpawner"""))):
        door_topp = sprites.create(assets.image("""Doortoop"""))
        door_topp.z = 2
        tiles.place_on_tile(door_topp, value)
        pass
    
    for value2 in(tiles.get_tiles_by_type(assets.tile("""EnemyHere"""))):
        enemmy = sprites.create(assets.image("""enemy1"""), SpriteKind.enemy)
        tiles.place_on_tile(enemmy, value2)
        enemmy.follow(my_sprite, 30)
        pass

    # Starting Dialogue
    my_sprite.say_text("W-")
    pause(1000)
    my_sprite.say_text("Where Am I?")
    pause(3000)
    my_sprite.say_text("What Is This Place?")
    pause(3000)
    my_sprite.say_text("I Wish I Knew...")
    pause(3000)
    my_sprite.say_text("I Think It's Time To Explore.")
    pause(3000)
    my_sprite.say_text("Let's Go!")
    pause(3000)
    my_sprite.say_text(None)

    info.player1.set_life(3)

# Sprites

def enemyone_overlap(sprite, otherSprite):
    tiles.place_on_tile(my_sprite, tiles.get_tile_location(23, 37))
    info.player1.change_life_by(-1)
    pass
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, enemyone_overlap)
