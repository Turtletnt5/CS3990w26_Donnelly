

let age = prompt("Enter users age.");

age = parseInt(age, 10)

let content;
window.onload = function(){
    content = document.getElementById("content");

    if (age < 18){
        content.innerHTML += '<h1>Content is not avalible due to age restrictions</h1>';
    } else if(18 < age && age < 55){
        let animal = prompt("Enter name of animal. (Valid value: Cat|Dog|Turtle)");

        switch(animal.toLowerCase()){

            case "cat":
                content.innerHTML += '<img src="/img/cat.png" alt="cat" >';
                break;

            case "dog":
                content.innerHTML += '<img src="/img/dog.jpg" alt="dog" >';
                break;

            case "turtle":
                content.innerHTML += '<img src="/img/turtle.jpeg" alt="turtle" >';
                break;

            default:
                alert("Invalid Animal entered.");
        }

    }else if (age > 55){
        content.innerHTML += '<p>Much like mathematics, programming is a logico-deductive system. And I think the important point that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. However, insofar as there is art in mathematics, there is philosophy in mathematics. Insofar as there is art in programming, there is philosophy in programming</p>';

    }
};