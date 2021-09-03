var pages= document.querySelectorAll(".page");
var left_swipe= document.querySelector(".left-slide");
var right_swipe= document.querySelector(".right-slide");
console.log(pages);
var curr_page= 0;

right_swipe.addEventListener("click", ()=> {
    console.log("triggered");
    for(var i= 0;i<pages.length;i++) {
        if(!pages[i].classList.contains("vanish"))
        pages[i].classList.add("vanish");
    }
    curr_page= (curr_page+1)%pages.length;
    console.log(pages[curr_page]);
    pages[curr_page].classList.remove("vanish");
});

left_swipe.addEventListener("click", ()=> {
    console.log("triggered");
    for(var i= 0;i<pages.length;i++) {
        if(!pages[i].classList.contains("vanish"))
        pages[i].classList.add("vanish");
    }
    curr_page= (curr_page-1+ pages.length)%pages.length;
    console.log(pages[curr_page]);
    pages[curr_page].classList.remove("vanish");
});