//###############   Instagram short feed    #########



const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJVdFFSb1F6d0JOWnI3OVhmbks0VC1uSndkblBtRi1rTUNWcUJGQjNPeXhMRDNEQk9KNmM1TlpZAcU5VX2Q1a0xTa3J1MkpGMXdWUGdKQnZAzRkExdk1VSm9vNXB6Qld4cTlZAWGIzZAWNwY1ZA2WDc4SgZDZD';

fetch(url)
    .then(res => res.json())
    .then(handleData)

function handleData(feed) {
//    console.log(feed)

    for (let i = 0; i <= 4; i++) {
        showFeedFrontPage(feed.data[i])
        //        console.log(x)
    }
}



function showFeedFrontPage(feed) {
    const templateFrontPage = document.querySelector("#templateWrapperFrontPage").content;
    const clone = templateFrontPage.cloneNode(true);

    const caption = feed.caption;
        console.log(caption)
    const triggerCaption = caption.search("#thesehappydoodles")
//    console.log(triggerCaption)



    if (triggerCaption >= 0) {
        clone.querySelector(".postImgFrontPage").src = feed.media_url;
        clone.querySelector(".captionOnHoverFrontPage").textContent = feed.caption;
        clone.querySelector(".userNameOnHoverFrontPage").textContent = feed.username;

        clone.querySelector(".OnHoverWrapperFrontPage").addEventListener('click', function () {
            window.open("https://www.instagram.com/these.happy.doodles/", '_blank');
        })

        document.querySelector(".instaFeedFrontPage").appendChild(clone);


    }
}





//
//  Show all recent posts
//
//function showFeedFrontPage(feed) {
//    const templateFrontPage = document.querySelector("#templateWrapperFrontPage").content;
//    const clone = templateFrontPage.cloneNode(true);
//
//    clone.querySelector(".postImg").src = feed.media_url;
////    console.log(feed.media_url)
//    document.querySelector(".instaFeed").appendChild(clone);
//}
