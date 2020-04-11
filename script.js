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

c =[{x:200, y:200, size:20, dx:1, dy:2, color:0},
    {x:200, y:200, size:20,dx:-2, dy:-1, color:2},
    {x:200, y:200, size:20,dx:2, dy:1, color:7},
    {x:200,y:200,  size:20,dx:-1,dy:2, color:6}
];

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
    for (let i = 0; i< c.length; i++) {
        drawCircle(c[i],colors[c[i].color]);
        changePosition(c[i]);
        detectWall(c[i]);
    }
    
    requestAnimationFrame(update);

}
update();