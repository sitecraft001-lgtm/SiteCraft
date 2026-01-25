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
    id: "requests",
    title: "GET Request",
    tags: ["api", "http"],
    code: `import requests
print(requests.get("https://api.github.com").json())`
  }
];
