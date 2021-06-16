window.onload = changeImage;


let imgIndex = 0;
const image = ['images2/img1.jpg', 'images2/img2.jpg', 'images2/img3.jpg'];
const time = 2500;
function currImage(x) {
    console.log('shaghaala');
  imgIndex = x;
}
if ( localStorage.getItem("admin")===null) {
  localStorage.setItem("admin", "0");
}

function showhide(asdf) {
  if (asdf.style.display !== "block") {
      asdf.style.display = "block";
  }
  else {
      asdf.style.display = "none";
  } }
  
  function changeColour(clr) {
    localStorage.setItem("currColor", clr); 
    changeImage();

  }



// function adminChange() {
 
// }

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
function changeImage2()
{
  document.getElementById('name').style.background = localStorage.getItem("currColor");
  document.getElementById('name1').style.background =  localStorage.getItem("currColor");
 document.getElementById('name3').style.background = localStorage.getItem("currColor");
 document.getElementById('adButton').style.background =  localStorage.getItem("currColor");
}

function changeImage() {
  document.slide.src = image[imgIndex];
 imgIndex++;
 imgIndex %= 3;
  setTimeout("changeImage()", time);
  document.getElementById('name').style.background = localStorage.getItem("currColor");
   document.getElementById('name1').style.background =  localStorage.getItem("currColor");
  document.getElementById('name3').style.background = localStorage.getItem("currColor");
  document.getElementById('adButton').style.background =  localStorage.getItem("currColor");
}
function search() {
  const input = document.getElementById('searchfor');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById('searchList');
  const li = ul.getElementsByTagName('li');

  for (var imgIndex = 0; imgIndex < li.length; imgIndex++) {
    a = li[imgIndex].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText; //todo:google

    if (filter !== "" && txtValue.toUpperCase().indexOf(filter) > -1) {
      li[imgIndex].style.display = "list-item";
    } else {
      li[imgIndex].style.display = "none";
    }
  }
}


function alertt(){
 
 
 alert('New product is added to the cart');
 
}