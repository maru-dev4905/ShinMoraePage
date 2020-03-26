const changeBtn = document.querySelector(".aside--btn");
const aside = document.querySelector("aside");
const aGroup = document.querySelectorAll("a");
const banner = document.querySelector(".banner");
const mainSection = document.querySelector(".section--main");
const mainSectionText = document.querySelector(".section--main--text");
const bannerText = banner.childNodes;

const CHANGECHECK = "darkMode";
const LOCALCHECK = localStorage.getItem(CHANGECHECK);

let darkModeCheck = "white";

blackMode = () => {
    aside.style.backgroundColor = "#E2E2E2"
    
    for(let i=0; i < aGroup.length; i++){
        aGroup[i].style.color="#000";
    }
    banner.style.backgroundColor = "#fff";
    bannerText[1].style.color = "#000";
    mainSection.style.backgroundColor = "#f4f4f4";
    mainSectionText.style.color = "#000";
}
whiteMode = () => {
    aside.style.backgroundColor = "#2d2d2d"

    for(let i=0; i < aGroup.length; i++){
        aGroup[i].style.color="#fff";
    }
    banner.style.backgroundColor = "#000";
    bannerText[1].style.color = "#fff";
    mainSection.style.backgroundColor = "#4b4b4b";
    mainSectionText.style.color = "#fff";
}
changeBtn.addEventListener("click",function(){
    
    if( darkModeCheck === "black"){
        whiteMode();
        localStorage.setItem(CHANGECHECK,"black");
        darkModeCheck = "white";
    }else if(darkModeCheck === "white"){
        blackMode();
        localStorage.setItem(CHANGECHECK,"white");
        darkModeCheck = "black";
    }
});
window.onload = () => {
    if(LOCALCHECK === "black"){
        whiteMode();
    }else if(LOCALCHECK === "white"){
        blackMode();
    }
};