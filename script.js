//STICKY NAV BAR//
window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
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





function showFeedFrontPage(feed) {
    const templateFrontPage = document.querySelector("#templateWrapperFrontPage").content;
    const clone = templateFrontPage.cloneNode(true);

    clone.querySelector(".postImg").src = feed.media_url;
//    console.log(feed.media_url)
    document.querySelector(".instaFeed").appendChild(clone);
}
