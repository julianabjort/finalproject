function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//###############   Instagram short feed    #########
const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJVdFFSb1F6d0JOWnI3OVhmbks0VC1uSndkblBtRi1rTUNWcUJGQjNPeXhMRDNEQk9KNmM1TlpZAcU5VX2Q1a0xTa3J1MkpGMXdWUGdKQnZAzRkExdk1VSm9vNXB6Qld4cTlZAWGIzZAWNwY1ZA2WDc4SgZDZD';

fetch(url)
    .then(res => res.json())
    .then(handleData)

function handleData(feed) {
//    console.log(feed)

    for (let i = 0; i <= 3; i++) {
        showFeedFrontPage(feed.data[i])
        //        console.log(x)
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("myTopnav");
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
      header.classList.add("header");
  } else {
    navbar.classList.remove("sticky");
  }
}



function showFeedFrontPage(feed) {
    const templateFrontPage = document.querySelector("#templateWrapperFrontPage").content;
    const clone = templateFrontPage.cloneNode(true);

    clone.querySelector(".postImg").src = feed.media_url;
//    console.log(feed.media_url)
    document.querySelector(".instaFeed").appendChild(clone);
}
