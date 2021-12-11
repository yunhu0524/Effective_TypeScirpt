class Square { 
  // class는 자바스크립트에서 실제 선언된 값이면서
  // 인터페이스 처럼 타입으로서도 존재 가능
  // class 이면서 type 이기도 하다
  constructor(public width: number) {}
}
class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width)
  }
}
type Shape = Square | Rectangle

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    shape // Type is Rectangle
    return shape.width * shape.height
  } else {
    shape // Type is Square
    return shape.width * shape.width // OK
  }
}

export default {}
