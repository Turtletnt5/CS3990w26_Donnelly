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

var px = -0.5;
var py = 0;
var pipeX = 0.8;
var pipe1Y = 0.3;
var pipe2Y = -0.3;
var x = 0;
var y = 0;
var grav = -0.01
var speed = -0.02;
var jumpH = 0.03;

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


  Tx = pipeX, Ty = pipe1Y;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); //draw pipe1

  Tx = pipeX, Ty = pipe2Y;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4); //draw pipe2


  Tx = px, Ty = py;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_FAN, 8, n);//draw player


	if(pipeX > -1.15){
		pipeX += speed
	}else{

		pipeX = 1.15;
		pipeH();

	}

	if(py - 0.08 > -1){
		grav -= 0.001;
	}else{
		grav = 0;
	}
	
	py += grav

	if(((py - 0.08) < pipe2Y ||  py + 0.08 > pipe1Y) && (px + 0.08 > pipeX - 0.125 && px - 0.08 < pipeX + 0.125)){

		speed = 0;
		jumpH = 0;

	}

	if(py - 0.08 < -1){

		speed = 0;
		jumpH = 0;

	}


	

	window.addEventListener("keypress",jump);
 

  
  requestAnimationFrame(tick);


  };
  tick();
}
  

 


function initVertexBuffers(gl) {
  var arr = [
	
	0.125, 0.9, 0.0, 1.0, 0.0,
	0.125, 0.0, 0.0, 1.0, 0.0,
	-0.125, 0.9, 0.0, 1.0, 0.0,//top pipe
	-0.125, 0.0, 0.0, 1.0, 0.0,

	0.125, 0.0, 0.0, 1.0, 0.0,
	0.125, -0.9, 0.0, 1.0, 0.0,
	-0.125, 0.0, 0.0, 1.0, 0.0,// bottom pipe
	-0.125, -0.9, 0.0, 1.0, 0.0



  ];
  var n=0; // The number of vertices

  arr.push(x);
  arr.push(y);
  arr.push(1.0);
  arr.push(1.0);
  arr.push(0.0);

    for(var i = 0; i <= 360; i++ ){
		  arr.push((0.08*Math.sin(i)) + x);
      arr.push((0.08*Math.cos(i)) + y);
      arr.push(1.0);
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


  function jump(){

	grav = jumpH

  }

  function pipeH(){

	pipe1Y = 0.3
	pipe2Y = -0.3;

	var  mov = Math.floor(Math.random() * 4);
	var add = Math.floor(Math.random() * 2);

	mov /= 10;
	console.log(mov);

	if(add == 1){
		pipe1Y += mov;
		pipe2Y += mov;
	}else{
		pipe1Y -= mov;
		pipe2Y -= mov;
	}


  }






	



