
let lang = prompt("Select your language (Eng|Fr|De|Spa)","Eng");

switch(lang.toLowerCase()){

    case "eng":
        alert("Hello");
        break;

    case "fr":
        alert("Bonjour");
        break;

    case "de":
        alert("Hallo");
        break;

    case "spa":
        alert("Hola");
        break;

    default:
        alert("Sorry, but I do not speak your language.");
}