const changeBtn = document.querySelector(".aside--btn");
const aside = document.querySelector("aside");
const aGroup = document.querySelectorAll("a");
const banner = document.querySelector(".banner");
const mainSection = document.querySelector(".section--main");
const mainSectionText = document.querySelector(".section--main--text");

const bannerText = banner.childNodes;

let changeCheck = "white";

changeBtn.addEventListener("click",function(){
    
    if(changeCheck === "white"){
        aside.style.backgroundColor = "#2d2d2d"

        for(let i=0; i < aGroup.length; i++){
            aGroup[i].style.color="#fff";
        }
        banner.style.backgroundColor = "#000";
        bannerText[1].style.color = "#fff";
        mainSection.style.backgroundColor = "#4b4b4b";
        mainSectionText.style.color = "#fff";
        
        changeCheck = "black";
    }else if(changeCheck === "black"){
        aside.style.backgroundColor = "#E2E2E2"

        for(let i=0; i < aGroup.length; i++){
            aGroup[i].style.color="#000";
        }
        banner.style.backgroundColor = "#fff";
        bannerText[1].style.color = "#000";
        mainSection.style.backgroundColor = "#f4f4f4";
        mainSectionText.style.color = "#000";

        changeCheck = "white";
    }
})