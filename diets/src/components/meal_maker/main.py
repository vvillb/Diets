def func():
    global my_var
    return 5 + my_var

my_var = globals().get('my_var', 0)
func()