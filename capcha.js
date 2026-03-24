
window.onload = function() {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'capcha.css';
    document.head.appendChild(link);

    let div = document.createElement('div');
    div.id = 'capcha';
    div.className = 'capcha';
    div.innerHTML = '<div class="capcha-content"><div class="capcha-question"><p>Select all box\'s that contain</p><h1>WebDev</h1></div><div class="capcha-boxs"><label class="box1"><input type="checkbox" id="box1" name="box1" ><img src="capchaImage/img1.png" alt="Image 1"></label><label class="box2"><input type="checkbox" id="box2" name="box2" ><img src="capchaImage/img2.png" alt="Image 2"></label><label class="box3"><input type="checkbox" id="box3" name="box3" ><img src="capchaImage/img3.png" alt="Image 3"></label><label class="box4"><input type="checkbox" id="box4" name="box4" ><img src="capchaImage/img4.png" alt="Image 4"></label><label class="box5"><input type="checkbox" id="box5" name="box5" ><img src="capchaImage/img5.png" alt="Image 5"></label><label class="box6"><input type="checkbox" id="box6" name="box6" ><img src="capchaImage/img6.png" alt="Image 6"></label></div><label class="submit"><button type="button" onclick="validateCapcha()">Submit</button></label></div>\n';
    document.body.appendChild(div);
}


function validateCapcha() {
    const box1 = document.getElementById('box1').checked;
    const box2 = document.getElementById('box2').checked;
    const box3 = document.getElementById('box3').checked;
    const box4 = document.getElementById('box4').checked;
    const box5 = document.getElementById('box5').checked;
    const box6 = document.getElementById('box6').checked;

    // Check if only box1, box2, and box5 are checked
    if (box1 && box2 && box5 && !box3 && !box4 && !box6) {
        document.getElementById('capcha').style.display = 'none';
    } else {
        alert('Incorrect.');
    }
}