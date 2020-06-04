//SINGLE ITEM//
window.addEventListener('DOMContentLoaded', getData);

const datalink = "http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item?_embed";

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    const the_item_id = urlParams.get("item_id");
    console.log(the_item_id);

    fetch("http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item/" + the_item_id + "?_embed")
        .then(res => res.json())
        .then(showItems)

}
function showItems(item) {
    console.log(item)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".singleImage").src = item.image.guid;
    copy.querySelector("h1").textContent = item.title.rendered;
    copy.querySelector("h3 span").textContent = item.price;

    //Putting the copy of the template into main
    document.querySelector("main").appendChild(copy);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

var overflow = document.getElementById("myTopnav")

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
      overflow.classList.remove("topnavOverflow")
  }
var btn = document.getElementById("click")
btn.onclick = function() {myFunction1()};


function myFunction1() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar" || x.className === "navbar topnavOverflow") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//Hiding/showing the cart content
var cartbtn = document.getElementById("cartbtn")
cartbtn.onclick = function() {myFunction2()};

function myFunction2() {
  var element = document.getElementById("slide");

  if (element.className === "slide") {
    element.className += " active";
  }
  else{
      element.classList.remove("active");
  }
}
