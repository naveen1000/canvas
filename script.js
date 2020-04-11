const canvas= document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;
w = canvas.width;
h = canvas.height;
//ctx.fillStyle ='red';
//ctx.fillRect(10,10,100,100);
function drawWall() {
    ctx.lineWidth=20;
    ctx.strokeStyle="grey";
    ctx.strokeRect(0,0,w,h);

    ctx.font ='15px Arial';
    ctx.fillStyle='grey';
    ctx.fillText('Naveen Kumar',w-150,h-30);
}

const c ={
    x:200,
    y:200,
    size:20,
    dx:1,
    dy:2,
    color:0
}
const c2 ={
    x:200,
    y:200,
    size:20,
    dx:2,
    dy:3,
    color:2
}

const c3 ={
    x:200,
    y:200,
    size:20,
    dx:2,
    dy:1,
    color:7
}
const c4 ={
    x:200,
    y:200,
    size:20,
    dx:-1,
    dy:2,
    color:6
}
colors = ['red' , 'blue' ,'yellow' ,'green', 'white','pink' ,'brown', 'violet' ,'grey']
function drawCircle( c , color){
    ctx.beginPath();
    ctx.arc(c.x, c.y , c.size , 0 , Math.PI *2)
    ctx.fillStyle =color;
    ctx.fill();
}

function changePosition(cp) {
    cp.x += cp.dx;
    cp.y += cp.dy;
}

function detectWall(c)
{
    if(c.x + c.size > canvas.width || c.x - c.size < 0 )
      {  c.dx *= -1; c.color +=1;}

    if(c.y + c.size > canvas.height || c.y - c.size < 0 )
      {  c.dy *= -1; c.color +=1;}
    if(c.color> colors.length )
        c.color=0;
}
function update() {

    ctx.clearRect(0 , 0 , canvas.width ,canvas.height);
    drawWall()
    
    drawCircle(c,colors[c.color]);
    changePosition(c);
    detectWall(c);

    drawCircle(c2,colors[c2.color]);
    changePosition(c2);
    detectWall(c2);   

    drawCircle(c3,colors[c3.color]);
    changePosition(c3);
    detectWall(c3);   
    
    drawCircle(c4,colors[c4.color]);
    changePosition(c4);
    detectWall(c4);   
    requestAnimationFrame(update);

}
update();