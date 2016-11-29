const app = "I don't do much."

function Rectangle(x, y, width, height) {
  Shape.call(this, 4, x, y);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
}
