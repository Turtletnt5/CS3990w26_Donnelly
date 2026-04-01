import hannaFruits from './fruitList.js'


class fruit{
    constructor(fruit,colour){
        this.fruit=fruit
        this.colour=colour
    }

    showFruit(target){

        let li = document.createElement('li');
        li.style.backgroundColor = this.colour;
        li.classList.add('fruitItem');
        /*li.classList.add('fruitItem'+this.colour.toString());*/

        li.textContent = this.fruit;

        target.appendChild(li)
    }
}

class ratedFruit extends fruit{
    constructor(fruit,colour,rating){
        super(fruit,colour)
        this.rating=rating
    }

    showFruit(target){

        let li = document.createElement('li');
        li.style.backgroundColor = this.colour;
        li.classList.add('fruitItem');
        /*li.classList.add('fruitItem'+this.colour.toString());*/

        li.textContent = this.fruit;
        let div = document.createElement('div');
        div.style.display = 'inline-block';
        div.textContent = 'Star Rating: ';
        for(let i=0;i<5;i++){
            if(i<this.rating){
                let span = document.createElement('span');
                span.textContent = '★';
                div.appendChild(span);
            }else{
                let span = document.createElement('span');
                span.textContent = '☆';
                div.appendChild(span);
            }

        }
        li.appendChild(document.createElement('br'))
        li.appendChild(div);

        target.appendChild(li)
    }
}

class btnColour{
    constructor(colour){
        this.colour=colour
    }

    showColour(target){

        let button = document.createElement('button');
        button.style.backgroundColor = this.colour;
        button.textContent = this.colour;
        button.classList.add('btnColour');
        /*button.addEventListener('click', () => showSelectFruits(this.colour))*/

        target.appendChild(button)

    }
}

function showAllFruits(){
    document.getElementById('fruits').firstElementChild.innerHTML = '';
    fruitList.forEach(fruit => fruit.showFruit(document.getElementById('fruits').firstElementChild))
}

function showSelectFruits(fruitColour){
    document.getElementById('fruits').firstElementChild.innerHTML = '';
    for(let i=0;i<fruitList.length;i++){
        if (fruitColour === fruitList[i].colour){
            fruitList[i].showFruit(document.getElementById('fruits').firstElementChild)
        }
    }
}

function showAllbtnColours(){

    btnColourList.forEach(btnColour => btnColour.showColour(document.getElementById('colours')))
}

let fruitList = hannaFruits.map(hannaFruits => new fruit(hannaFruits.fruit, hannaFruits.colour))
fruitList.push(new ratedFruit('apple', 'red',3));

let btnColourList;

function createbtnColourList(){
    let diffColours = new Set(fruitList.map(fruit => fruit.colour))
    btnColourList = Array.from(diffColours).map(colour => new btnColour(colour))
}

showAllFruits();
createbtnColourList();
showAllbtnColours();


