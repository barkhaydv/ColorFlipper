let hexColors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexBody=document.querySelector('body');
let color=document.querySelector('.color');
let btn=document.querySelector('.btn');

btn.addEventListener("click",getHex);
function getHex(){
    let colorName="#";
    for(let i=0;i<6;i++){
       let colorValue=Math.floor(Math.random()*hexColors.length);
        colorName += hexColors[colorValue];

    }
    hexBody.style.backgroundColor=colorName;
    color.innerHTML=colorName;
}