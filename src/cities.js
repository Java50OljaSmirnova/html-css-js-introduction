const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    const dataTitle = anchor.getAttribute("data-details-title");
    detailsTitle.innerHTML = dataTitle;
}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function(){
        setDetails(anchorElements[i]);
    })
}