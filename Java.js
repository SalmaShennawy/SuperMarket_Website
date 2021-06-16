
function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menuContents").classList.toggle("change");

}
    filterSelection("all"); // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function validation(){

    var firstname= document.getElementById('firstname').value;
    var lastname= document.getElementById('lastname').value;
    var passw= document.getElementById('password').value;
    var phonenum= document.getElementById('number').value;
    var address= document.getElementById('address').value;
    var email= document.getElementById('email').value;
   var valid=true;

    if(firstname.length==0)
    {
          valid=false;
       document.getElementById('fn').innerHTML="**Please fill the first name";
        return false;
    }

    if((firstname.length<3) || (firstname.length>20))
    {
  valid=false;
        document.getElementById('fn').innerHTML= "** Please fill the last name between 3 and 20 letters";
        return false;
    }

    if(!isNaN(firstname))
    {   valid=false;
 
        document.getElementById('ln').innerHTML= "** First name shouldn't include any numbers";
        return false;
    }
  
 
    if(lastname.length==0)
    { valid=false;
 
        document.getElementById('ln').innerHTML= "** Please fill the last name";
        return false;
    }
 
    if((lastname.length<3) || (lastname.length>20))
    { valid=false;
 
        document.getElementById('ln').innerHTML= "** Please fill the name between 3 and 20 letters";
        return false;
    }
 
    if(!isNaN(lastname))
    {  valid=false;
 
        document.getElementById('ln').innerHTML= "** Last name shouldn't include any numbers";
        return false;
    }
  

    if(email.length==0)
    {    valid=false;
      
        document.getElementById('em').innerHTML= "** Please fill the email";
        return false;
    }
 

    if(email.indexOf('@')<=0)
    {   valid=false;
    
        document.getElementById('em').innerHTML= "** Email must include @";
        return false;
    }
  

    
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-4)!='.'))
    {   valid=false;
        
        document.getElementById('em').innerHTML= "** Email must include . ";
        return false;
    }

    if(phonenum.length==0)
    { valid=false;
 
        document.getElementById('no').innerHTML= "** Please fill the phone number";
        return false;
    }

    if((phonenum.length<10) || (phonenum.length>11))
    { valid=false;
 
        document.getElementById('no').innerHTML= "** Number of digits should be 10 or 11";
        return false;
    }

    if(isNaN(phonenum))
    {
          valid=false;
        document.getElementById('no').innerHTML= "** Phone number shouldn't include any letters";
        return false;
    }

     if(address.length==0)
    {  valid=false;
 
        document.getElementById('ad').innerHTML= "** please fill the password";
         return false;
    }

    
   if(passw.length==0)
   {  valid=false;
 
       document.getElementById('pw').innerHTML= "** please fill the password";
        return false;
   }
  
   if((passw.length<3) || (passw.length>20))
    {valid=false;
 
        document.getElementById('pw').innerHTML= "** please fill the password between 3 and 20 letters and numbers";
        return false;
    }

 
 
 if(valid==true){
    alert('Your account has been created successfully!');
 
 }


    
}
function showPass()
 {
    var x = document.getElementById("password");
    if (x.type === "password") 
      {
        x.type = "text";
      }
     else 
      {
        x.type = "password";
      }
 }



