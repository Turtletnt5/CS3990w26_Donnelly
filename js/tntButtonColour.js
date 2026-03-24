import tntButton  from "./tntButton.js";


export default class tntButtonColour extends tntButton {

    constructor(btnText, btnBgColour, btnTitle, btnFontColour){

        super(btnText, btnBgColour, btnTitle);
        this.btnFontColour = btnFontColour;

    }

    show() {
        const button = document.createElement('button');
        button.textContent = this.btnText;
        button.style.backgroundColor = this.btnBgColour;
        button.style.color = this.btnFontColour;
        button.title = this.btnTitle;
        button.style.margin = '3px';
        button.style.padding = '5px';

        document.getElementById('task1').appendChild(button);

    }
}

