alert("This is Passenger Counter App made using Js");

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

// initialization
let count = 0;

// increamenting by 1
function increament() {
    count += 1;
    countEl.textContent = count;
}

// save and set the count to zero
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
