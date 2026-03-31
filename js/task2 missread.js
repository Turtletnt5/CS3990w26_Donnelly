


let originalColor = '--font-colour: rgb(165, 42, 42)';

function setTextColour(rv, gv, bv, SetColour = false){
    let root = document.querySelector(':root');
    root.style.setProperty('--font-colour', 'rgba(' + rv.toString() + ', ' + gv.toString() + ', ' + bv.toString() + ', 1)');
    if (SetColour) {
        originalColor = getComputedStyle(root).getPropertyValue('--font-colour').trim();
    }
}


function restoreOriginalColor() {
    if (originalColor !== null) {
        let root = document.querySelector(':root');
        root.style.setProperty('--font-colour', originalColor);
    }
}