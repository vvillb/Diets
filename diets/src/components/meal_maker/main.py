

def func():
    global var1, var2, var3
    return 5 + var1 + var2 + var3

var1 = globals().get('var1', 0)
var2 = globals().get('var2', 0)
var3 = globals().get('var3', 0)
func()