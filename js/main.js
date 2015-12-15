function formValidation()  
{  
var uid = document.registration.userid;  
var passid = document.registration.passid;  
var uname = document.registration.username;  
var uadd = document.registration.address;  
var ucountry = document.registration.country;  
var uzip = document.registration.zip;  
var uemail = document.registration.email;  
var umsex = document.getElementById("male"); 
var message = document.getElementById("message");
// var message = document.getElementById("userid_message");
var ufsex = document.getElementById("female"); 


if(userid_validation(uid,5,12))  
{  
if(passid_validation(passid,7,20))  
{  
if(allLetter(uname))  
{  
if(alphanumeric(uadd))  
{   
if(countryselect(ucountry))  
{  
if(allnumeric(uzip))  
{  
if(ValidateEmail(uemail))  
{  
if(validsex(umsex,ufsex))  
{  
}  
}   
}  
}   
}  
}  
}  
}  
return false;  
} 

function userid_validation(uid,mx,my)  
{  
var uid_len = uid.value.length;  
if (uid_len == 0 || uid_len >= my || uid_len < mx)  
{   
message.innerHTML = "User Id should not be empty / length be between "+mx+" to "+my ;
uid.focus();  
return false;  
}  
return true;  
}  

function passid_validation(passid,mx,my)  
{  
var passid_len = passid.value.length;  
if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
{  
message.innerHTML ="Password should not be empty / length be between "+mx+" to "+my;
passid.focus();  
return false;  
}  
return true;  
}  

function allLetter(uname)  
{   
var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
{  
return true;  
}  
else  
{  
message.innerHTML ='Username must have alphabet characters only';
uname.focus();  
return false;  
}  
}  

function alphanumeric(uadd)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
if(uadd.value.match(letters))  
{  
return true;  
}  
else  
{  
message.innerHTML ='User address must have alphanumeric characters only';
uadd.focus();  
return false;  
}  
}  

function countryselect(ucountry)  
{  
if(ucountry.value == "Default")  
{  
message.innerHTML ='Select your country from the list';
ucountry.focus();  
return false;  
}  
else  
{  
return true;  
}  
}  

function allnumeric(uzip)  
{   
var numbers = /^[0-9]+$/;  
if(uzip.value.match(numbers))  
{  
return true;  
}  
else  
{  
message.innerHTML ='ZIP code must have numeric characters only';
uzip.focus();  
return false;  
}  
}  
function ValidateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
{  
return true;  
}  
else  
{  
message.innerHTML ="You have entered an invalid email address!";
uemail.focus();  
return false;  
}  
} function validsex(umsex,ufsex)  
{  
x=0;  
  
if(umsex.checked)   
{  
x++;  
} if(ufsex.checked)  
{  
x++;   
}  
if(x==0)  
{  
message.innerHTML ='Select Male/Female';
umsex.focus();  
return false;  
}  
else  
{  
message.innerHTML ='Form Succesfully Submitted';
window.location.reload(true);  
return true;  
}  
}  

//accept only numbers 
function numbersonly(e){
    var unicode=e.charCode? e.charCode : e.keyCode
    if (unicode!=8){ //if the key isn't the backspace key (which we should allow)
        if (unicode<48||unicode>57) //if not a number
            return false //disable key press
    }
}