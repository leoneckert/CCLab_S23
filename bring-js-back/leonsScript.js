// alert("hi!!! welcome to my website");

// select element on page
let headline = document.getElementById("myHeadline");
let theButton = document.getElementById("myButton");
let theRange = document.getElementById("myRange");


// attach a event listener to button
theButton.addEventListener("click", changeHeadline)

function changeHeadline(){
    // manipulate the selected element
    headline.textContent = "hello hello hello";
}

// attach event listener to range:
theRange.addEventListener("input", rangeWasUsed)

function rangeWasUsed(){
    // console.log(theRange.value);
    let valueOfRange = theRange.value;
    headline.style.fontSize = valueOfRange + "px";
}







