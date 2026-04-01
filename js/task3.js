
let menuOpen = false;



document.querySelector('.menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'DIV'){
        toggleMenu();
    }

});

document.querySelector('.menuItems').addEventListener('click', function(event) {
    if (event.target.tagName === 'P') {

        if (event.target.textContent === 'Cake') {
            document.getElementById('display').innerHTML = '<img src="../img/cake.png" alt="Cake" width="100" height="100">';
        } else if (event.target.textContent === 'Donut') {
            document.getElementById('display').innerHTML = '<img src="../img/donut.png" alt="Donut" width="100" height="100">';
        } else if (event.target.textContent === 'Honey') {
            document.getElementById('display').innerHTML = '<img src="../img/honey.png" alt="Honey" width="100" height="100">';
        }

        let p = document.querySelectorAll('.menuItems p');
        p.forEach(p => p.style.color = 'black');
        event.target.style.color = 'rgb(165, 42, 42)';

    }
});

function toggleMenu() {

    let menuItems = document.getElementById('menuItems');
    
    if (menuOpen) {

        menuItems.style.display = 'none';
        document.getElementById('display').innerHTML = "";
        let p = document.querySelectorAll('.menuItems p');
        p.forEach(p => p.style.color = 'black');
        document.getElementById('menuIcon').innerHTML = '▶';

    } else {

        menuItems.style.display = 'block';

        document.getElementById('menuIcon').innerHTML = '▼';
    }

    menuOpen = !menuOpen;

}