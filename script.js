const btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", ()=>{
        let more = document.getElementById("more"+(i+1));
        let text = document.getElementById("text" + (i+1));
        if(getComputedStyle(more).display === "none"){
            more.style.display = "inline";
            text.style.display ="inline"
            btn[i].innerText = "Read Less";
        } else {
            more.style.display = "none";
            text.style.display ="none"
            btn[i].innerText = "Read More";
        }
    });
}
