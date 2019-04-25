// Your code here
class Polygon {
  constructor(arr){
    this.arr = arr
  }

  get getCount(){
    return this.arr.length
  }

  get perimeter(){
    return this.arr.reduce((a,b)=>a+b)
  }
}

class Triangle extends Polygon{
  get isValid(){
    if(this.arr[0] > this.arr[1] + this.arr[2] || this.arr[1] > this.arr[0] + this.arr[2] || this.arr[2] > this.arr[1] + this.arr[0]){
      return false
    }
    return true
  }
}

class Square extends Polygon{
  get isValid(){
    if(this.arr[0] === this.arr[1] && this.arr[1] === this.arr[2] && this.arr[2] === this.arr[3]){
      return true
    }
    return false
  }

  get area(){
    return this.arr[0]* this.arr[0]
  }
}
