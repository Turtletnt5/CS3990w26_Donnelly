import {generateNews} from './news.js';


function main(){
    let arrResourses = [
        {newsTitle:'Captcha image 1 stumps students, wondering why they need animals in a Javascript class',
        srcImg:'capchaImage/img1.png',
        newsContent:'Students are puzzled by the need for animals in a Javascript class.' +
            ' As teacher is using the animals to teach students about ' +
            'Javascript classes and constructors.'},
        {newsTitle:'Captcha image 2 loved by students',
        srcImg:'capchaImage/img2.png',
        newsContent:'Students love the box class of captcha image 2. The students turned ' +
            'it into a game. Creating the craziest css box possible. Including an unconfirmed ' +
            'deceased cat stuck in a box.'},
        {newsTitle:'Captcha image 3 Easily Solved by Students',
            srcImg:'capchaImage/img3.png',
            newsContent:'Students easily realized that image 3 of the captcha is SQL code and ' +
                'ignored it.'}
    ]

    generateNews(arrResourses);

}

main();
