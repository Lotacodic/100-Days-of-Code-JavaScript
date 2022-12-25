const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, index)  => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[index].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[index].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    })
})