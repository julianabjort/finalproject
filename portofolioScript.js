//  ###   Instagram feed basic display  ###

const url = 'https://graph.instagram.com/me/media?fields=username,id,caption,media_url,permalink&access_token=IGQVJVdFFSb1F6d0JOWnI3OVhmbks0VC1uSndkblBtRi1rTUNWcUJGQjNPeXhMRDNEQk9KNmM1TlpZAcU5VX2Q1a0xTa3J1MkpGMXdWUGdKQnZAzRkExdk1VSm9vNXB6Qld4cTlZAWGIzZAWNwY1ZA2WDc4SgZDZD';




fetch(url)
    .then(res => res.json())
    .then(handleInstagramData)

function handleInstagramData(feed) {
    console.log(feed.data)

    for (let i = 0; i <= 50; i++) {
        showFeedPortofolio(feed.data[i])

    }
}

function showFeedPortofolio(feed) {
    const templatePortofolio = document.querySelector("#templateWrapperPortofolio").content;
    const clone = templatePortofolio.cloneNode(true);

    const caption = feed.caption;
        console.log(caption)
    const triggerCaption = caption.search("#thesehappydoodles")
//    console.log(triggerCaption)



    if (triggerCaption >= 0) {
        clone.querySelector(".postImgPortofolio").src = feed.media_url;
        clone.querySelector(".captionOnHover").textContent = feed.caption;
        clone.querySelector(".userNameOnHover").textContent = feed.username;

        clone.querySelector(".OnHoverWrapper").addEventListener('click', function () {
            window.open("https://www.instagram.com/these.happy.doodles/", '_blank');
        })

        document.querySelector(".instaFeedPortofolio").appendChild(clone);


    }


}
