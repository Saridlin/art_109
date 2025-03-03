
console.log("hello world");

let pageTitle = document.querySelector("#page-title");
let header = document.querySelector("header");
let body = document.querySelector("body");

let img0 = document.querySelector("#img0");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");
let img7 = document.querySelector("#img7");
let img8 = document.querySelector("#img8");




img0.addEventListener('click', () => {
    img3.style.visibility = "visible";
});


img3.addEventListener('click', () => {
    img7.style.visibility = "visible";
});


img7.addEventListener('click', () => {
    img2.style.visibility = "visible";
});

img2.addEventListener('click', () => {
    img8.style.visibility = "visible";
});

img8.addEventListener('click', () => {
    img1.style.visibility = "visible";
});

img1.addEventListener('click', () => {
    img4.style.visibility = "visible";
});

img4.addEventListener('click', () => {
    img6.style.visibility = "visible";
});

img6.addEventListener('click', () => {
    img5.style.visibility = "visible";
});




//for loop to add click event listener to all images
//disappear on click
for(let i = 0; i < 7; i++){
  let n = document.querySelector("#isopod" + i);
  let m = document.querySelector("#isopod" + (i + 1));
  n.addEventListener("click", function(){
    m.style.visibility = "visible";
  });
}

/*
cleaner looping through fetched array of labeled div classes

let divNodes = document.querySelectorAll(".image-div");
let divs = Array.from(divNodes);

for(i = 0; i < divs.length; i++){
  let currDiv = divs[i];
  let nextDiv = divs[i+1];
  currDiv.addEventListener("click", function(){
    nextDiv.style.visibility = "visible";
  });
}
*/

//js timeout change: title color change 3 secs after page load
setTimeout(function(){
  pageTitle.style.color = "brown";
  console.log("timeout executed.");
}, 3000);

//click event on header changes background color
header.onclick = function(){
  console.log("header clicked");
  body.style.backgroundColor = "green";
}

