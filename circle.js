var pg = document.getElementById('playground');
var ct = pg.getContext("2d");
function zbx() {
  ct.beginPath();
  ct.rect(0,250,500,1)
  ct.rect(250,0,1,500)
  ct.fillStyle="black"
  ct.fill()
  ct.closePath()

}



// var r=150,x,y,d=-Math.PI/2,d1=0;
// var timer=setInterval(function () {
//   y=r*Math.sin(d)+250;
//   x=r*Math.cos(d)+250;
//   ct.beginPath()
//   ct.arc(x,y,2,0,Math.PI*2);
//   //ct.arc(x,y+2*(250-y),2,0,Math.PI*2);
//   ct.fillStyle="black"
//   ct.fill()
//   d+=Math.PI/30
//   d1+=Math.PI/30
//   if (d1>2*Math.PI) {
//     clearInterval(timer)
//   }
//   ct.closePath()
// },1000)
//
//

function circle(ox,oy,r,a) {
  y=oy-r*Math.sin(a);
  x=ox+r*Math.cos(a);
  return {x,y}
}
var a=Math.PI/2
var timer=setInterval(function () {
  ct.clearRect(0,0,500,500)
  ct.beginPath()
zbx()
  ct.moveTo(250,250)
  var {x,y}=circle(250,250,150,a)
  ct.lineTo(x,y)
  ct.lineTo(250,250)
  ct.strokeStyle="black"
  ct.stroke()
  ct.closePath()
  a-=Math.PI/30
},1000)
