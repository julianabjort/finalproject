document.addEventListener("DOMContentLoaded", ready);

//SHOP ITEM//
fetch("https://andreimihutoni.com/wp_tate/wp-json/wp/v2/item/?per_page=100")
    .then((res) => res.json())
    .then(handleData);

function handleData(items) {
    console.log(items);
    items.forEach(showItems);
}

function showItems(items) {
//    console.log(items);
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".oneImage").src = items.image.guid;
    copy.querySelector("h3").textContent = items.title.rendered;
    copy.querySelector(".price span").textContent = items.price;
    copy.querySelector(".shop-item-button").id = items.id;
    copy
        .querySelector(".shop-item-button")
        .addEventListener("click", addToCartClicked);
    const a = copy.querySelector("a");
    a.href += items.id;

    document.querySelector(".shopMain").appendChild(copy);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
};

var overflow = document.getElementById("myTopnav");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    overflow.classList.remove("topnavOverflow");
}
var btn = document.getElementById("click");
btn.onclick = function () {
    myFunction1();
};

function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar" || x.className === "navbar topnavOverflow") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


// ###################   Search bar
const wpLink = "http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item";

function searchByKeyword(value) {
    console.log(value);

    fetch(wpLink + `?search=${value}`)
        .then((f) => f.json())
        .then((searchedData) => {
            searchedData.forEach((item) => {
                const template = document.querySelector("template").content;
                const copy = template.cloneNode(true);

                copy.querySelector(".oneImage").src = item.image.guid;
                copy.querySelector("h2").textContent = item.title.rendered;
                copy.querySelector(".price span").textContent = item.price;

                document.querySelector(".searchResultWrapper").appendChild(copy);
            });
        });

    //remove search from previous entries
    document.querySelector(".searchResultWrapper").innerHTML = "";
}







//     Add to cart functionality
// Inspiration from  https://github.com/WebDevSimplified/Introduction-to-Web-Development

function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }


    document.querySelectorAll(".shop-item-button").forEach((item) => {
        item.addEventListener("click", (event) => {
            addToCartClicked(event);
        });
    });


    document
        .getElementsByClassName("btn-purchase")[0]
        .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
    alert("Thank you for your purchase");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    console.log(event.target.id);
    var id = event.target.id;
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    shopItem.id = id;
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
    console.log(title);
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    console.log(cartItems[0]);
    console.log(cartItems);
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("This item is already added to the cart");
            return;
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <div class="cart-price cart-column">${price}</div>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="whitebutton btn-danger" type="button">REMOVE</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow
        .getElementsByClassName("btn-danger")[0]
        .addEventListener("click", removeCartItem);
    cartRow
        .getElementsByClassName("cart-quantity-input")[0]
        .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName(
            "cart-quantity-input"
        )[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart-total-price")[0].innerText =
        "$" + total;
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

