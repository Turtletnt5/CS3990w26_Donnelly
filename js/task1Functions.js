import tntButton from "./tntButton.js";
import tntButtonColour from "./tntButtonColour.js";

export function createTNTButtonsArray(arrTexts, arrColors) {

    let arrButtons = [];

    arrTexts.forEach((item, index) => {
        arrButtons[index] = new tntButton(arrTexts[index], arrColors[index], 'Button ' + (index + 1));
    });

    return arrButtons;
}

export function createTNTButtonColourArray(arrTexts, arrColours, arrTextColours){

    let arrButtonColours = [];

    arrTexts.forEach((item, index) => {
        arrButtonColours[index] = new tntButtonColour(arrTexts[index], arrColours[index], arrTextColours[index]);
    });

    return arrButtonColours;

}

export function showTNTButtons(arrButtons, delay = 0) {

    arrButtons.forEach((item, index) => {
        setTimeout(() => {
            item.show();
        }, delay * (index));
    });

}
