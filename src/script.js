// //navbar start

function myFunction(x) {
  x.classList.toggle("change");
}

const navBtn = document.querySelector("#nav-btn");
const mainNav = document.querySelector("#navbar");
let width = true;
navBtn.addEventListener("click", () => {
  if (width === true) {
    mainNav.style.width = "350px";
    width = false;
  } else {
    width = true;
    mainNav.style.width = "0px";
  }
});
// //navbar end

// Upcomig events start

const box1 = document.querySelector("#box-1");
const date1 = document.querySelector("#date-1");
const time1 = document.querySelector("#time-1");
const heading1 = document.querySelector("#heading-1");
const btn1 = document.querySelector("#btn-1");
const para1 = document.querySelector("#para-1");
let value1 = true;
btn1.addEventListener("click", () => {
  if (value1 === true) {
    value1 = false;
    para1.style.height = "200px";
    para1.style.paddingTop = "20px";
    box1.style.backgroundImage = "linear-gradient(to right, #0d3372, #066fb4)"
    date1.style.color = "white"
    time1.style.color = "white"
    heading1.style.color = "white"
    btn1.style.border = "solid 2px white"
  } else {
    value1 = true;
    para1.style.height = "0px"
    para1.style.paddingTop = "0px"
    box1.style.backgroundImage = "none"
    box1.style.backgroundColor = "#dbecf7"
    date1.style.color = "#555555"
    time1.style.color = "#555555"
    heading1.style.color = "#292929"
    btn1.style.border = "none"
  }
})


const box2 = document.querySelector("#box-2");
const date2 = document.querySelector("#date-2");
const time2 = document.querySelector("#time-2");
const heading2 = document.querySelector("#heading-2");
const btn2 = document.querySelector("#btn-2");
const para2 = document.querySelector("#para-2");
let value2 = true;

btn2.addEventListener("click", () => {
  if (value2 === true) {
    value2 = false;
    para2.style.height = "200px";
    para2.style.paddingTop = "20px";
    box2.style.backgroundImage = "linear-gradient(to right, #0d3372, #066fb4)"
    date2.style.color = "white"
    time2.style.color = "white"
    heading2.style.color = "white"
    btn2.style.border = "solid 2px white"
  } else {
    value2 = true;
    para2.style.height = "0px"
    para2.style.paddingTop = "0px"
    box2.style.backgroundImage = "none"
    box2.style.backgroundColor = "white"
    date2.style.color = "#555555"
    time2.style.color = "#555555"
    heading2.style.color = "#292929"
    btn2.style.border = "none"
  }
})



const box3 = document.querySelector("#box-3");
const date3 = document.querySelector("#date-3");
const time3 = document.querySelector("#time-3");
const heading3 = document.querySelector("#heading-3");
const btn3 = document.querySelector("#btn-3");
const para3 = document.querySelector("#para-3");
let value3 = true;

btn3.addEventListener("click", () => {
  if (value3 === true) {
    value3 = false;
    para3.style.height = "200px";
    para3.style.paddingTop = "20px";
    box3.style.backgroundImage = "linear-gradient(to right, #0d3372, #066fb4)"
    date3.style.color = "white"
    time3.style.color = "white"
    heading3.style.color = "white"
    btn3.style.border = "solid 2px white"
  } else {
    value3 = true;
    para3.style.height = "0px"
    para3.style.paddingTop = "0px"
    box3.style.backgroundImage = "none"
    box3.style.backgroundColor = "#dbecf7"
    date3.style.color = "#555555"
    time3.style.color = "#555555"
    heading3.style.color = "#292929"
    btn3.style.border = "none"
  }
})


const box4 = document.querySelector("#box-4");
const date4 = document.querySelector("#date-4");
const time4 = document.querySelector("#time-4");
const heading4 = document.querySelector("#heading-4");
const btn4 = document.querySelector("#btn-4");
const para4 = document.querySelector("#para-4");
let value4 = true;

btn4.addEventListener("click", () => {
  if (value4 === true) {
    value4 = false;
    para4.style.height = "200px";
    para4.style.paddingTop = "20px";
    box4.style.backgroundImage = "linear-gradient(to right, #0d3372, #066fb4)"
    date4.style.color = "white"
    time4.style.color = "white"
    heading4.style.color = "white"
    btn4.style.border = "solid 2px white"
  } else {
    value4 = true;
    para4.style.height = "0px"
    para4.style.paddingTop = "0px"
    box4.style.backgroundImage = "none"
    box4.style.backgroundColor = "white"
    date4.style.color = "#555555"
    time4.style.color = "#555555"
    heading4.style.color = "#292929"
    btn4.style.border = "none"
  }
})


const box5 = document.querySelector("#box-5");
const date5 = document.querySelector("#date-5");
const time5 = document.querySelector("#time-5");
const heading5 = document.querySelector("#heading-5");
const btn5 = document.querySelector("#btn-5");
const para5 = document.querySelector("#para-5");
let value5 = true;

btn5.addEventListener("click", () => {
  if (value5 === true) {
    value5 = false;
    para5.style.height = "200px";
    para5.style.paddingTop = "20px";
    box5.style.backgroundImage = "linear-gradient(to right, #0d3372, #066fb4)"
    date5.style.color = "white"
    time5.style.color = "white"
    heading5.style.color = "white"
    btn5.style.border = "solid 2px white"
  } else {
    value5 = true;
    para5.style.height = "0px"
    para5.style.paddingTop = "0px"
    box5.style.backgroundImage = "none"
    box5.style.backgroundColor = "#dbecf7"
    date5.style.color = "#555555"
    time5.style.color = "#555555"
    heading5.style.color = "#292929"
    btn5.style.border = "none"
  }
})





// Upcomig events end

