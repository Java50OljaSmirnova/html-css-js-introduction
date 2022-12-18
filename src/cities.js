const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const detailsContainer = document.querySelector(".details-container");
const mainElement = document.querySelector(".main-class");
const audio = document.querySelector("#audio");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
function showDetails(){
    mainElement.classList.remove(HIDDEN);
    setTimeout(function(){
        audio.play();
    });
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function(){
        detailsContainer.classList.remove(IS_POINT);
    })
    
   

}
function hideDetails(){
    mainElement.classList.add(HIDDEN);
    setTimeout(function(){
        audio.pause();
    });
}
function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    audio.src = anchor.getAttribute("data-audio");
    showDetails();
    const dataTitle = anchor.getAttribute("data-details-title");
    detailsTitle.innerHTML = dataTitle;
}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function(){
        setDetails(anchorElements[i]);
    })
}