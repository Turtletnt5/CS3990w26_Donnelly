import { createTNTButtonsArray, showTNTButtons, createTNTButtonColourArray } from "./task1Functions.js";
import tntButtonColour from "./tntButtonColour.js";

function main() {

    const arrTexts = ['Save Progress', 'Click Me', 'Download', 'See more'];
    const arrColors = ['green', 'darkgrey', 'darkgrey', 'red'];

    let arrButtons = createTNTButtonsArray(arrTexts, arrColors);
    arrButtons.push(new tntButtonColour('Bonus Button', 'purple', 'bonus', 'pink'));

    showTNTButtons(arrButtons, 5000);


}

main();