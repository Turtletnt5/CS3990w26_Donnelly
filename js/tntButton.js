


export default class tntButton {

    constructor(btnText, btnBgColour, btnTitle) {

        this.btnText = btnText;
        this.btnBgColour = btnBgColour;
        this.btnTitle = btnTitle;

    }

    show() {
        const button = document.createElement('button');
        button.textContent = this.btnText;
        button.style.backgroundColor = this.btnBgColour;
        button.title = this.btnTitle;
        button.style.margin = '3px';
        button.style.padding = '5px';

        document.getElementById('task1').appendChild(button);
    }

}