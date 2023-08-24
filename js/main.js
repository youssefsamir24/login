var nameInput = document.getElementById("uName");
var emailInput = document.getElementById("uEmail");
var passInput = document.getElementById("uPass");
var emailLog = document.getElementById("email");
var passLog = document.getElementById("pass");
var alert = document.getElementById("alert");
var alert1 = document.getElementById("alert1");
let signInAlert = document.getElementById('alert-siginin');
let users=[];
let WelcomeUserName = []
$('#alert1').hide(0);
$('#alert').hide(0);
$(signInAlert).hide(0);

//RETRIVE DATA FROM LOCAL STORAGE
if(localStorage.getItem("data")){
    users = JSON.parse(localStorage.getItem("data"));
}else{
    users=[];
}
// SIGN UP FUNCTION
function signUp(){
    if(users.length!=0){
        let pass  =  passInput.value;
        let email =  emailInput.value;
        let name  =  nameInput.value;
        if(existEmail(email)!=false && emptyValues(name,email,pass)!=false){
            $('#alert').hide(500);
            let userValues = {
            pass : passInput.value,
            email : emailInput.value,
            name  : nameInput.value
        }
        users.push(userValues)
        localStorage.setItem("data",JSON.stringify(users));
        $('#alert1').show(1000).hide(2000);
        restInputs();
        }else{
            $('#alert').show(1000);
            document.getElementById('email-exist').innerHTML = "This email is already exist, try to Sign in"
        }
    }else{
        let userValues = {
            pass : passInput.value,
            email : emailInput.value,
            name  : nameInput.value
        }
        users.push(userValues)
        localStorage.setItem("data",JSON.stringify(users));
        $('#alert1').show(1000).hide(2000);
    }
}
//END OF SIGN UP FUNCTION

//SIGN IN FUNCTION

function signIn(){

    for(i=0;i<users.length;i++){
        if(users[i].email.toLowerCase() == emailLog.value.toLowerCase() && users[i].pass == passLog.value){
            restInputsLog();
            $(signInAlert).hide(100);
            // console.log(users[i].pass == passLog.value);
            // console.log(users[i].email.toLowerCase() == emailLog.value.toLowerCase());
            console.log("success");
            WelcomeUserName.push(users[i].name);
            console.log(WelcomeUserName);
            successfullLogin();

            // console.log(typeof gu);
            // window.open("../pages/welcome.html","_self");
            // console.log("hello");   
            // let gu  = WelcomeUserName.pop();
            // console.log(document.getElementById('user-name'));
            // document.getElementById('user-name').innerHTML = gu
            
            
            
        }
        // else{
        //     // console.log(users[i].pass == passLog.value);
        //     // console.log(users[i].email.toLowerCase() == emailLog.value.toLowerCase());
        //     // console.log(users[i].email.toLowerCase());
        //     console.log("Fail");
        //     $(signInAlert).show(500);
        //     // restInputsLog();
            
        // }
    }
}
// function successfullLogin() {
//     window.open("../pages/welcome.html","_self");
//     console.log("mashy");
    
// }
function existEmail(email) {
    for (let i = 0; i < users.length; i++) {
        if(email.toLowerCase()==users[i].email.toLowerCase()){
            return false;
        }
    }
    return true;
}
//function for empty inputs
function emptyValues(name,email,pass) {
    if(name =='' && email =='' && pass == ''){
        return false
    }
    return true
    
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