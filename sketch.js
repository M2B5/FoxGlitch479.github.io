

let toDisplay = "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/38e39afa7a1ed3bd40378370b496eca8~c5_100x100.jpeg?x-expires=1652184000&x-signature=wJVwsca3rTNpvjJlQvl5L7fYoqQ%3D";
function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  stroke(0,0,0);
  fill(0,0,0);
  textSize(70);
  text("hi",10,100)
  image()
}

function mouseClicked(){

  console.log("clicked")
  src = toDisplay + '.png',
  img = document.createElement('img');

img.src = src;


}







