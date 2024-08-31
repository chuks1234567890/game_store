let all_data=document.querySelectorAll(".photo")
const msgwrap=document.querySelector(".message-wrapper")
let msgwdth=msgwrap.offsetHeight
const theme=document.querySelector(".theme")
window.addEventListener("resize",()=>{
    msgwdth=msgwrap.offsetHeight
    document.documentElement.style.setProperty("--pour",`${eval(msgwdth + 15)}px`)
})
document.documentElement.style.setProperty("--pour",`${eval(msgwdth + 15)}px`)
for (let i = 0; i < all_data.length; i++) {
    // generating a random hex color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    
    all_data[i].style.background=randomHex
}
theme.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})