

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