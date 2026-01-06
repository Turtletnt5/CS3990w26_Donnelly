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

var px = -0.6;
var py = 0.3;

var dot1 = [0.0,0.1];
var dot2 = [0.0,0.2];
var dot3 = [0.0,0.3];
var dot4 = [0.0,0.4];
var x = 0;
var y = 0;

var revese = false;

var arr = [false,false,false,false];


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

  Tx = -0.65, Ty = 0.35;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);//draw spawn

  Tx = -0.65, Ty = 0.25;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);//draw spawn

  Tx = -0.65, Ty = 0.15;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);//draw spawn

  Tx = -0.65, Ty = 0.05;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);//draw spawn


  Tx = -0.5, Ty = 0;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4);//draw path

  Tx = 0.65, Ty = 0.45;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);//draw spawn

  Tx = 0.65, Ty = 0.35;
  angle = 0;
  Sx = 0.0, Sy = 0.0
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);//draw spawn

  Tx = 0.65, Ty = 0.25;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);//draw spawn

  Tx = 0.65, Ty = 0.15;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);//draw spawn


  Tx = -0.5, Ty = 0;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4);//draw path

  Tx = -0.4, Ty = 0;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4);//draw path

  for(var fx = -0.4; fx < 0.5;fx += 0.1){
	for(var fy = 0.1; fy < 0.5; fy+= 0.1){

		Tx = fx, Ty = fy;
		angle = 0;
		Sx = 0.0, Sy = 0.0;
		xformMatrix = change();
		gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
		gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4);//draw path
	  

	}


  }

  Tx = 0.5, Ty = 0.5;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4);//draw path

  Tx = 0.4, Ty = 0.5;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4);//draw path





  Tx = dot1[0], Ty = dot1[1];
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_FAN, 12, n);//draw blue dot1

  Tx = dot2[0], Ty = dot2[1];
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_FAN, 12, n);//draw blue dot2

  Tx = dot3[0], Ty = dot3[1];
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_FAN, 12, n);//draw blue dot3

  Tx = dot4[0], Ty = dot4[1];
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_FAN, 12, n);//draw blue dot4

  Tx = px, Ty = py;
  angle = 0;
  Sx = 0.0, Sy = 0.0;
  xformMatrix = change();
  gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);//draw player


  if(!revese){
	  dot1[0] += 0.01;
	  dot2[0] -= 0.01;
	  dot3[0] += 0.01;
	  dot4[0] -= 0.01;
  }else{
	dot1[0] -= 0.01;
	dot2[0] += 0.01;
	dot3[0] -= 0.01;
	dot4[0] += 0.01;
  }

  if(dot1[0] > 0.4){
	  revese = true;
  }

  if(dot1[0] < -0.4){
	revese = false;
}

 
window.addEventListener("keydown", keydow);
  window.addEventListener("keyup",keyu);
  move();


  if(px - 0.03 < dot1[0] + 0.03 && dot1[0] - 0.03 < px + 0.03 && py - 0.03 < dot1[1] + 0.03 && dot1[1] - 0.03 < py + 0.03 ){

    px = -0.6;
    py = 0.3;

  }

  if(px - 0.03 < dot2[0] + 0.03 && dot2[0] - 0.03 < px + 0.03 && py - 0.03 < dot2[1] + 0.03 && dot2[1] - 0.03 < py + 0.03 ){

    px = -0.6;
    py = 0.3;

  }

  if(px - 0.03 < dot3[0] + 0.03 && dot3[0] - 0.03 < px + 0.03 && py - 0.03 < dot3[1] + 0.03 && dot3[1] - 0.03 < py + 0.03 ){

    px = -0.6;
    py = 0.3;

  }

  if(px - 0.03 < dot4[0] + 0.03 && dot4[0] - 0.03 < px + 0.03 && py - 0.03 < dot4[1] + 0.03 && dot4[1] - 0.03 < py + 0.03 ){

    px = -0.6;
    py = 0.3;

  }

//console.log("player x " + px);
//console.log("player y " + py);
  
  requestAnimationFrame(tick);


  };
  tick();
}
  

 


function initVertexBuffers(gl) {
  var arr = [
	
	0.03, 0.03,   1.0, 0.0, 0.0,
	-0.03,0.03,   1.0, 0.0, 0.0,
	0.03,-0.03,   1.0, 0.0, 0.0,
	-0.03,-0.03,  1.0, 0.0, 0.0,

	0.1, 0.1,   0.6, 1.0, 0.4,
	-0.1, 0.1,  0.6, 1.0, 0.4,
	0.1, -0.1,  0.6, 1.0, 0.4,
	-0.1, -0.1, 0.6, 1.0, 0.4,

	0.05, 0.05,   1.0, 1.0, 1.0,
	-0.05, 0.05,   1.0, 1.0, 1.0,
	0.05, -0.05,   1.0, 1.0, 1.0,
	-0.05, -0.05,   1.0, 1.0, 1.0,

  ];
  var n=0; // The number of vertices

  arr.push(x);
  arr.push(y);
  arr.push(0.0);
  arr.push(0.0);
  arr.push(1.0);

    for(var i = 0; i <= 360; i++ ){
		  arr.push((0.03*Math.sin(i)) + x);
      arr.push((0.03*Math.cos(i)) + y);
      arr.push(0.0);
      arr.push(0.0);
      arr.push(1.0);
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

  function keydow(e){
	//  console.log("press");
	 // console.log(event.key)
	
	  switch(e.key){
	
			case 'ArrowLeft':{
				arr[0] = true;
				break;
			}
	
			case 'ArrowRight':{
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
	//console.log(event.key)
	
	  switch(e.key){
	
			case 'ArrowLeft':{
				arr[0] = false;
				break;
			}
	
			case 'ArrowRight':{
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

function move(){

	if(arr[0]){

		if((-0.72 < px && px < -0.55) || (-0.41 < px && px < 0.5 && 0.0 <= py && py < 0.42) || (0.38 < px && py > 0.42) || (px > -0.72 && py <= 0.02) || (px > 0.59 && px < 0.73)){
			px -=0.01
		}

	}else if(arr[1]){

		if((-0.75 < px && px < -0.58) || (px < -0.38 && py < 0.02) || (px > -0.42 && py >= 0.08 && px < 0.42) || (px < 0.72&& px > 0.38  && py > 0.48) || (px < 0.72 && px > 0.58) ) {
			px += 0.01;
		}

	}else if(arr[2]){

		if((px > -0.73 && px < -0.55 && py < 0.42) || (px > -0.58 && px < -0.42 && py < 0.01) || (px > -0.42 && px < 0.48 && py < 0.42) || (px > 0.38 && py < 0.52)){
			py += 0.01
		}

	}else if(arr[3]){

		if((px > -0.72 && px < -0.37 && py > -0.02) || (px > - 0.37 && px < 0.43 && py > 0.08) || (px > 0.43 && px < 0.6 && py > 0.48) || (px > 0.6 && py > 0.08)){
			py -=0.01;
		}

	}



}





	



