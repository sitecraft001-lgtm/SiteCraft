const SNIPPETS = [
  {
    id: "777",
    title: "Turtle Star",
    tags: ["777", "turtle graphics", "python"],
    code: `from turtle import *
from colorsys import *

tracer(20)
b = "black"
bgcolor(b)
h = 0
pensize(2)
speed(0)

for i in range(600):
    h += 0.009
    color(hsv_to_rgb(h,1,1),b)
    begin_fill()
    for j in range(5):
        fd(100)
        rt(100)
        fd(100)
        lt(100)
        rt(360 / 5)
    end_fill()
    rt(2)
    hideturtle()

done()`
  },
  {
    id: "650",
    title: "Avengers Logo",
    tags: ["650", "python"],
    code: ` import turtle

def draw_circle(pen):
	# outer circle
	pen.setposition(0, -280)
	pen.pendown()
	pen.begin_fill()
	pen.color('red')
	pen.pencolor('white')
	pen.circle(300)
	pen.end_fill()
	pen.penup()

def draw_circle2(pen):
	# inner circle
	pen.pensize(2)
	pen.setposition(0, -230)
	pen.pendown()
	pen.begin_fill()
	pen.color('black')
	pen.circle(250)
	pen.end_fill()
	pen.penup()

def draw_A(pen):
	# drawing ‘A’
	pen.setposition(30, -110)
	pen.pendown()
	pen.begin_fill()
	pen.color('red')
	pen.pensize(10)
	pen.pencolor('white')
	pen.forward(23)
	pen.backward(123)
	pen.left(60)
	pen.backward(220)
	pen.right(60)
	pen.backward(100)
	pen.right(117)
	pen.backward(710)
	pen.right(63)
	pen.backward(110)
	pen.right(90)
	pen.backward(510)
	pen.right(90)
	pen.backward(100)
	pen.right(90)
	pen.backward(70)
	pen.end_fill()
	pen.penup()

def draw_triangle(pen):
	# Triangle shape in ‘A’ to make it look like 2d
	pen.pensize(10)
	pen.setposition(53, -40)
	pen.pendown()
	pen.begin_fill()
	pen.color('black')
	pen.pencolor('white')
	pen.right(90)
	pen.forward(100)
	pen.right(115)
	pen.forward(250)
	pen.right(157)
	pen.forward(227)
	pen.end_fill()

def draw_arrow(pen):
	# arrow
	pen.backward(80)
	pen.left(42)
	pen.forward(147)
	pen.right(83)
	pen.forward(140)

if __name__ == '__main__':
	win = turtle.Screen()
	win.bgcolor('black')

	avengers = turtle.Turtle()
	avengers.speed(10)
	avengers.pensize(10)
	avengers.penup()
	
	draw_circle(avengers)
	draw_circle2(avengers)
	draw_A(avengers)
	draw_triangle(avengers)
	draw_arrow(avengers)
	
	avengers.hideturtle()
	turtle.done() `
  }
];
