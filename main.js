// console.log(myCanvas.getContext('2d'))
// console.log(window)

const context = myCanvas.getContext('2d');
console.log(context)
const car = new Car(320, 320, 30, 50);

render();

function render(){
  myCanvas.height = window.innerHeight;
  myCanvas.width = window.innerWidth / 3
  car.update()
  car.draw(context);
  requestAnimationFrame(render);
}