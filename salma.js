window.onload= adminChange;
function showhide(asdf) {
  if (asdf.style.display !== "block") {
      asdf.style.display = "block";
  }
  else {
      asdf.style.display = "none";
  } }
  
  function changeColour(clr) {
    localStorage.setItem("currColor", clr); 
     adminChange(clr);


  }



function adminChange() {
  document.getElementById('name').style.background = localStorage.getItem("currColor");
  console.log('ana hena');
  document.getElementById('name3').style.background = localStorage.getItem("currColor");
  
  document.getElementById('adButton').style.background =  localStorage.getItem("currColor");
}

  function showAdminBar()
  {
    if (localStorage.getItem("admin") === "1")
    {
      document.getElementById('adminBar').style.display = "block";
    }
    else
    {
      alert("Please sign in as an admin");
    }
  }

