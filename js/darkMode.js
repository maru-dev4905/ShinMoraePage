const changeBtn = document.querySelector(".aside--btn");
const aside = document.querySelector("aside");
const aGroup = document.querySelectorAll("a");
const banner = document.querySelector(".banner");

const mainImgCouple = document.querySelector(".main__img_couple");
const mainImgNight = document.querySelector(".main__img_night");
const bannerText = banner.childNodes;
const mainSection = document.querySelector(".section--main");

const CHANGECHECK = "darkMode";
const LOCALCHECK = localStorage.getItem(CHANGECHECK);

let darkModeCheck = "white";
let path = window.location.pathname;
let mainSectionText;

path = path.split("/").pop();

if(path === "index.html"){
     mainSectionText = document.querySelector(".section--main--text");
}
console.log(path);
blackMode = () => {
    aside.style.backgroundColor = "#E2E2E2"
    
    for(let i=0; i < aGroup.length; i++){
        aGroup[i].style.color="#000";
    }
    banner.style.backgroundColor = "#fff";
    bannerText[1].style.color = "#000";
    
    mainSection.style.backgroundColor = "#f4f4f4";
    if(path==="index.html"){
        mainSectionText.style.color = "#000";
        mainImgCouple.setAttribute("src","./image/artwork/2016/th-12_nov_2016_2.jpg");
        mainImgNight.setAttribute("src","./image/artwork/2015/th-11_yandb2.jpg");
    }
}
whiteMode = () => {
    aside.style.backgroundColor = "#2d2d2d"

    for(let i=0; i < aGroup.length; i++){
        aGroup[i].style.color="#fff";
        banner.style.backgroundColor = "#000";
    }
    banner.style.backgroundColor = "#000";
    bannerText[1].style.color = "#fff";

    mainSection.style.backgroundColor = "#4b4b4b";
    if(path==="index.html"){
        mainSectionText.style.color = "#fff";
        mainImgCouple.setAttribute("src","./image/artwork/2016/th-12_nov_2016.jpg");
        mainImgNight.setAttribute("src","./image/artwork/2015/th-11_yandb3.png");
    }

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