var cartbtn = document.getElementById("cartbtn")
cartbtn.onclick = function() {myFunction2()};

function myFunction2() {
  var element, name, arr;
  element = document.getElementById("slide");
  name = "active";
  arr = element.className.split(" ");
    var body = document.getElementById("body");
    var dark = document.getElementsByClassName("bodydark");
  if (arr.indexOf(name) == -1) {
    element.classList.add("active");
    body.classList.add("bodydark");
  }
  else{
      element.classList.remove("active");
      body.classList.remove("bodydark")

  }
}
