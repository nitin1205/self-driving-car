// console.log(myCanvas.getContext('2d'))
// console.log(window)

const context = myCanvas.getContext('2d');
const road = new Road(myCanvas.width *1.07 , myCanvas.width * 2);
// console.log(context)
const car = new Car(myCanvas.width, myCanvas.height, 30, 50);

render();

function render(){
  car.update(road.borders);
  myCanvas.height = window.innerHeight;
  myCanvas.width = window.innerWidth / 3
  context.translate( 0, -car.y+myCanvas.height*0.5 );
  road.draw(context);
  car.draw(context);
  requestAnimationFrame(render);
}