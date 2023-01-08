const cards = document.querySelectorAll(".card");
const rightArrow = document.querySelector(".arrow.right");
const leftArrow = document.querySelector(".arrow.left");

const shoppingCart = document.querySelector(".shopping-cart");
const cartBtns = document.querySelectorAll(".add-to-cart");

let left = 0;
let cardSize = 25.4;
let totalCardSize = cards.length * cardSize - cardSize * 4;

if (window.matchMedia("(max-width: 768px)").matches) {
  cardSize = 52;
  totalCardSize = cards.length * cardSize - cardSize * 2;
}
//Adding function to leftArrow
leftArrow.onclick = () => {
  left -= cardSize;

  if (left <= 0) left = 0;
  moveCards(left);
  checkArrowVisibility(left);
};

leftArrow.style.opacity = "0";
//Adding function to rightArrow
rightArrow.onclick = () => {
  left += cardSize;

  if (left >= totalCardSize) left = totalCardSize;
  moveCards(left);
  checkArrowVisibility(left);
};
//Function to move card
function moveCards(left) {
  for (card of cards) {
    card.style.left = -left + "%";
  }
}
//Function to check if Arrow is visible
function checkArrowVisibility(pos) {
  if (pos == 0) {
    leftArrow.style.opacity = "0";
  } else {
    leftArrow.style.opacity = "1";
  }
  if (pos >= totalCardSize) {
    rightArrow.style.opacity = "0";
  } else {
    rightArrow.style.opacity = "1";
  }
}
// Fly To Shopping Cart Effect

for (cartBtn of cartBtns) {
  cartBtn.onclick = (e) => {
    shoppingCart.classList.add("active");

    let productCount =
      Number(shoppingCart.getAttribute("data-product-count")) || 0;
    shoppingCart.setAttribute("data-product-count", productCount + 1);

    // finding first grand parent of target button
    let targetParent = e.target.parentNode.parentNode.parentNode;
    targetParent.style.zIndex = "100";
    // Creating separate Image
    let img = targetParent.querySelector("img");
    let flyingImg = img.cloneNode();
    flyingImg.classList.add("flying-img");

    targetParent.appendChild(flyingImg);

    // Finding position of flying image

    const flyingImgPos = flyingImg.getBoundingClientRect();
    const shoppingCartPos = shoppingCart.getBoundingClientRect();

    let data = {
      left:
        shoppingCartPos.left -
        (shoppingCartPos.width / 2 +
          flyingImgPos.left +
          flyingImgPos.width / 2),
      top: shoppingCartPos.bottom - flyingImgPos.bottom + 30,
    };

    console.log(data.top);

    flyingImg.style.cssText = `
                                --left : ${data.left.toFixed(2)}px;
                                --top : ${data.top.toFixed(2)}px;
                                `;

    setTimeout(() => {
      targetParent.style.zIndex = "";
      targetParent.removeChild(flyingImg);
      shoppingCart.classList.remove("active");
    }, 1000);
  };
}