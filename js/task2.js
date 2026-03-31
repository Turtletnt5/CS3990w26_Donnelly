


let originalColor = '--font-colour: rgb(165, 42, 42)';

function setTextColourRGB(rv, gv, bv, SetColour = false){
    let root = document.querySelector(':root');
    root.style.setProperty('--font-colour', 'rgba(' + rv.toString() + ', ' + gv.toString() + ', ' + bv.toString() + ', 1)');
    if (SetColour) {
        originalColor = getComputedStyle(root).getPropertyValue('--font-colour').trim();
    }
}

function setTextColour(colour, SetColour = false){
    let root = document.querySelector(':root');
    root.style.setProperty('--font-colour', colour);
    if (SetColour) {
        originalColor = getComputedStyle(root).getPropertyValue('--font-colour').trim();
    }
}

// Single event listener on the parent container
document.querySelector('.colourSelect').addEventListener('click', function(event) {
    if (event.target.type === 'button') {
        const rgb = event.target.style.backgroundColor;
        setTextColour(rgb, true);
    }
});

document.querySelector('.colourSelect').addEventListener('mouseover', function(event) {
    if (event.target.type === 'button') {
        const rgb = event.target.style.backgroundColor;
        setTextColour(rgb, false);
    }
});


document.querySelector('.colourSelect').addEventListener('mouseout', function(event) {
    if (event.target.type === 'button') {
        setTextColour(originalColor, false);
    }
});