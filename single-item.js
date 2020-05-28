//SHOP ITEM//
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

//function handleData(items) {
//    console.log(items);
//    items.forEach(showItems)
//}

function showItems(item) {
    console.log(item)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".singleImage").src = item.image.guid;
    //    copy.querySelector("h1").textContent = item.title.rendered;
    //    copy.querySelector(".price span").textContent = item.price;

    //Connecting each item to the view button
    //    const a = copy.querySelector('a');
    //    a.href += item.id;
//    const divItemImage = copy.querySelector('#singleImage');
//    if (divItemImage) {
//        divItemImage.src = item.image.guid;
//    }
    //Putting the copy of the template into main
    document.querySelector("main").appendChild(copy);
}



//window.addEventListener('DOMContentLoaded', getData);
//
//fetch("http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item?_embed")
//    .then(res => res.json())
//    .then(showItem)
//
//function getData() {
//    const urlParams = new URLSearchParams(window.location.search);
//    console.log("URLSearchParams " + window.location);
//    const the_item_id = urlParams.get("item_id");
//    console.log(the_item_id);
//    if (the_item_id) {
//    fetch("http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item/" + the_item_id + "?_embed")
//        .then(res => res.json())
//        .then(showItem)
//} else {
//    fetch("http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item")
//    .then(res => res.json())
//        .then(showItem)
//}
//    }
//
//function showItem(item) {
//    console.log(item);
//
//    const template = document.querySelector("template").content;
//    const copy = template.cloneNode(true);
//
//    copy.querySelector(".singleImage").src = item.image.guid;
//    copy.querySelector("h1").textContent = item.title.rendered;
//
//    //Putting the copy of the template into main
//    document.querySelector("main").appendChild(copy);
//}


//const datalink = "http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item?_embed";
//
//function getData() {
//    const urlParams = new URLSearchParams(window.location.search);
//    console.log("URLSearchParams " + window.location);
//    const the_item_id = urlParams.get("item_id");
//    console.log(the_item_id);
//
//    //
//    if (the_item_id) {
//        fetch("http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item/" + the_item_id +"?_embed")
//        .then(res => res.json())
//        .then(showItems)
//    } else {
//            fetch("http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item/")
//        .then(res => res.json())
//        .then(handleData)
//    }
//
//}
//
//function handleData(items){
//    console.log(items)
//    items.forEach(showItems)
//}
////
//function showItems(item) {
//    console.log(item)
//    const template = document.querySelector("template").content;
//
//    const copy = template.cloneNode(true);
////
//    copy.querySelector(".singleImage").src = item.image.guid;
////    copy.querySelector("h1").textContent = item.title.rendered;
////    copy.querySelector(".price span").textContent = item.price;
//
////Putting the copy of the template into main
//    document.querySelector("main").appendChild(copy);
//}
