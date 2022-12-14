const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class")
const HIDDEN = "hidden";
function showDetails(){
    mainElement.classList.remove(HIDDEN);
}
function hideDetails(){
    mainElement.classList.add(HIDDEN);
}
function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    showDetails();
    const dataTitle = anchor.getAttribute("data-details-title");
    detailsTitle.innerHTML = dataTitle;
    
}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function(){
        setDetails(anchorElements[i]);
    })
}