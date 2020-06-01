//SHOP ITEM//
fetch("http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item")
    .then(res => res.json())
    .then(handleData)

function handleData(items) {
    console.log(items);
    items.forEach(showItems)
}

function showItems(item) {
    console.log(item)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".oneImage").src = item.image.guid;
    copy.querySelector("h1").textContent = item.title.rendered;
    copy.querySelector(".price span").textContent = item.price;

    const a = copy.querySelector('a');
    a.href += item.id;

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

