window.onload = function(){

    let adminPass = generatePassword();
    alert("Admin Password: " + adminPass)

    let user = prompt("Enter Username");
    let pasw;
    let attempt = 0;
    let login = false;

    switch(user.toLowerCase()){

        case "admin":
            attempt = 2;
            login = false;
            for(i = 0; i < attempt; i++){
                pasw = prompt("Enter Password");

                if(adminPass == pasw){
                    login = true;
                    break;
                }else{
                    alert("Incorrect Password")
                }
            }
            if(login){
                let age = prompt("Enter student age: ");
                let year = prompt("Enter year of admission: ")
                age = parseInt(age) + 4;
                year = parseInt(year) + 4;
                alert("Student will graduate in " + year + " and be " + age + " years old.")
            }else{
                alert("access Denied");
            }
        break;

        case "designer":
            attempt = 3;
            login = false;
            for(i = 0; i < attempt; i++){
                pasw = prompt("Enter Password");

                if("111" == pasw){
                    login = true;
                    break;
                }else{
                    alert("Incorrect Password")
                }
            }
            if(login){
                let portfolioDesigner = prompt("How many big is your portfolio: ");
                portfolioDesigner = parseInt(portfolioDesigner);
                let ageDesigner = prompt("How old are you: ");
                ageDesigner = parseInt(ageDesigner);

                if(ageDesigner >= 14 && ageDesigner <= 18 && portfolioDesigner >= 5 && portfolioDesigner <= 10){
                    alert("Avalible discount 10% off Adobe XD")
                }else if(ageDesigner > 18 && portfolioDesigner >= 10 && portfolioDesigner <= 20){
                    alert("Avalible discount 7% off Adobe XD")
                }else{
                    alert("No discounts currently avalible");
                }

            }else{
                alert("access Denied");
            }
        break;

        case "tester":
            attempt = 3;
            login = false;
            for(i = 0; i < attempt; i++){
                pasw = prompt("Enter Password");

                if("222" == pasw){
                    login = true;
                    break;
                }else{
                    alert("Incorrect Password")
                }
            }
            if(login){
                let portfolioTester = prompt("How many big is your portfolio: ");
                portfolioTester = parseInt(portfolioTester);
                let ageTester = prompt("How old are you: ");
                ageTester = parseInt(ageTester);

                if(ageTester >= 14 && ageTester <= 18 && portfolioTester >= 5 && portfolioTester <= 10){
                    alert("Avalible discount 10% off QA Pro")
                }else if(ageTester > 18 && portfolioTester >= 10 && portfolioTester <= 20){
                    alert("Avalible discount 7% off QA Pro")
                }else{
                    alert("No discounts currently avalible");
                }
            }else{
                alert("access Denied");
            }
        break;

        default:
            alert("User Not found")
    }

}

function generatePassword(){

    let pasw = "";

    for (i = 0; i < 6; i++){
        pasw += Math.floor(Math.random() * 10);
    }

    return pasw;
}