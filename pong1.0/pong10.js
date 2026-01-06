// HelloTriangle.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'uniform mat4 u_xformMatrix;\n' +
  'attribute vec4 a_Color;\n' +
  'varying vec4 v_Color;\n' +
  'void main() {\n' +
  '  gl_Position = u_xformMatrix * a_Position;\n' +
  '  v_Color = a_Color;\n' +
  '}\n';

// Fragment shader program
var FSHADER_SOURCE =
  'precision mediump float;\n' +
  'varying vec4 v_Color;\n' + // uniform変数
  'void main() {\n' +
  '  gl_FragColor = v_Color;\n' +
  '}\n';

var P1x = -0.90;
var P1y = 0.0;
var P2x = 0.9;
var P2y = 0.0;
var ballX = 0.0;
var ballY = 0.0;
var ballSX = 0.015;
var ballSY = 0;
var ballA = 0;
var x = 0;
var y = 0;
var winner = false;

var arr = [false,false,false,false];
//          w     s     up    down

var Tx = 0.0, Ty = 0.0;
var angle = 0;
var Sx = 0.0, Sy = 0.0;


function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // Write the positions of vertices to a vertex shader
  var n = initVertexBuffers(gl);
  if (n < 0) {
    console.log('Failed to set the positions of the vertices');
    return;
  }





var radian = Math.PI * angle / 180.0;
var cosB = Math.cos(radian), sinB = Math.sin(radian);

  var xformMatrix = new Float32Array([
	cosB * Sx,  sinB,      0.0,       0.0,
   -sinB,      cosB * Sy,  0.0,        0.0,
	0.0,       0.0,        0.0,        0.0,
	Tx,        Ty,         0.0,        1.0
]);

// Pass the rotation matrix to the vertex shader
var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix');
if (!u_xformMatrix) {
  console.log('Failed to get the storage location of u_xformMatrix');
  return;

}

  var inc = true;
  var mul = 0;
  var rotato = 0;

  var tick = function(){

  n = initVertexBuffers(gl);
  // Specify the color for clearing <canvas>
  gl.clearColor(0, 0, 0, 1);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);


  Tx = 0.0, Ty = 0.0;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.LINE_LOOP, 0, 4); //draw bondery

  Tx = P1x, Ty = P1y;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4); //draw p1

  Tx = P2x, Ty = P2y;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4); //draw p2


  Tx = ballX, Ty = ballY;
  angle = ballA;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_FAN, 12, n);//draw circle
  ballX += ballSX;
  ballY += ballSY;

  if(ballX+0.1 > P2x && ballX+0.1 < P2x +0.2 && ballY + 0.05 > P2y - 0.15 && ballY - 0.05 < P2y + 0.15){

    ballSX += 0.001;
    ballSX = 0 - ballSX;
    //console.log(ballSX);
    if(ballY > P2y){
      ballSY += (0.05*(ballY-P2y));
      //console.log (ballSY)
    }else{
      ballSY -= (0.05*(P2y - ballY));
     // console.log (ballSY)
    }


  }

  if(ballX+0.1 > P1x && ballX+0.1 < P1x +0.2 && ballY + 0.05 > P1y - 0.15 && ballY - 0.05 < P1y + 0.15){

    ballSX -= 0.001;
    ballSX = 0 - ballSX;
    //console.log(ballSX);
    if(ballY > P1y){
      ballSY += (0.05*(ballY-P1y));
     // console.log (ballSY)
    }else{
      ballSY -= (0.05*(P1y-ballY));
     // console.log (ballSY)
    }

  }

  if(ballY + 0.05 > 0.7){

    ballSY = 0 - ballSY;

  }

  if(ballY - 0.05 < -0.7){

    ballSY = 0 - ballSY;

  }

  if(ballX+0.05 > 1){

    gl.clearColor(1, 0, 0, 1);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  winner = true;

  }

  if(ballX-0.05 < -1){

    gl.clearColor(0, 0, 1, 1);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

    winner = true;

  }

  window.addEventListener("keydown", keydow);
  window.addEventListener("keyup",keyu);
  move();

  if(!winner){
  requestAnimationFrame(tick);
  }

  };
  tick();

  }

 


function initVertexBuffers(gl) {
  var arr = [

	1, 0.7, 0.0, 1.0, 0.0,
	-1, 0.7, 0.0, 1.0, 0.0,
	-1, -0.7, 0.0, 1.0, 0.0,
	1, -0.7, 0.0, 1.0, 0.0,
	
	0.0, 0.15, 1.0, 0.0, 0.0,
	0.0, -0.15, 1.0, 0.0, 0.0,
	0.05, 0.15, 1.0, 0.0, 0.0,
	0.05, -0.15, 1.0, 0.0, 0.0,

	0.0, 0.15, 0.0, 0.0, 1.0,
	0.0, -0.15, 0.0, 0.0, 1.0,
	-0.05, 0.15, 0.0, 0.0, 1.0,
	-0.05, -0.15, 0.0, 0.0, 1.0



  ];
  var n=0; // The number of vertices

  arr.push(x);
  arr.push(y);
  arr.push(0.0);
  arr.push(1.0);
  arr.push(0.0);

    for(var i = 0; i <= 360; i++ ){
		  arr.push((0.05*Math.sin(i)) + x);
      arr.push((0.05*Math.cos(i)) + y);
      arr.push(0.0);
      arr.push(1.0);
      arr.push(0.0);
		  n++;
	  }

  
    //console.log(n);

  var  verticesColors = new Float32Array(arr);
    
      // Create a buffer object
  var vertexColorBuffer = gl.createBuffer();  
  if (!vertexColorBuffer) {
    console.log('Failed to create the buffer object');
    return false;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW);
	  
  var FSIZE = verticesColors.BYTES_PER_ELEMENT;

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 5, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
  if(a_Color < 0) {
    console.log('Failed to get the storage location of a_Color');
    return -1;
  }

  gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
  gl.enableVertexAttribArray(a_Color);  // Enable the assignment of the buffer object

   gl.bindBuffer(gl.ARRAY_BUFFER, null);

  return n;
}

function change(){

	var radian = Math.PI * angle / 180.0;
	var cosB = Math.cos(radian), sinB = Math.sin(radian);

	xformMatrix = new Float32Array([
		cosB + Sx,  sinB,  0.0,  0.0,
	   -sinB,  cosB + Sy,  0.0,  0.0,
		0.0,  0.0,  0.0,  0.0,
		Tx,  Ty,   0.0,  1.0
	]);

	return xformMatrix;

  }

function move(){

  var speed = 0.02;

  if(arr[0] && arr[2]){

    if (P1y <= 0.55){
      P1y += speed;
    }
    if(P2y <= 0.55){
      P2y += speed;
    }

  }else if(arr[1] && arr[3]){

    if(P1y >= -0.55){
      P1y -= speed;
    }
    if(P2y >= -0.55){
      P2y -= speed;
    }

  }else if (arr[0] && arr[3]){

    if (P1y <= 0.55){
      P1y += speed;
    }
    if(P2y >= -0.55){
      P2y -= speed;
    }

  }else if(arr[1] && arr[2]){

    if(P1y >= -0.55){
      P1y -= speed;
    }
    if(P2y <= 0.55){
      P2y += speed;
    }

  }else if (arr[0]){
    
    if (P1y <= 0.55){
      P1y += speed;
    }

  }else if (arr[1]){

    if(P1y >= -0.55){
      P1y -= speed;
    }

  }else if (arr[2]){

    if(P2y <= 0.55){
      P2y += speed;
    }

  }else if (arr[3]){

    if(P2y >= -0.55){
      P2y -= speed;
    }

  }

	
}


function keydow(e){
//  console.log("press");
//  console.log(event.key)

  switch(e.key){

		case 'w':{
			arr[0] = true;
			break;
		}

		case 's':{
			arr[1]=true;
			break;
    }
    
    case 'ArrowUp':{
			arr[2]=true;
			break;
    }
    
    case 'ArrowDown':{
			arr[3]=true;
			break;
		}


	}
}

function keyu(e){
//  console.log("press");
//  console.log(event.key)

  switch(e.key){

		case 'w':{
			arr[0] = false;
			break;
		}

		case 's':{
			arr[1]=false;
			break;
    }
    
    case 'ArrowUp':{
			arr[2]=false;
			break;
    }
    
    case 'ArrowDown':{
			arr[3]=false;
			break;
		}


	}
}




	



