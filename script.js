[
    {
        "game-title":"Sliding puzzle",
        "game-details":"Slide blocks to win",
        "theme-background":"#325872",
        "text-color":"#fff",
        "background-image-url":"sliding-puzzle.png",
        "high-score":300,
        "btn-type":"btn-white"
    }
]
const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ 
        if (!entry.isIntersecting){
            document.querySelector(".header").classList.add("show-header")
        }
        else{
            document.querySelector(".header").classList.remove("show-header")
        }
    });
    
});
observer.observe(document.querySelector(".hero-txt"));
const color = document.querySelectorAll(".games li");
for (let i = 0; i < color.length; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    color[i].style.backgroundColor=`${randomHex}`

}