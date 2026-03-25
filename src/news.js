

export default class News {
    div = null
    constructor(Title, image, description, likes = 0) {
        this.Title = Title;
        this.image = image;
        this.description = description;
        this.likes = likes;
        this.hidden = false;

    }

    render() {

        let div = document.createElement('div');
        let stars = document.createElement('p');
        let title = document.createElement('h1');
        let image = document.createElement('img');
        let description = document.createElement('p');
        let likes = document.createElement("button");
        let hidden = document.createElement('button');

        div.appendChild(title);
        div.appendChild(stars);
        div.appendChild(image);
        div.appendChild(description);
        div.appendChild(likes);
        div.appendChild(hidden);
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));


        title.textContent = this.Title;

        for(let i = 0; i < this.likes; i++){
            stars.textContent += '⭐';
        }
        stars.style.textWrap = 'wrap';
        stars.style.overflowWrap = 'break-word';

        image.src = this.image;
        image.style.width = '75%';
        description.textContent = this.description;
        likes.textContent = this.likes + ' Likes'
        likes.onclick = () => {
            this.addLike();
            likes.textContent = this.likes + ' Likes';
            stars.textContent += '⭐';
        };
        hidden.textContent = 'Hide';
        hidden.onclick = () => {
            if (!this.hidden){
                image.style.opacity = 0.5;
                hidden.textContent = 'Show';
                this.hidden = true;
                title.style.color = 'darkgrey';
                description.style.color = 'darkgrey';
                likes.disabled = true;
            }else{
                image.style.opacity = 1;
                hidden.textContent = 'Hide';
                this.hidden = false;
                title.style.color = 'black';
                description.style.color = 'black';
                likes.disabled = false;
            }
        };

        this.div = div;
    }

    addLike() {
        this.likes++;
    }

    show(target) {
        target.appendChild(this.div);
    }
}

export function generateNews(arrResources) {

    let news = [];

    arrResources.forEach((item, index) => {
        news[index] = new News(item.newsTitle, item.srcImg, item.newsContent);
        news[index].render();
    })

    let content = document.getElementById('content');
    let children = content.querySelectorAll('p');


    children.forEach((item, index) => {
        news[index].show(item);
    });

}