randomm = 0

def on_gesture_shake():
    global randomm
    randomm = randint(1, 3)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
