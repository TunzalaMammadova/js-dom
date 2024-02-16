"use strict"

let light = document.querySelector(".light")
let box = document.querySelector("i")




// box.addEventListener("click", function () {

//     if (!light.classList.contains("first-color")) {
//         light.classList.add("first-color")
//         light.classList.remove("second-color")
//         let elem = document.querySelector(".light i");
//         elem.style.color = "black"
//     }

//     box.addEventListener("click", function () {s

//        if (!light.classList.contains("second-color")) {
//             light.classList.add("second-color")
//             light.classList.remove("first-color")
//             let element = document.querySelector(".light i");
//             element.style.color = "yellow"

//         }
//     })

// })



let ul = document.querySelector("ul")


document.querySelector(".add").addEventListener("click", function () {
    let input = document.querySelector(".input-text");
    let text = input.value;
    if (text.trim() == "") {
        document.querySelector(".validation").classList.remove("d-none");

        return;
    } else {
        document.querySelector(".validation").classList.add("d-none");

    }
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = text;
    ul.append(li);
    input.value = "";
})


document.querySelector(".delete").addEventListener("click", function () {
    // let input = document.querySelector(".input-text");
    // let text = input.value;
    // if (text.trim() == "") {
    //     document.querySelector(".validation").classList.remove("d-none");

    //     return;
    // } else {
    //     document.querySelector(".validation").classList.add("d-none");

    // }
    //let li = document.createElement("li");
    // let li = document.getElementById("list-group");
    // li.className = "list-group-item";
    // li.innerText = text;
    // ul.append(li);
    // input.value = "";

})



