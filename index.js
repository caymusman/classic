

let ddPressed = false;
let ddIcon = document.getElementById("dropdownIcon");
let dd = document.getElementById("dropdown");
ddIcon.addEventListener("click", () => {
    if(ddPressed){
        dd.classList.remove("showDD");
        ddIcon.classList.remove("showDD");
        ddPressed = false;
    }else{
        dd.classList.add("showDD");
        ddIcon.classList.add("showDD");
        ddPressed = true;
    }
})

let root = document.documentElement;

window.onload = () => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        root.style.setProperty('--page-height', screen.height + "px");
    }else{
        root.style.setProperty('--page-height', screen.height * .91 + "px");
    }
    
    root.style.setProperty('--page-width', screen.width + "px");
}