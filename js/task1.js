
let number = 0;
let news = [];


function randomNumber(min=0,max=100){

    return Math.floor(Math.random() * (max - min + 1) + min);

}

function updateNumberDisplay(){
    let rngNumber = document.getElementById("RNGNumber");
    rngNumber.textContent = number;

    while(news.length < number){
        news.push(new News('News ' + (news.length + 1), 'To query data from both artists and albums tables, you can use an INNER JOIN, LEFT JOIN, or CROSS JOIN clause. Each join clause determines how SQLite uses data from one table to match with rows in another table.'));
        news[news.length - 1].displayNews(document.getElementById("news"));
    }

    while(news.length > number){
        news[news.length - 1].removeNews();
        news.pop();
    }

}

function RNGButton(){
    number = randomNumber();
    updateNumberDisplay();
}

function incromentNumber(){
    number++;
    updateNumberDisplay();
}

function decrementNumber(){
    number--;
    updateNumberDisplay();
}

class News {
    title = '';
    description = '';
    div = null;
    constructor(title,description) {
        this.title = title;
        this.description = description;
    }

    displayNews(target){

        this.div = document.createElement('div');
        let title = document.createElement('h2');
        let description = document.createElement('p');
        let removeButton = document.createElement('button');
        title.textContent = this.title;
        description.textContent = this.description;
        removeButton.textContent = 'Remove';
        this.div.appendChild(title);
        this.div.appendChild(description);
        this.div.appendChild(removeButton);
        target.appendChild(this.div);

    }


    removeNews(){
        let parentElement = this.div.parentElement;
        parentElement.removeChild(this.div);
    }


}