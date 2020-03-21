let sanduba = document.querySelector(".sanduba");
let menu_l = document.querySelector(".flex");

let b_accordeon = document.querySelector(".title");
let c_accordeon = document.querySelectorAll(".accordeon > li");
// console.log(c_accordeon);

function show_m_l(){
    if(menu_l.style.right == "15vw"){
        menu_l.classList.toggle("mostrar");
    }

    menu_l.classList.toggle("mostrar");
}

function show_c_ac(i){
    // c_accordeon[i].classList.toggle("show_ac");
    // for(let li of c_accordeon){
    //     if(li != c_accordeon[i] && !li.classList.contains("show_ac")){
    //         li.classList.toggle("show_ac");
    //     }
        
    // }
    if(c_accordeon[i].style.maxHeight == "150px"){
        c_accordeon[i].style.maxHeight = "0px";
    } else{
        c_accordeon[i].style.maxHeight = "150px";
    }
    for(let li of c_accordeon){
            if(li != c_accordeon[i] && li.style.maxHeight == "150px"){
                li.style.maxHeight = "0px";
            }
    }

}


sanduba.addEventListener("click", show_m_l);