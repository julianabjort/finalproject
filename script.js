//###############   Instagram short feed    #########
const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJVdFFSb1F6d0JOWnI3OVhmbks0VC1uSndkblBtRi1rTUNWcUJGQjNPeXhMRDNEQk9KNmM1TlpZAcU5VX2Q1a0xTa3J1MkpGMXdWUGdKQnZAzRkExdk1VSm9vNXB6Qld4cTlZAWGIzZAWNwY1ZA2WDc4SgZDZD';

fetch(url)
    .then(res => res.json())
    .then(handleData)


let counter = 0;

function handleData(feed) {
    //    console.log(feed)

    for (let i = 0; i <= 10; i++) {
        const caption = feed.data[i].caption;
        //        console.log(caption)
        const triggerCaption = caption.search("#thesehappydoodles")
        if (triggerCaption >= 0 && counter <=4) {
            showFeedFrontPage(feed.data[i])

        }
        counter += 1;

        //        console.log(x)
    }
}



function showFeedFrontPage(feed) {
    const templateFrontPage = document.querySelector("#templateWrapperFrontPage").content;
    const clone = templateFrontPage.cloneNode(true);

    //    const caption = feed.caption;
    //    console.log(caption)
    //    const triggerCaption = caption.search("#thesehappydoodles")
    //    console.log(triggerCaption)




    clone.querySelector(".postImgFrontPage").src = feed.media_url;
    clone.querySelector(".captionOnHoverFrontPage").textContent = feed.caption;
    clone.querySelector(".userNameOnHoverFrontPage").textContent = feed.username;

    clone.querySelector(".OnHoverWrapperFrontPage").addEventListener('click', function () {
        window.open("https://www.instagram.com/these.happy.doodles/", '_blank');
    })

    document.querySelector(".instaFeedFrontPage").appendChild(clone);
}


// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

var overflow = document.getElementById("myTopnav")

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    overflow.classList.remove("topnavOverflow")
}
var btn = document.getElementById("click")
btn.onclick = function () {
    myFunction1()
};


function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar" || x.className === "navbar topnavOverflow") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
