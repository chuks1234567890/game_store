let imageIndex=0;
let inte
const liHolder=document.querySelector(".slide")
const lis=document.querySelectorAll(".slide .li")
const mm=document.querySelector(".con2")
const slide=(imageindex)=>{
    liHolder.style.transform=`translate(-${imageindex * 100}%)`
    if (imageIndex== lis.length -1){
        clearInterval(inte)
        imageIndex=-1
        autoScroll()
    }
}
const autoScroll=()=>{
    inte=setInterval(()=>slide(++imageIndex),2000)
    
}
autoScroll()
function hide(){
    mm.style="opacity:0; visibility:hidden"
}