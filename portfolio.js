//  ###   Instagram feed basic display  ###

const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJVdFFSb1F6d0JOWnI3OVhmbks0VC1uSndkblBtRi1rTUNWcUJGQjNPeXhMRDNEQk9KNmM1TlpZAcU5VX2Q1a0xTa3J1MkpGMXdWUGdKQnZAzRkExdk1VSm9vNXB6Qld4cTlZAWGIzZAWNwY1ZA2WDc4SgZDZD';




fetch(url)
    .then(res => res.json())
    .then(handleInstagramData)

function handleInstagramData(feed) {
        console.log(feed.data)

    for (let i = 0; i <= 50; i++) {
        showFeedPortofolio(feed.data[i])
                console.log(i)
    }
}

function showFeedPortofolio(feed) {
    const templatePortofolio = document.querySelector("#templateWrapperPortofolio").content;
    const clone = templatePortofolio.cloneNode(true);

    clone.querySelector(".postImgPortofolio").src = feed.media_url;
    document.querySelector(".instaFeedPortofolio").appendChild(clone);
}
