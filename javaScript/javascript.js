let r = document.querySelector(':root');

let rgbMode = false

let rv = 255;
let gv = 0;
let bv = 0;

let rm = 0;
let gm = 1;
let bm = 0;

let t = 0

function setPageToDarkMode(){
    rgbMode = false;
    r.style.setProperty('--background_colour', 'rgb(9, 24, 31)');
    r.style.setProperty('--font_colour', 'rgb(255, 255, 255)');
    r.style.setProperty('--border_colour', 'rgb(255, 255, 255)');
}

function setPageToLightMode(){
    rgbMode = false;
    r.style.setProperty('--background_colour', 'rgba(255, 255, 255, 1)');
    r.style.setProperty('--font_colour', 'rgba(0, 0, 0, 1)');
    r.style.setProperty('--border_colour', 'rgba(0, 0, 0, 1)');
}

function setPageToRGBMode(){
    rgbMode = true;
}

function rgbBarff(){
    if(rgbMode){

        rv += rm;
        gv += gm;
        bv += bm;



        switch(t){
            //red to yellow
            case 0:
                rm = 0;
                gm = 1;
                bm = 0;
                break;
            //yellow to green
            case 1:
                rm = -1;
                gm = 0;
                bm = 0;
                break;
            //green to cyan
            case 2:
                rm = 0;
                gm = 0;
                bm = 1;
                break;
            //cyan to bloue
            case 3:
                rm = 0;
                gm = -1;
                bm = 0;
                break;
            //blue to purple
            case 4:
                rm = 1;
                gm = 0;
                bm = 0;
                break;
            //purple to re
            case 5:
                rm = 0;
                gm = 0;
                bm = -1;
                break;
        }
        

        if(t == 0 && gv >= 255) t=1;
        if(t == 1 && rv <= 0) t=2;
        if(t == 2 && bv >= 255) t=3;
        if(t == 3 && gv <= 0) t=4;
        if(t == 4 && rv >= 255) t=5;
        if(t == 5 && bv <= 0) t=0;

        r.style.setProperty('--background_colour', 'rgba(' + rv.toString() + ', ' + gv.toString() + ', ' + bv.toString() + ', 1)');
        r.style.setProperty('--font_colour', 'rgba(' + gv.toString() + ', ' + bv.toString() + ', ' + rv.toString() + ', 1)');
        r.style.setProperty('--border_colour', 'rgba(' + bv.toString() + ', ' + rv.toString() + ', ' + gv.toString() + ', 1)');
    }
}

setInterval(rgbBarff, 1)



//--background_colour: rgb(9, 24, 31);
//--font_colour: rgb(255, 255, 255);
//--border_colour: rgb(255, 255, 255);


//--border_colour: rgba(0, 255, 238, 1);