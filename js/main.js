var nameInput = document.getElementById("uName");
var emailInput = document.getElementById("uEmail");
var passInput = document.getElementById("uPass");
var emailLog = document.getElementById("email");
var passLog = document.getElementById("pass");
var alert = document.getElementById("alert");
var users = [];
//RETRIVE DATA FROM LOCAL STORAGE
if(localStorage.getItem("data")){
    users = JSON.parse(localStorage.getItem("data"));
}else{
    users = [];
}

// SIGN UP FUNCTION
function signUp(){
    // console.log("mmm");
    if(localStorage.getItem("data")){
        for(i=0;i<users.length;i++){
            if(users[i].email.toLowerCase() === emailInput.value.toLowerCase()){
                console.log("email");
                restInputs();
            }else if(nameInput.value =='' || emailInput.value =='' || passInput.value ==''){
                console.log("inputs empty");
                restInputs();
            }else{
                var user = {
                name: nameInput.value,
                email : emailInput.value,
                pass : passInput.value
                }
                users.push(user);
                localStorage.setItem("data",JSON.stringify(users));
                restInputs();
            }
        }
    }else{ 
        var user = {
        name: nameInput.value,
        email : emailInput.value,
        pass : passInput.value
        }
        users.push(user);
        localStorage.setItem("data",JSON.stringify(users));
        restInputs();

    }
   
}
//END OF SIGN UP FUNCTION


//SIGN IN FUNCTION

function signIn(){
    
    var signInUsers =JSON.parse(localStorage.getItem("data"));
    console.log(signInUsers);

    for(i=0;i<signInUsers.length;i++){
        if(signInUsers[i].email.toLowerCase() == emailLog.value.toLowerCase() && signInUsers[i].pass == passLog.value){
            console.log(signInUsers[i].pass == passLog.value);
            console.log(signInUsers[i].email.toLowerCase() == emailLog.value.toLowerCase());
            console.log("success");
            restInputsLog();
        }else{
            console.log(signInUsers[i].pass == passLog.value);
            console.log(signInUsers[i].email.toLowerCase() == emailLog.value.toLowerCase());
            console.log(signInUsers[i].email.toLowerCase());
            console.log("Fail");
            restInputsLog();
            
        }
    }
}




function restInputs(){
    nameInput.value="";
    emailInput.value="";
    passInput.value="";
}
function restInputsLog() {
    passLog.value="";
    emailLog.value="";
    
}