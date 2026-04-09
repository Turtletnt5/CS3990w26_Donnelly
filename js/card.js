

export default class Card {

    constructor(Title, Description,target, message, info) {
        this.title = Title;
        this.description = Description;
        this.isFlipped = false;
        this.target = target;
        this.card = null;
        this.completed = false;
        this.message = message;
        this.info = info;
    }

    flip() {
        this.isFlipped = !this.isFlipped;
    }

    showCard(extra = null) {

        if(this.card == null) {
            this.card = document.createElement('div');
            this.card.classList.add('card');
            this.target.appendChild(this.card);
            const clickHandler = () => {
                this.flip();
                this.showCard(extra);
                this.card.removeEventListener('click', clickHandler);
                setTimeout(() => {
                    this.card.addEventListener('click', (event) => this.secondClick(event));
                }, 1000);
            };
            this.card.addEventListener('click', clickHandler);

        }

        if(this.isFlipped) {

            let title = document.createElement('h3');
            title.textContent = this.title;
            this.card.appendChild(title);
            let description = document.createElement('p');
            description.textContent = this.description;
            this.card.appendChild(description);
            if (extra !== null) {
                this.card.appendChild(extra);
            }
        }


        
    }

    showMessage(text) {
        this.message.textContent = text;
        setTimeout(() => {
            this.message.textContent = '';
        }, 5000);
    }

    showInfo(text) {
        this.info.textContent = text;
        setTimeout(() => {
            this.info.textContent = '';
        }, 5000);
    }

    secondClick(event){
        this.showMessage('You have already completed this card');
    }

}

export class multipleChoiceCard extends Card {
    constructor(Title, Question, Options, Answer, target, Score, message, info) {
        super(Title, Question, target, message, info);
        this.options = Options;
        this.answer = Answer;
        this.score = Score;
        this.radios = [];
        this.submitButton = null;
    }

    showCard(extra = null) {

        if(this.isFlipped){
            if (extra === null) {
                extra = document.createElement('div');
            }
            let options = document.createElement('ul');
            extra.appendChild(options);


            this.options.forEach(option => {
                let radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = this.title;
                radio.value = option;
                this.radios.push(radio);
                let label = document.createElement('label');
                label.textContent = option;
                options.appendChild(radio);
                options.appendChild(label);
                options.appendChild(document.createElement('br'));
            });

            let submitButton = document.createElement('button');
            submitButton.textContent = 'Check Answer';
            submitButton.addEventListener('click', () => this.checkAnswer());
            extra.appendChild(submitButton);
            this.submitButton = submitButton;
        }

        super.showCard(extra);
    }

    checkAnswer() {
        let correct = false;
        this.submitButton.disabled = true;
        this.radios.forEach(radio => {
            radio.disabled = true;

            if (radio.checked) {
                if (radio.value == this.answer) {
                    this.score[0] += 1;
                    correct = true;
                }
            }
        })

        if(correct) {
            this.showMessage('You answered Correct!');
            this.showInfo('You have earned 1 point');
        }else{
            this.showMessage('You answered Incorrect!');
            this.showInfo('You have not earned any points');
        }

        this.completed = true;
    }

    secondClick(event) {

        if(event.target.tagName === 'DIV' || event.target.tagName === 'UL') {
            if (this.completed) {
                this.showMessage('You have already completed this card');
            } else {
                this.showMessage('Select your answer and check it to see if you are correct');
            }
        }
    }
}

export class instantCard extends Card {
    constructor(Title, Description, points, target, score, message, info) {
        super(Title, Description, target, message, info);
        this.points = points;
        this.score = score;
        this.firstFlip = true;
    }

    showCard(extra = null) {

        if (this.isFlipped && this.firstFlip){
            this.score[0] += this.points;
            this.firstFlip = false;
            this.completed = true;
            this.showMessage('You have activated an instant card');
            if(this.points > 0) {
                this.showInfo('You have earned ' + this.points + ' points');
            } else if (this.points < 0){
                this.showInfo('You have lost ' + (this.points * -1) + ' points');
            }
            else{
                this.showInfo('You have not earned any points');
            }
        }

        super.showCard(extra);
    }

    secondClick(event) {
        this.showMessage('You can only activate this card once.')
    }
}