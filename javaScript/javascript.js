let r = document.querySelector(':root');

let rgbMode = false



function setPageToDarkMode(){
    r.style.setProperty('--background_colour', 'rgb(9, 24, 31)');
    r.style.setProperty('--font_colour', 'rgb(255, 255, 255)');
    r.style.setProperty('--border_colour', 'rgb(255, 255, 255)');
}

function setPageToLightMode(){
    r.style.setProperty('--background_colour', 'rgba(255, 255, 255, 1)');
    r.style.setProperty('--font_colour', 'rgba(0, 0, 0, 1)');
    r.style.setProperty('--border_colour', 'rgba(0, 0, 0, 1)');
}

function setPageToRGBMode(){
    if(rgbMode){
    r.style.setProperty('--background_colour', 'rgba(255, 255, 255, 1)');
    r.style.setProperty('--font_colour', 'rgba(0, 0, 0, 1)');
    r.style.setProperty('--border_colour', 'rgba(0, 0, 0, 1)');
    }
}

setInterval()



//--background_colour: rgb(9, 24, 31);
//--font_colour: rgb(255, 255, 255);
//--border_colour: rgb(255, 255, 255);